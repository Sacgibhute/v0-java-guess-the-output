"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp, Check, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Question as QuestionType } from "@/lib/types"
import { JavaVersionBadge } from "@/components/java-version-badge"

interface QuestionProps {
  question: QuestionType
  isActive?: boolean
  id?: string
}

export function Question({ question, isActive = false, id }: QuestionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  const handleCheckAnswer = () => {
    setShowAnswer(true)
  }

  const isCorrect = selectedOption === question.correctAnswer

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
    <Card className={cn("border-slate-200 transition-all", isActive ? "ring-2 ring-blue-500 shadow-lg" : "")} id={id}>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-sm font-medium px-2 py-1 bg-slate-100 rounded text-slate-700">
                Question {question.id}
              </span>
              <Badge className={getDifficultyColor(question.difficulty)}>{question.difficulty}</Badge>
              {question.javaVersion && <JavaVersionBadge version={question.javaVersion} className="text-sm" />}
            </div>
            <p className="text-slate-700 mb-4">{question.text}</p>
          </div>
          <Button variant="ghost" size="sm" className="ml-2" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </Button>
        </div>

        {isExpanded && (
          <div className="mt-4 mb-6">
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-md overflow-x-auto text-sm">
              <code>{question.code}</code>
            </pre>
          </div>
        )}

        <div className="mt-4 space-y-3">
          {question.options.map((option) => (
            <button
              key={option.id}
              className={cn(
                "w-full text-left p-3 rounded-md border transition-colors",
                selectedOption === option.id && !showAnswer
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-200 hover:border-slate-300",
                showAnswer && option.id === question.correctAnswer
                  ? "border-green-500 bg-green-50"
                  : showAnswer && selectedOption === option.id && selectedOption !== question.correctAnswer
                    ? "border-red-500 bg-red-50"
                    : "",
              )}
              onClick={() => handleOptionSelect(option.id)}
              disabled={showAnswer}
            >
              <div className="flex items-center">
                <span className="font-medium mr-2">{option.id})</span>
                <span>{option.text}</span>
                {showAnswer && option.id === question.correctAnswer && (
                  <Check className="ml-auto text-green-500" size={18} />
                )}
                {showAnswer && selectedOption === option.id && selectedOption !== question.correctAnswer && (
                  <X className="ml-auto text-red-500" size={18} />
                )}
              </div>
            </button>
          ))}
        </div>

        {selectedOption && !showAnswer && (
          <div className="mt-4">
            <Button onClick={handleCheckAnswer}>Check Answer</Button>
          </div>
        )}

        {showAnswer && (
          <div className="mt-6 p-4 bg-slate-50 rounded-md border border-slate-200">
            <h4 className="font-medium mb-2">Explanation:</h4>
            <p className="text-slate-700">{question.explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
