import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface DifficultyCardProps {
  level: string
  description: string
  color: string
  percentage: number
}

export function DifficultyCard({ level, description, color, percentage }: DifficultyCardProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return {
          bg: "bg-green-100",
          text: "text-green-800",
          border: "border-green-200",
          progress: "bg-green-500",
          hover: "hover:bg-green-50",
        }
      case "blue":
        return {
          bg: "bg-blue-100",
          text: "text-blue-800",
          border: "border-blue-200",
          progress: "bg-blue-500",
          hover: "hover:bg-blue-50",
        }
      case "purple":
        return {
          bg: "bg-purple-100",
          text: "text-purple-800",
          border: "border-purple-200",
          progress: "bg-purple-500",
          hover: "hover:bg-purple-50",
        }
      case "red":
        return {
          bg: "bg-red-100",
          text: "text-red-800",
          border: "border-red-200",
          progress: "bg-red-500",
          hover: "hover:bg-red-50",
        }
      default:
        return {
          bg: "bg-slate-100",
          text: "text-slate-800",
          border: "border-slate-200",
          progress: "bg-slate-500",
          hover: "hover:bg-slate-50",
        }
    }
  }

  const colors = getColorClasses(color)

  return (
    <Link href={`/practice?difficulty=${level}`} className="block">
      <Card className={`border ${colors.border} transition-all ${colors.hover} h-full`}>
        <CardContent className="p-6">
          <div className={`inline-block px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-medium mb-4`}>
            {level}
          </div>
          <p className="text-slate-600 mb-4">{description}</p>
          <div className="mt-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Question Distribution</span>
              <span className={`font-medium ${colors.text}`}>{percentage}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className={`${colors.progress} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
          <div className={`flex items-center ${colors.text} font-medium mt-4`}>
            Practice {level} Questions <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
