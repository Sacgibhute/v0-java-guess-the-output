"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { QuestionView } from "@/components/practice/question-view"
import { PracticeProgress } from "@/components/practice/practice-progress"
import { PracticeSidebar } from "@/components/practice/practice-sidebar"
import { useQuestions } from "@/hooks/use-questions"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { DifficultySection } from "@/components/practice/difficulty-section"
import { TopicSection } from "@/components/practice/topic-section"

export function PracticeContent() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const searchParams = useSearchParams()
  const topic = searchParams.get("topic") || "all"
  const difficulty = searchParams.get("difficulty") || "all"
  const javaVersion = searchParams.get("javaVersion") || "all"

  const { questions, isLoading, totalQuestions } = useQuestions(topic, difficulty, 1, 100, javaVersion)

  useEffect(() => {
    // Reset state when filters change
    setCurrentQuestionIndex(0)
    setAnsweredQuestions({})
    setShowResults(false)
  }, [topic, difficulty, javaVersion])

  const handleAnswerSelected = (questionId: number, answerId: string) => {
    setAnsweredQuestions((prev) => ({
      ...prev,
      [questionId]: answerId,
    }))
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      window.scrollTo(0, 0)
    } else {
      setShowResults(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
    window.scrollTo(0, 0)
  }

  const calculateScore = () => {
    let correct = 0
    Object.entries(answeredQuestions).forEach(([questionId, answerId]) => {
      const question = questions.find((q) => q.id === Number.parseInt(questionId))
      if (question && question.correctAnswer === answerId) {
        correct++
      }
    })
    return {
      correct,
      total: Object.keys(answeredQuestions).length,
      percentage: Math.round((correct / Object.keys(answeredQuestions).length) * 100) || 0,
    }
  }

  const handleRestartPractice = () => {
    setCurrentQuestionIndex(0)
    setAnsweredQuestions({})
    setShowResults(false)
  }

  // If no topic or difficulty is selected, show appropriate sections
  if (topic === "all" && difficulty === "all" && !isLoading) {
    return <TopicSection />
  } else if (difficulty === "all" && topic !== "all" && !isLoading) {
    // Show topic-specific difficulty sections
    return <DifficultySection />
  } else if (difficulty !== "all" && topic === "all" && !isLoading) {
    // Show difficulty-specific topic sections
    return <TopicSection />
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
          <p className="text-lg text-slate-600">Loading practice questions...</p>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">No Questions Found</h2>
          <p className="text-slate-600 mb-6">
            No questions match your current filter criteria. Try selecting different topics or difficulty levels.
          </p>
          <Button asChild>
            <a href="/practice">Reset Filters</a>
          </Button>
        </div>
      </div>
    )
  }

  if (showResults) {
    const score = calculateScore()
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Practice Results</h2>
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-slate-200"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-blue-500"
                  strokeWidth="10"
                  strokeDasharray={`${(score.percentage * 251.2) / 100} 251.2`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl font-bold">{score.percentage}%</span>
                  <span className="block text-sm text-slate-500">
                    {score.correct}/{score.total}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Questions Attempted</h3>
              <p className="text-2xl font-bold">{score.total}</p>
              <p className="text-sm text-slate-500">out of {questions.length} questions</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Correct Answers</h3>
              <p className="text-2xl font-bold">{score.correct}</p>
              <p className="text-sm text-slate-500">{score.percentage >= 70 ? "Great job!" : "Keep practicing!"}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={handleRestartPractice}>Practice Again</Button>
            <Button variant="outline" asChild>
              <a href="/practice">Change Topics</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/">Return Home</a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        <div className="order-2 lg:order-1">
          <PracticeProgress
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            answeredCount={Object.keys(answeredQuestions).length}
          />

          {currentQuestion && (
            <QuestionView
              question={currentQuestion}
              selectedAnswer={answeredQuestions[currentQuestion.id] || null}
              onAnswerSelected={handleAnswerSelected}
              onNextQuestion={handleNextQuestion}
              onPreviousQuestion={handlePreviousQuestion}
              isFirstQuestion={currentQuestionIndex === 0}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
            />
          )}
        </div>

        <div className="order-1 lg:order-2">
          <PracticeSidebar
            questions={questions}
            currentIndex={currentQuestionIndex}
            answeredQuestions={answeredQuestions}
            onQuestionSelect={handleJumpToQuestion}
          />
        </div>
      </div>
    </div>
  )
}
