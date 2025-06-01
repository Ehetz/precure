'use client'

import { useEffect, useState } from 'react'

interface Factory {
  id: number
  name: string
  address: string
  status: string
}

interface FactoryDetails extends Factory {
  email: string
  phone: string
  website: string
  notes: string
}

export default function InternPage() {
  const [factories, setFactories] = useState<Factory[]>([])
  const [selectedFactory, setSelectedFactory] = useState<FactoryDetails | null>(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/factories')
      .then(res => res.json())
      .then(data => setFactories(data))
  }, [])

  const handleSelect = async (name: string) => {
    const res = await fetch(`/api/factories/${encodeURIComponent(name)}`)
    const data = await res.json()
    setSelectedFactory(data)
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
              <h2 className="text-2xl font-semibold">{selectedFactory.name}</h2>
              <p><strong>Adresse:</strong> {selectedFactory.address}</p>
              <p><strong>Email:</strong> {selectedFactory.email}</p>
              <p><strong>Telefon:</strong> {selectedFactory.phone}</p>
              <p><strong>Website:</strong> {selectedFactory.website}</p>
              {selectedFactory.notes && <p><strong>Notizen:</strong> {selectedFactory.notes}</p>}
              <p className={`text-sm ${selectedFactory.status === 'contacted' ? 'text-green-400' : 'text-yellow-400'}`}>
                Status: {selectedFactory.status}
              </p>
            </div>
          ) : (
            <p className="text-blue-300">Wähle eine Fabrik aus, um Details zu sehen.</p>
          )}
        </div>
      </div>
    </div>
  )
}
