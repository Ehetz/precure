import { db } from '@/lib/db'
import type { ResultSetHeader } from 'mysql2/promise'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await context.params
    const decodedName = decodeURIComponent(name)
    const { employee_name, email, phone_no, role } = await req.json()

    if (!employee_name || !email || !phone_no || !role) {
      return NextResponse.json({ error: 'Fehlende Felder' }, { status: 400 })
    }

    const [rows] = await db.query('SELECT id FROM factories WHERE name = ?', [decodedName])
    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ error: 'Fabrik nicht gefunden' }, { status: 404 })
    }

    const factoryId = (rows[0] as { id: number }).id
    const [result] = await db.query<ResultSetHeader>(
      'INSERT INTO contact (factory_id, employee_name, email, phone_no, role) VALUES (?, ?, ?, ?, ?)',
      [factoryId, employee_name, email, phone_no, role]
    )

    return NextResponse.json({ message: 'Kontakt hinzugefügt', id: result.insertId })
  } catch (error) {
    console.error('API Fehler:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
