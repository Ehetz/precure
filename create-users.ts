import 'dotenv/config'
import bcrypt from 'bcryptjs'
import { db } from './src/lib/db'

async function createUser(username: string, password: string) {
  const hash = await bcrypt.hash(password, 10)

  const [result] = await db.query(
    'INSERT INTO users (username, password_hash) VALUES (?, ?)',
    [username, hash]
  )

  console.log(`✅ Usuario "${username}" creado con éxito.`)
}

async function main() {
  try {
    await createUser('admin', 'admin')
    await createUser('max', 'geheim') // puedes agregar más aquí

    process.exit(0)
  } catch (error) {
    console.error('❌ Error al crear usuario:', error)
    process.exit(1)
  }
}

main()
