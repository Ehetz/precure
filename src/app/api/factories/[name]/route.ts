import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await context.params
    const decodedName = decodeURIComponent(name)

    const [factoryRows] = await db.query(
      'SELECT * FROM factories WHERE name = ?',
      [decodedName]
    )

    if (!Array.isArray(factoryRows) || factoryRows.length === 0) {
      return NextResponse.json({ error: 'Fabrik nicht gefunden' }, { status: 404 })
    }

    const factory = factoryRows[0] as { id: number; [key: string]: unknown }
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
      telefone
    })
  } catch (error) {
    console.error('API Fehler:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await context.params
    const { status } = await req.json()
    const decodedName = decodeURIComponent(name)
    await db.query('UPDATE factories SET status = ? WHERE name = ?', [status, decodedName])
    return NextResponse.json({ message: 'Status aktualisiert' })
  } catch (error) {
    console.error('API Fehler:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
