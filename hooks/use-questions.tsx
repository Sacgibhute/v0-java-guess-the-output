"use client"

import { useState, useEffect } from "react"
import type { Question, PaginationData } from "@/lib/types"
import { allQuestions } from "@/lib/questions"

export function useQuestions(topicId: string, difficulty: string, page: number, limit = 10, javaVersion = "all") {
  const [isLoading, setIsLoading] = useState(true)
  const [questions, setQuestions] = useState<Question[]>([])
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
  })

  useEffect(() => {
    // Set loading state immediately when filters change
    setIsLoading(true)

    // Use a small timeout to allow React to render the loading state
    const fetchData = () => {
      let filtered = [...allQuestions]

      console.log(`Filtering - Topic: ${topicId}, Difficulty: ${difficulty}, Java: ${javaVersion}`)

      // Apply topic filter if not "all"
      if (topicId !== "all") {
        filtered = filtered.filter((q) => q.topicId === topicId)
      }

      // Apply difficulty filter if not "all"
      if (difficulty !== "all") {
        filtered = filtered.filter((q) => q.difficulty === difficulty)
      }

      // Apply Java version filter if not "all"
      if (javaVersion !== "all") {
        filtered = filtered.filter((q) => {
          if (!q.javaVersion) return false
          // Handle ranges like "8+" or specific versions
          if (q.javaVersion.includes("+")) {
            const minVersion = Number.parseInt(q.javaVersion.replace("+", ""))
            return Number.parseInt(javaVersion) >= minVersion
          }
          return q.javaVersion.includes(javaVersion)
        })
      }

      // Log how many questions were found for each filter
      console.log(
        `Questions found: ${filtered.length} (By difficulty: ${
          allQuestions.filter((q) => q.difficulty === difficulty).length
        })`,
      )

      const total = filtered.length
      const totalPages = Math.ceil(total / limit) || 1 // Ensure at least 1 page

      const start = (page - 1) * limit
      const end = start + limit
      const paginatedQuestions = filtered.slice(start, end)

      // Update state with filtered questions
      setQuestions(paginatedQuestions)
      setPagination({
        total,
        page,
        limit,
        totalPages,
      })
      setIsLoading(false)
    }

    // Small timeout to ensure loading state is rendered
    const timer = setTimeout(fetchData, 300)

    return () => clearTimeout(timer)
  }, [topicId, difficulty, page, limit, javaVersion]) // Re-run effect when these dependencies change

  return {
    questions,
    isLoading,
    totalPages: pagination.totalPages,
    totalQuestions: pagination.total,
  }
}
