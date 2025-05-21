"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Check, X, HelpCircle, Bookmark, Share2 } from "lucide-react"
import type { Question } from "@/lib/types"
import { JavaVersionBadge } from "@/components/java-version-badge"

interface QuestionViewProps {
  question: Question
  selectedAnswer: string | null
  onAnswerSelected: (questionId: number, answerId: string) => void
  onNextQuestion: () => void
  onPreviousQuestion: () => void
  isFirstQuestion: boolean
  isLastQuestion: boolean
}

export function QuestionView({
  question,
  selectedAnswer,
  onAnswerSelected,
  onNextQuestion,
  onPreviousQuestion,
  isFirstQuestion,
  isLastQuestion,
}: QuestionViewProps) {
  const [showExplanation, setShowExplanation] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleOptionSelect = (optionId: string) => {
    if (!selectedAnswer) {
      onAnswerSelected(question.id, optionId)
    }
  }

  const handleShowExplanation = () => {
    setShowExplanation(true)
  }

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked)
  }

  const isCorrect = selectedAnswer === question.correctAnswer
  const isIncorrect = selectedAnswer && selectedAnswer !== question.correctAnswer

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Basic":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-blue-100 text-blue-800"
      case "Advanced":
        return "bg-purple-100 text-purple-800"
      case "Expert":
        return "bg-red-100 text-red-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="text-sm">
                Question {question.id}
              </Badge>
              <Badge className={getDifficultyColor(question.difficulty)}>{question.difficulty}</Badge>
              {question.javaVersion && <JavaVersionBadge version={question.javaVersion} className="text-sm" />}
              <Badge variant="outline" className="text-sm bg-slate-100">
                {question.topicName}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className={isBookmarked ? "text-yellow-500" : "text-slate-400"}
                onClick={handleBookmarkToggle}
                aria-label="Bookmark question"
              >
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400" aria-label="Share question">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">{question.text}</h2>

          <div className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto mb-6">
            <pre className="text-sm">
              <code>{question.code}</code>
            </pre>
          </div>

          <div className="space-y-3 mb-6">
            {question.options.map((option) => (
              <button
                key={option.id}
                className={cn(
                  "w-full text-left p-4 rounded-lg border-2 transition-colors",
                  !selectedAnswer ? "border-slate-200 hover:border-blue-300 hover:bg-blue-50" : "border-slate-200",
                  selectedAnswer === option.id && option.id === question.correctAnswer
                    ? "border-green-500 bg-green-50"
                    : selectedAnswer === option.id && option.id !== question.correctAnswer
                      ? "border-red-500 bg-red-50"
                      : selectedAnswer && option.id === question.correctAnswer
                        ? "border-green-500 bg-green-50"
                        : "",
                )}
                onClick={() => handleOptionSelect(option.id)}
                disabled={!!selectedAnswer}
              >
                <div className="flex items-center">
                  <div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full mr-3 flex items-center justify-center border-2",
                      selectedAnswer === option.id
                        ? option.id === question.correctAnswer
                          ? "border-green-500 bg-green-100 text-green-700"
                          : "border-red-500 bg-red-100 text-red-700"
                        : selectedAnswer && option.id === question.correctAnswer
                          ? "border-green-500 bg-green-100 text-green-700"
                          : "border-slate-300",
                    )}
                  >
                    {selectedAnswer === option.id ? (
                      option.id === question.correctAnswer ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <X className="h-4 w-4" />
                      )
                    ) : selectedAnswer && option.id === question.correctAnswer ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      option.id
                    )}
                  </div>
                  <span className="text-base">{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          {selectedAnswer && !showExplanation && (
            <div className="flex justify-center">
              <Button onClick={handleShowExplanation} variant="outline" className="gap-2">
                <HelpCircle className="h-4 w-4" />
                Show Explanation
              </Button>
            </div>
          )}

          {showExplanation && (
            <div className="mt-6 p-5 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Explanation:</h3>
              <p className="text-slate-700">{question.explanation}</p>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button onClick={onPreviousQuestion} disabled={isFirstQuestion} variant="outline" className="gap-2">
              <ChevronLeft className="h-4 w-4" /> Previous
            </Button>
            <Button
              onClick={onNextQuestion}
              variant={selectedAnswer ? "default" : "outline"}
              className="gap-2"
              disabled={!selectedAnswer && isLastQuestion}
            >
              {isLastQuestion ? "Finish" : "Next"} <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {selectedAnswer && (
        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-slate-200">
          <div className="flex items-center gap-3">
            {isCorrect ? (
              <>
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium text-green-700">Correct Answer!</span>
              </>
            ) : (
              <>
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <span className="font-medium text-red-700">
                  Incorrect. The correct answer is ({question.correctAnswer}).
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
