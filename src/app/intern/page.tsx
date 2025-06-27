'use client'

import { useEffect, useState } from 'react'

interface Factory {
  id: number
  name: string
  address?: string
  status: string
  comment?: string
}

interface Address {
  street_name: string
  street_no: number
  postal_code: number
}

interface Contact {
  employee_name: string
  email: string
  phone_no: string
  role: string
}

interface Website { url: string }

interface Telefon { phone_no: string; comment?: string }

interface FactoryDetails {
  factory: Factory
  addresses?: Address[]
  contacts?: Contact[]
  websites?: Website[]
  telefone?: Telefon[]
}

export default function InternPage() {
  const [factories, setFactories] = useState<Factory[]>([])
  const [selectedFactory, setSelectedFactory] = useState<FactoryDetails | null>(null)
  const [search, setSearch] = useState('')
  const [commentText, setCommentText] = useState('')

  useEffect(() => {
    fetch('/api/factories')
      .then(res => res.json())
      .then(data => setFactories(data))
  }, [])

  const handleSelect = async (name: string) => {
    const res = await fetch(`/api/factories/${encodeURIComponent(name)}`)
    if (!res.ok) {
      setSelectedFactory(null)
      return
    }
    const data = (await res.json()) as FactoryDetails
    setSelectedFactory(data)
    setCommentText(data.factory.comment ?? '')
  }

  const updateFactory = async (
    name: string,
    data: { status?: string; comment?: string }
  ) => {
    const res = await fetch(`/api/factories/${encodeURIComponent(name)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (!res.ok) return false
    setFactories(prev =>
      prev.map(f => (f.name === name ? { ...f, ...data } : f))
    )
    setSelectedFactory(prev =>
      prev && prev.factory.name === name
        ? { ...prev, factory: { ...prev.factory, ...data } }
        : prev
    )
    return true
  }

  const markAsContacted = async (name: string) => {
    updateFactory(name, { status: 'contacted' })
  }

  const markAsNotContacted = async (name: string) => {
    updateFactory(name, { status: 'not_contacted' })
  }

  const saveComment = async (name: string) => {
    const ok = await updateFactory(name, { comment: commentText })
    if (!ok) return
  }

  const filtered = factories.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Willkommen zu Precure Database</h1>

      <input
        className="w-full max-w-md px-4 py-2 rounded bg-gray-800 border border-gray-600 mb-6"
        type="text"
        placeholder="Suche nach Fabrikname..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ul className="space-y-3">
            {filtered.map(factory => (
              <li
                key={factory.id}
                className="cursor-pointer p-4 rounded bg-[#161c26] hover:bg-blue-800 transition"
                onClick={() => handleSelect(factory.name)}
              >
                <div className="font-bold">{factory.name}</div>
                <div className="text-sm text-blue-200">{factory.address}</div>
                <div className={`text-xs mt-1 ${factory.status === 'contacted' ? 'text-green-400' : 'text-yellow-400'}`}>
                  {factory.status === 'contacted' ? 'Kontakt aufgenommen' : 'Noch nicht kontaktiert'}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {selectedFactory ? (
            <div className="bg-[#161c26] p-6 rounded-lg shadow-lg space-y-3">
              <h2 className="text-2xl font-semibold">{selectedFactory.factory.name}</h2>
              <p className={`text-sm ${selectedFactory.factory.status === 'contacted' ? 'text-green-400' : 'text-yellow-400'}`}>
                {selectedFactory.factory.status === 'contacted' ? 'Kontakt aufgenommen' : 'Noch nicht kontaktiert'}
              </p>
              {selectedFactory.factory.status !== 'contacted' ? (
                <button
                  onClick={() => markAsContacted(selectedFactory.factory.name)}
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Als kontaktiert markieren
                </button>
              ) : (
                <button
                  onClick={() => markAsNotContacted(selectedFactory.factory.name)}
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Als nicht kontaktiert markieren
                </button>
              )}

              <p className="text-blue-100 mt-2">
                {selectedFactory.factory.comment || 'Kein Kommentar'}
              </p>

              <div className="mt-2">
                <textarea
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                  rows={3}
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                />
                <button
                  onClick={() => saveComment(selectedFactory.factory.name)}
                  className="mt-2 bg-[#3d7188] hover:bg-[#2e5f70] text-white px-4 py-2 rounded"
                >
                  Kommentar speichern
                </button>
              </div>

              <div>
                <h3 className="font-semibold">Adresse:</h3>
                {selectedFactory.addresses && selectedFactory.addresses.length > 0 ? (
                  selectedFactory.addresses.map((a, i) => (
                    <p key={i}>{`${a.street_name} ${a.street_no}, ${a.postal_code}`}</p>
                  ))
                ) : (
                  <p className="text-blue-200">Keine Adresse vorhanden.</p>
                )}
              </div>

              <div>
                <h3 className="font-semibold">Kontakt:</h3>
                {selectedFactory.contacts && selectedFactory.contacts.length > 0 ? (
                  selectedFactory.contacts.map((c, i) => (
                    <div key={i} className="mb-2">
                      <p><strong>{c.employee_name}</strong> – {c.role}</p>
                      <p>{c.email} | {c.phone_no}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-blue-200">Kein Kontakt eingetragen.</p>
                )}
              </div>

              <div>
                <h3 className="font-semibold">Telefonnummern:</h3>
                {selectedFactory.telefone && selectedFactory.telefone.length > 0 ? (
                  selectedFactory.telefone.map((t, i) => (
                    <p key={i}>{t.phone_no}{t.comment && ` (${t.comment})`}</p>
                  ))
                ) : (
                  <p className="text-blue-200">Keine Telefonnummern vorhanden.</p>
                )}
              </div>

              {selectedFactory.websites && selectedFactory.websites.length > 0 && (
                <div>
                  <h3 className="font-semibold">Webseiten:</h3>
                  {selectedFactory.websites.map((w, i) => (
                    <a
                      key={i}
                      href={w.url.startsWith('http') ? w.url : `https://${w.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 underline block"
                    >
                      {w.url}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-blue-300">Wähle eine Fabrik aus, um Details zu sehen.</p>
          )}
        </div>
      </div>
    </div>
  )
}
