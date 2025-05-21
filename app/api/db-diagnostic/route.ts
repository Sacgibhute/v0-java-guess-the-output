import { NextResponse } from "next/server"
import { debugQuery, testConnection } from "@/lib/db"

export async function GET() {
  try {
    // Test basic connection
    const connectionStatus = await testConnection()

    // Test if tables exist
    const tablesCheck = await debugQuery(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `)

    // Test if topics table has data
    const topicsCheck = await debugQuery("SELECT COUNT(*) FROM topics")

    // Test if questions table has data
    const questionsCheck = await debugQuery("SELECT COUNT(*) FROM questions")

    return NextResponse.json({
      connection: connectionStatus,
      tables: tablesCheck,
      topicsCount: topicsCheck,
      questionsCount: questionsCheck,
      env: {
        nodeEnv: process.env.NODE_ENV,
        // Don't expose full connection string for security
        dbConnected: !!process.env.DATABASE_URL,
      },
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Diagnostic failed",
        message: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
