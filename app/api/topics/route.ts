import { NextResponse } from "next/server"
import { topics } from "@/lib/topics"
import { allQuestions } from "@/lib/questions"

export async function GET() {
  // Count questions per topic
  const topicsWithCounts = topics.map((topic) => {
    const count = allQuestions.filter((q) => q.topicId === topic.id).length
    return {
      ...topic,
      count,
    }
  })

  return NextResponse.json(topicsWithCounts)
}
