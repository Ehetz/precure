import { db } from '@/lib/db'
import type { ResultSetHeader } from 'mysql2/promise'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const [rows] = await db.query('SELECT * FROM factories')
    return NextResponse.json(rows)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, status, comment, address, contacts, websites, telefone } = await req.json()

    if (!name) {
      return NextResponse.json({ error: 'Name fehlt' }, { status: 400 })
    }

    const [factoryRes] = await db.query<ResultSetHeader>(
      'INSERT INTO factories (name, status, comment) VALUES (?, ?, ?)',
      [name, status || 'not_contacted', comment || null]
    )

    const factoryId = (factoryRes as ResultSetHeader).insertId

    if (address) {
      const { street_name, street_no, postal_code } = address
      if (street_name && street_no && postal_code) {
        await db.query(
          'INSERT INTO addresses (factory_id, street_name, street_no, postal_code) VALUES (?, ?, ?, ?)',
          [factoryId, street_name, street_no, postal_code]
        )
      }
    }

    if (Array.isArray(contacts)) {
      for (const c of contacts) {
        const { employee_name, email, phone_no, role } = c
        if (employee_name && email && phone_no && role) {
          await db.query(
            'INSERT INTO contact (factory_id, employee_name, email, phone_no, role) VALUES (?, ?, ?, ?, ?)',
            [factoryId, employee_name, email, phone_no, role]
          )
        }
      }
    }

    if (Array.isArray(websites)) {
      for (const w of websites) {
        const { url } = w
        if (url) {
          await db.query(
            'INSERT INTO websites (factory_id, url) VALUES (?, ?)',
            [factoryId, url]
          )
        }
      }
    }

    if (Array.isArray(telefone)) {
      for (const t of telefone) {
        const { phone_no, comment: telComment } = t
        if (phone_no) {
          await db.query(
            'INSERT INTO telefone (factory_id, phone_no, comment) VALUES (?, ?, ?)',
            [factoryId, phone_no, telComment || null]
          )
        }
      }
    }

    return NextResponse.json({ message: 'Fabrik erstellt', id: factoryId })
  } catch (error) {
    console.error('API Fehler:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
