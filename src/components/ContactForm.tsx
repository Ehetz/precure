'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    nachricht: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formular gesendet:', formData)
    alert('Danke für Ihre Nachricht!')
    setFormData({
      vorname: '',
      nachname: '',
      email: '',
      telefon: '',
      nachricht: '',
    })
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-8 rounded border border-blue-100">
        <h2 className="text-3xl font-bold text-black mb-6">Kontaktieren Sie uns</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
          <div>
            <label htmlFor="vorname" className="block text-sm font-semibold mb-1">Vorname</label>
            <input
              id="vorname"
              type="text"
              name="vorname"
              placeholder="Vorname"
              required
              className="p-3 border rounded bg-blue-50 placeholder-blue-700 w-full"
              value={formData.vorname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nachname" className="block text-sm font-semibold mb-1">Nachname</label>
            <input
              id="nachname"
              type="text"
              name="nachname"
              placeholder="Nachname"
              required
              className="p-3 border rounded bg-blue-50 placeholder-blue-700 w-full"
              value={formData.nachname}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">E-Mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-Mail"
              required
              className="p-3 border rounded bg-blue-50 placeholder-blue-700 w-full"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="telefon" className="block text-sm font-semibold mb-1">Telefon</label>
            <input
              id="telefon"
              type="text"
              name="telefon"
              placeholder="Telefon"
              required
              className="p-3 border rounded bg-blue-50 placeholder-blue-700 w-full"
              value={formData.telefon}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="nachricht" className="block text-sm font-semibold mb-1">Ihre Nachricht</label>
            <textarea
              id="nachricht"
              name="nachricht"
              placeholder="Ihre Nachricht"
              rows={4}
              required
              className="p-3 border rounded bg-blue-50 placeholder-blue-700 w-full"
              value={formData.nachricht}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white py-3 px-6 rounded hover:bg-blue-800 md:col-span-2"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  )
}
