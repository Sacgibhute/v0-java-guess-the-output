"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Question } from "@/components/question"
import { Pagination } from "@/components/pagination"
import { useQuestions } from "@/hooks/use-questions"
import { Badge } from "@/components/ui/badge"
import { NavigationButtons } from "@/components/navigation-buttons"

export function QuestionList() {
  const [page, setPage] = useState(1)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const searchParams = useSearchParams()
  const topic = searchParams.get("topic") || "all"
  const difficulty = searchParams.get("difficulty") || "all"

  // Reset page and active question when filters change
  useEffect(() => {
    setPage(1)
    setActiveQuestionIndex(0)
  }, [topic, difficulty])

  const { questions, isLoading, totalPages, totalQuestions } = useQuestions(topic, difficulty, page)

  const handlePrevious = () => {
    if (activeQuestionIndex > 0) {
      // If not the first question on the page, go to previous question
      setActiveQuestionIndex(activeQuestionIndex - 1)
      // Scroll to the question
      scrollToQuestion(activeQuestionIndex - 1)
    } else if (page > 1) {
      // If first question on page and not first page, go to previous page
      setPage(page - 1)
      // Set active question to last question on previous page
      setActiveQuestionIndex(9) // Assuming 10 questions per page
    }
  }

  const handleNext = () => {
    if (activeQuestionIndex < questions.length - 1) {
      // If not the last question on the page, go to next question
      setActiveQuestionIndex(activeQuestionIndex + 1)
      // Scroll to the question
      scrollToQuestion(activeQuestionIndex + 1)
    } else if (page < totalPages) {
      // If last question on page and not last page, go to next page
      setPage(page + 1)
      // Set active question to first question on next page
      setActiveQuestionIndex(0)
    }
  }

  const scrollToQuestion = (index: number) => {
    const questionElement = document.getElementById(`question-${index}`)
    if (questionElement) {
      questionElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-slate-700">No questions found</h3>
        <p className="text-slate-500 mt-2">Try selecting different filters</p>
      </div>
    )
  }

  const isFirstQuestion = page === 1 && activeQuestionIndex === 0
  const isLastQuestion = page === totalPages && activeQuestionIndex === questions.length - 1

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
        <div className="flex items-center flex-wrap gap-2">
          <h2 className="text-xl font-semibold">{topic === "all" ? "All Questions" : questions[0]?.topicName}</h2>
          {difficulty !== "all" && (
            <Badge className="ml-0" variant="outline">
              {difficulty} Level
            </Badge>
          )}
        </div>
        <span className="text-sm text-slate-500">
          Showing {questions.length} of {totalQuestions} questions
        </span>
      </div>

      {/* Fixed navigation buttons at the top */}
      <div className="sticky top-4 z-10 bg-white shadow-md rounded-lg p-3 mb-6 flex justify-between">
        <NavigationButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          disablePrevious={isFirstQuestion}
          disableNext={isLastQuestion}
          currentQuestion={activeQuestionIndex + 1 + (page - 1) * 10}
          totalQuestions={totalQuestions}
        />
      </div>

      <div className="space-y-8">
        {questions.map((question, index) => (
          <Question
            key={question.id}
            question={question}
            isActive={index === activeQuestionIndex}
            id={`question-${index}`}
          />
        ))}
      </div>

      {/* Bottom navigation buttons */}
      <div className="mt-8 mb-4 bg-white shadow-md rounded-lg p-3 flex justify-between">
        <NavigationButtons
          onPrevious={handlePrevious}
          onNext={handleNext}
          disablePrevious={isFirstQuestion}
          disableNext={isLastQuestion}
          currentQuestion={activeQuestionIndex + 1 + (page - 1) * 10}
          totalQuestions={totalQuestions}
        />
      </div>

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      )}
    </div>
  )
}
