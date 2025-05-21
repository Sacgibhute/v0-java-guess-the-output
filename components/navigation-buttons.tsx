"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationButtonsProps {
  onPrevious: () => void
  onNext: () => void
  disablePrevious: boolean
  disableNext: boolean
  currentQuestion: number
  totalQuestions: number
}

export function NavigationButtons({
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
  currentQuestion,
  totalQuestions,
}: NavigationButtonsProps) {
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={onPrevious}
        disabled={disablePrevious}
        className="flex items-center gap-1"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      <span className="text-sm font-medium text-slate-600">
        Question {currentQuestion} of {totalQuestions}
      </span>

      <Button variant="outline" size="sm" onClick={onNext} disabled={disableNext} className="flex items-center gap-1">
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </>
  )
}
