"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Difficulty } from "@/lib/types"

const difficulties: { id: Difficulty; label: string }[] = [
  { id: "Basic", label: "Basic" },
  { id: "Intermediate", label: "Intermediate" },
  { id: "Advanced", label: "Advanced" },
  { id: "Expert", label: "Expert" },
]

export function DifficultyFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentDifficulty = searchParams.get("difficulty") || "all"

  const handleDifficultyChange = (difficultyId: string) => {
    // Create a new URLSearchParams object from the current search params
    const params = new URLSearchParams(searchParams.toString())

    // Update the difficulty parameter
    if (difficultyId === "all") {
      params.delete("difficulty")
    } else {
      params.set("difficulty", difficultyId)
    }

    // Navigate with the updated params and prevent scrolling to top
    router.push(`/?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="space-y-2">
      <Button
        variant={currentDifficulty === "all" ? "default" : "ghost"}
        className={cn("w-full justify-start", currentDifficulty === "all" ? "" : "text-slate-700")}
        onClick={() => handleDifficultyChange("all")}
      >
        All Levels
      </Button>

      {difficulties.map((difficulty) => (
        <Button
          key={difficulty.id}
          variant={currentDifficulty === difficulty.id ? "default" : "ghost"}
          className={cn(
            "w-full justify-start",
            currentDifficulty === difficulty.id ? "" : "text-slate-700",
            difficulty.id === "Basic" ? "border-l-4 border-green-500" : "",
            difficulty.id === "Intermediate" ? "border-l-4 border-blue-500" : "",
            difficulty.id === "Advanced" ? "border-l-4 border-purple-500" : "",
            difficulty.id === "Expert" ? "border-l-4 border-red-500" : "",
          )}
          onClick={() => handleDifficultyChange(difficulty.id)}
        >
          {difficulty.label}
        </Button>
      ))}
    </div>
  )
}
