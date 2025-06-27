import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const { confirm } = await req.json()
    if (confirm !== 'CONFIRM') {
      return NextResponse.json({ error: 'Best\u00e4tigung fehlt' }, { status: 400 })
    }

    await db.query('DELETE FROM contact WHERE id = ?', [Number(id)])
    return NextResponse.json({ message: 'Kontakt gel\u00f6scht' })
  } catch (error) {
    console.error('API Fehler:', error)
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
