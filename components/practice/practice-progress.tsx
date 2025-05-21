export function PracticeProgress({
  currentQuestion,
  totalQuestions,
  answeredCount,
}: {
  currentQuestion: number
  totalQuestions: number
  answeredCount: number
}) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100
  const completionPercentage = (answeredCount / totalQuestions) * 100

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-medium text-slate-700">
          Question {currentQuestion} of {totalQuestions}
        </div>
        <div className="text-sm text-slate-500">
          {answeredCount} of {totalQuestions} answered ({Math.round(completionPercentage)}% complete)
        </div>
      </div>
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${progressPercentage}%`, transition: "width 0.3s ease" }}
        ></div>
      </div>
    </div>
  )
}
