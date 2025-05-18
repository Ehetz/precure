import Link from 'next/link'
import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna 1: Empresa */}
        <div>
          <h2 className="text-xl font-bold mb-2">precure</h2>
          <p className="text-sm mb-4">
            precure ist ein deutsches Unternehmen für industrielle Instandhaltung
            und moderne Schwingungssensorik. Wir entwickeln präzise und zuverlässige
            Lösungen für die Industrie.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Columna 2: Sitemap */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-3">Sitemap</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/ueber-uns" className="hover:underline">Über uns</Link></li>
            <li><Link href="/produkte" className="hover:underline">Produkte</Link></li>
            <li><Link href="/dienstleistungen" className="hover:underline">Dienstleistungen</Link></li>
            <li><Link href="/kontakt" className="hover:underline">Kontakt</Link></li>
          </ul>
        </div>

        {/* Columna 3: Kontakt */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-3">Kontakt</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2"><Phone size={16} /> +49 123 456 789</li>
            <li className="flex items-center gap-2"><Mail size={16} /> kontakt@precure.de</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Berlin, Deutschland</li>
          </ul>
        </div>
      </div>

      {/* Footer inferior con enlaces legales */}
      <div className="text-center text-xs text-blue-200 mt-10 space-y-2">
        <div className="space-x-4">
          <Link href="/impressum" className="hover:underline">Impressum</Link>
          <Link href="/datenschutz" className="hover:underline">Datenschutz</Link>
        </div>
        <div>
          © {new Date().getFullYear()} precure – Industrielle Instandhaltung
        </div>
      </div>
    </footer>
  )
}
