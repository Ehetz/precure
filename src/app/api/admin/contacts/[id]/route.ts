import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

async function isAdmin(username: string | null) {
  if (!username) return false
  const [rows] = await db.query('SELECT rol FROM users WHERE username = ?', [username])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = Array.isArray(rows) && rows.length > 0 ? (rows[0] as any) : null
  return user?.rol === 'admin'
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const username = req.headers.get('x-username')
  if (!(await isAdmin(username))) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  try {
    await db.query('DELETE FROM contact WHERE id = ?', [params.id])
    return NextResponse.json({ message: 'Kontakt gelöscht' })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
