import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const name = decodeURIComponent(req.nextUrl.pathname.split('/').pop() || '')

    const [factoryRows] = await db.query('SELECT * FROM factories WHERE name = ?', [name])
    const factory = Array.isArray(factoryRows) && factoryRows.length > 0
      ? factoryRows[0] as { id: number; name: string }
      : null

    if (!factory) {
      return NextResponse.json({ error: 'Fabrik nicht gefunden' }, { status: 404 })
    }

    const factoryId = factory.id

    const [addresses] = await db.query('SELECT * FROM addresses WHERE factory_id = ?', [factoryId])
    const [contacts] = await db.query('SELECT * FROM contact WHERE factory_id = ?', [factoryId])
    const [websites] = await db.query('SELECT * FROM websites WHERE factory_id = ?', [factoryId])
    const [telefone] = await db.query('SELECT * FROM telefone WHERE factory_id = ?', [factoryId])

    return NextResponse.json({
      factory,
      addresses,
      contacts,
      websites,
      telefone,
    })
  } catch (error) {
    console.error('API Fehler:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
