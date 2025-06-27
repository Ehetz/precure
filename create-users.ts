import 'dotenv/config'
import bcrypt from 'bcryptjs'
import { db } from './src/lib/db'

async function createUser(username: string, password: string, rol: string) {
  const hash = await bcrypt.hash(password, 10)

  await db.query(
    'INSERT INTO users (username, password_hash, rol) VALUES (?, ?, ?)',
    [username, hash, rol]
  )

  console.log(`✅ Usuario "${username}" creado con éxito.`)
}

async function main() {
  try {
    await createUser('admin', 'admin', 'admin')
    await createUser('max', 'geheim', 'user') // puedes agregar más aquí

    process.exit(0)
  } catch (error) {
    console.error('❌ Error al crear usuario:', error)
    process.exit(1)
  }
}

main()
