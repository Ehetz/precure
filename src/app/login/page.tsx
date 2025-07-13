'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    if (res.ok) {
      const data = await res.json()
      localStorage.setItem('username', data.user.username)
      window.location.href = '/intern'
    } else {
      const data = await res.json()
      setError(data.message || 'Fehler beim Login')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Login für Mitarbeiter</h2>

        <input
          className="w-full mb-4 px-4 py-2 rounded bg-gray-100 text-black border border-gray-300"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <input
          className="w-full mb-6 px-4 py-2 rounded bg-gray-100 text-black border border-gray-300"
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        {error && <div className="text-red-400 mb-4 text-center">{error}</div>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}
