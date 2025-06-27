import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await req.json()
    await db.query('UPDATE factories SET status = ? WHERE id = ?', [status, params.id])
    return NextResponse.json({ message: 'Status aktualisiert' })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
