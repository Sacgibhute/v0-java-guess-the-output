import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"
import { allQuestions } from "@/lib/questions" // Keep as fallback

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const topic = searchParams.get("topic") || "all"
  const difficulty = searchParams.get("difficulty") || "all"
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")

  try {
    // Build the SQL query with filters
    let sql = `
      SELECT * FROM questions
      WHERE 1=1
    `

    const params: any[] = []

    if (topic !== "all") {
      sql += ` AND topic_id = $${params.length + 1}`
      params.push(topic)
    }

    if (difficulty !== "all") {
      sql += ` AND difficulty = $${params.length + 1}`
      params.push(difficulty)
    }

    // Count total questions matching the filter
    const countResult = await query(`SELECT COUNT(*) FROM (${sql}) AS filtered_questions`, params)
    const totalQuestions = Number.parseInt(countResult.rows[0].count)

    // Add pagination
    const offset = (page - 1) * limit
    sql += ` LIMIT $${params.length + 1} OFFSET $${params.length + 2}`
    params.push(limit, offset)

    // Execute the query
    const result = await query(sql, params)

    // Transform database rows to match the expected format
    const questions = result.rows.map((row) => ({
      id: row.id,
      text: row.text,
      code: row.code,
      options: row.options,
      correctAnswer: row.correct_answer,
      explanation: row.explanation,
      topicId: row.topic_id,
      topicName: row.topic_name,
      difficulty: row.difficulty,
      javaVersion: row.java_version,
    }))

    // Calculate total pages
    const totalPages = Math.ceil(totalQuestions / limit)

    return NextResponse.json({
      questions,
      pagination: {
        total: totalQuestions,
        page,
        limit,
        totalPages,
      },
      source: "database",
    })
  } catch (error) {
    console.error("Database error:", error)

    // Fallback to static data if database fails
    let filteredQuestions = [...allQuestions]

    if (topic !== "all") {
      filteredQuestions = filteredQuestions.filter((q) => q.topicId === topic)
    }

    if (difficulty !== "all") {
      filteredQuestions = filteredQuestions.filter((q) => q.difficulty === difficulty)
    }

    const totalQuestions = filteredQuestions.length
    const totalPages = Math.ceil(totalQuestions / limit)

    const start = (page - 1) * limit
    const end = start + limit
    const paginatedQuestions = filteredQuestions.slice(start, end)

    return NextResponse.json({
      questions: paginatedQuestions,
      pagination: {
        total: totalQuestions,
        page,
        limit,
        totalPages,
      },
      source: "static", // Indicate this is from static data
    })
  }
}
