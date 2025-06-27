import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

async function isAdmin(username: string | null) {
  if (!username) return false
  const [rows] = await db.query('SELECT rol FROM users WHERE username = ?', [username])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = Array.isArray(rows) && rows.length > 0 ? (rows[0] as any) : null
  return user?.rol === 'admin'
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const username = req.headers.get('x-username')
  if (!(await isAdmin(username))) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  try {
    const { name, comment, status } = await req.json()
    await db.query(
      'UPDATE factories SET name = ?, comment = ?, status = ? WHERE id = ?',
      [name, comment, status, params.id]
    )
    return NextResponse.json({ message: 'Fabrik aktualisiert' })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
