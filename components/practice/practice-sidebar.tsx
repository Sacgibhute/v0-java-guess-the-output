"use client"

import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"
import type { Question } from "@/lib/types"

interface PracticeSidebarProps {
  questions: Question[]
  currentIndex: number
  answeredQuestions: Record<number, string>
  onQuestionSelect: (index: number) => void
}

export function PracticeSidebar({
  questions,
  currentIndex,
  answeredQuestions,
  onQuestionSelect,
}: PracticeSidebarProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 sticky top-24">
      <h2 className="font-semibold text-lg mb-4">Question Navigator</h2>
      <div className="grid grid-cols-5 gap-2 mb-6">
        {questions.slice(0, 25).map((question, index) => {
          const isAnswered = answeredQuestions[question.id] !== undefined
          const isCorrect = answeredQuestions[question.id] === question.correctAnswer
          const isCurrent = index === currentIndex

          return (
            <button
              key={question.id}
              className={cn(
                "w-full h-10 flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                isCurrent && !isAnswered
                  ? "bg-blue-100 text-blue-700 border-2 border-blue-500"
                  : isCurrent && isAnswered
                    ? isCorrect
                      ? "bg-green-100 text-green-700 border-2 border-green-500"
                      : "bg-red-100 text-red-700 border-2 border-red-500"
                    : isAnswered
                      ? isCorrect
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200",
              )}
              onClick={() => onQuestionSelect(index)}
            >
              {isAnswered ? isCorrect ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" /> : index + 1}
            </button>
          )
        })}
      </div>

      {questions.length > 25 && (
        <p className="text-sm text-slate-500 text-center">
          Showing 25 of {questions.length} questions. Answer these to continue.
        </p>
      )}

      <div className="mt-6 pt-6 border-t border-slate-200">
        <h3 className="font-medium mb-3">Practice Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Total Questions:</span>
            <span className="font-medium">{questions.length}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Answered:</span>
            <span className="font-medium">{Object.keys(answeredQuestions).length}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Remaining:</span>
            <span className="font-medium">{questions.length - Object.keys(answeredQuestions).length}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Correct:</span>
            <span className="font-medium text-green-600">
              {
                Object.entries(answeredQuestions).filter(
                  ([questionId, answerId]) =>
                    questions.find((q) => q.id === Number.parseInt(questionId))?.correctAnswer === answerId,
                ).length
              }
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Incorrect:</span>
            <span className="font-medium text-red-600">
              {
                Object.entries(answeredQuestions).filter(
                  ([questionId, answerId]) =>
                    questions.find((q) => q.id === Number.parseInt(questionId))?.correctAnswer !== answerId,
                ).length
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
