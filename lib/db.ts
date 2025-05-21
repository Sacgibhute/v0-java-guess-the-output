import { Pool } from "pg"

// Create a new pool of PostgreSQL clients
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
})

// Helper function to run queries
export async function query(text: string, params?: any[]) {
  const start = Date.now()
  try {
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log("Executed query", { text, duration, rows: res.rowCount })
    return res
  } catch (error) {
    console.error("Error executing query", { text, error })
    throw error
  }
}

// Function to test the database connection
export async function testConnection() {
  try {
    const result = await query("SELECT NOW()")
    return { connected: true, timestamp: result.rows[0].now }
  } catch (error: any) {
    console.error("Database connection error:", error)
    return { connected: false, error: error.message }
  }
}

// Add this function to get more detailed error information
export async function debugQuery(text: string, params?: any[]) {
  try {
    const res = await pool.query(text, params)
    return { success: true, data: res.rows }
  } catch (error: any) {
    console.error("Query error:", error.message)
    return {
      success: false,
      error: error.message,
      detail: error.detail,
      hint: error.hint,
      position: error.position,
    }
  }
}
