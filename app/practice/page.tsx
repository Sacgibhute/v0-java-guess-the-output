"use client"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { PracticeHeader } from "@/components/practice/practice-header"
import { PracticeContent } from "@/components/practice/practice-content"

export default function PracticePage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Extract parameters
  const difficulty = searchParams.get("difficulty")
  const topic = searchParams.get("topic")
  const javaVersion = searchParams.get("javaVersion")

  // Validate and normalize parameters
  useEffect(() => {
    // Convert parameters to correct format if necessary
    const normalizedDifficulty =
      difficulty && ["Basic", "Intermediate", "Advanced", "Expert"].includes(difficulty) ? difficulty : "all"

    const normalizedTopic = topic && topic.length > 0 ? topic : "all"

    // If parameters need normalization, update URL
    if ((difficulty && normalizedDifficulty !== difficulty) || (topic && normalizedTopic !== topic)) {
      const params = new URLSearchParams(searchParams.toString())

      if (difficulty && normalizedDifficulty !== difficulty) {
        params.set("difficulty", normalizedDifficulty)
      }

      if (topic && normalizedTopic !== topic) {
        params.set("topic", normalizedTopic)
      }

      router.replace(`/practice?${params.toString()}`, { scroll: false })
    }

    // Debug log to verify parameters are being processed
    console.log(
      `Practice Page - Difficulty: ${normalizedDifficulty}, Topic: ${normalizedTopic}, Java: ${javaVersion || "all"}`,
    )
  }, [difficulty, topic, javaVersion, router, searchParams])

  return (
    <main className="min-h-screen bg-slate-50">
      <PracticeHeader />
      <PracticeContent />
    </main>
  )
}
