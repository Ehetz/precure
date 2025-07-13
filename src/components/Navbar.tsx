'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, LogIn } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#F7F7F7] text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">precure</Link>

        <nav className="hidden md:flex space-x-6 items-center text-sm font-medium">
          <Link href="/anwendungen">Anwendungen</Link>
          <Link href="/produkte">Produkte</Link>
          <Link href="/dienstleistungen">Dienstleistungen</Link>
          <Link href="/ueber-uns">Über uns</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/warenkorb">Warenkorb</Link>
          <button className="hover:text-blue-600">
            <Search size={18} />
          </button>
          {/* Botón/Login para Mitarbeiter */}
          <Link
            href="/login"
            className="flex items-center gap-2 px-3 py-1 rounded hover:bg-blue-100 transition"
            title="Login für Mitarbeiter"
          >
            <LogIn size={18} className="text-blue-500" />
            <span className="hidden md:inline">Login</span>
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
          aria-label="Menü öffnen"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[#F7F7F7] px-4 pb-4 space-y-2">
          <Link href="/anwendungen">Anwendungen</Link>
          <Link href="/produkte">Produkte</Link>
          <Link href="/dienstleistungen">Dienstleistungen</Link>
          <Link href="/ueber-uns">Über uns</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/warenkorb">Warenkorb</Link>
          {/* Login Button en menú móvil */}
          <Link
            href="/login"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 transition"
            title="Login für Mitarbeiter"
          >
            <LogIn size={18} className="text-blue-500" />
            <span>Login</span>
          </Link>
        </nav>
      )}
    </header>
  )
}
