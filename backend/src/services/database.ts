import dotenv from "dotenv"
import mysql from "mysql2/promise"

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

dotenv.config()

async function testConnection() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })

  try {
    const connection = await pool.getConnection()
    console.log("Connected to the database!")
    connection.release()
  } catch (error) {
    console.error("Connection error:", error)
  }
}

testConnection()

// export async function getUsers() {
//   const [rows] = await pool.query("SELECT * FROM users")
//   return rows
// }

export async function getUsers() {
  try {
    const [rows] = await pool.query("SELECT * FROM users")
    return rows
  } catch (error) {
    console.error("Database query error:", error)
    throw error
  }
}
