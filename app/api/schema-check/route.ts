import { NextResponse } from "next/server"
import { debugQuery } from "@/lib/db"

export async function GET() {
  try {
    // Check questions table structure
    const questionsSchema = await debugQuery(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'questions'
    `)

    // Check topics table structure
    const topicsSchema = await debugQuery(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'topics'
    `)

    return NextResponse.json({
      questionsSchema,
      topicsSchema,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Schema check failed",
        message: error.message,
      },
      { status: 500 },
    )
  }
}
