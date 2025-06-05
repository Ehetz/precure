// src/app/factories/[name]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

type FactoryDetails = {
  factory: { name: string; status: string; comment?: string }
  addresses?: { street_name: string; street_no: number; postal_code: number }[]
  contacts?: { employee_name: string; email: string; phone_no: string; role: string }[]
  websites?: { url: string }[]
  telefone?: { phone_no: string; comment?: string }[]
}

export default function FactoryPage() {
  const params = useParams()
  const name = decodeURIComponent(params?.name as string)
  const [data, setData] = useState<FactoryDetails | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/factories/${encodeURIComponent(name)}`)
        const json = await res.json()
        setData(json)
      } catch (err) {
        console.error('Fehler beim Laden der Daten:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [name])

  if (loading) {
    return <div className="text-white p-6">Lädt...</div>
  }

  if (!data) {
    return <div className="text-white p-6">Keine Daten gefunden</div>
  }

  return (
    <div className="p-6 max-w-4xl mx-auto text-white space-y-6">
      <div className="bg-blue-700 text-white px-6 py-4 rounded-xl">
        <h1 className="text-2xl font-bold">{data.factory.name}</h1>
        <p className="text-yellow-300">{data.factory.status === 'contacted' ? 'Kontaktiert' : 'Noch nicht kontaktiert'}</p>
        {data.factory.comment && <p className="mt-2 text-blue-100">{data.factory.comment}</p>}
      </div>

      <div className="bg-[#1a1f2b] p-6 rounded-xl space-y-4">
        <h2 className="text-lg font-semibold">Adresse:</h2>
        {data.addresses && data.addresses.length > 0
          ? data.addresses.map((a, i) => (
            <p key={i}>{`${a.street_name} ${a.street_no}, ${a.postal_code}`}</p>
          ))
          : <p className="text-blue-200">Keine Adresse vorhanden.</p>
        }

        <h2 className="text-lg font-semibold mt-4">Kontakt:</h2>
        {data.contacts && data.contacts.length > 0
          ? data.contacts.map((c, i) => (
            <div key={i} className="mb-2">
              <p><strong>{c.employee_name}</strong> – {c.role}</p>
              <p>{c.email} | {c.phone_no}</p>
            </div>
          ))
          : <p className="text-blue-200">Kein Kontakt eingetragen.</p>
        }

        <h2 className="text-lg font-semibold mt-4">Telefonnummern:</h2>
        {data.telefone && data.telefone.length > 0
          ? data.telefone.map((t, i) => (
            <p key={i}>{t.phone_no}{t.comment && ` (${t.comment})`}</p>
          ))
          : <p className="text-blue-200">Keine Telefonnummern vorhanden.</p>
        }

        {data.websites && data.websites.length > 0 && (
          <>
            <h2 className="text-lg font-semibold mt-4">Webseiten:</h2>
            {data.websites.map((w, i) => (
              <a key={i} href={w.url.startsWith('http') ? w.url : `https://${w.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline block">
                {w.url}
              </a>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
