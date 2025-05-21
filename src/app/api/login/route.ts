import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username])
    const user = (Array.isArray(rows) && rows.length > 0) ? (rows[0] as any) : null

    if (!user) {
      return NextResponse.json({ message: 'Benutzer nicht gefunden' }, { status: 401 })
    }

    const valid = await bcrypt.compare(password, user.password_hash)
    if (!valid) {
      return NextResponse.json({ message: 'Falsches Passwort' }, { status: 401 })
    }

    return NextResponse.json({ message: 'Login erfolgreich', user: { id: user.id, username: user.username } })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
