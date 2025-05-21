"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import type { Difficulty } from "@/lib/types"

const difficulties: { id: Difficulty | "all"; label: string }[] = [
  { id: "all", label: "All Levels" },
  { id: "Basic", label: "Basic" },
  { id: "Intermediate", label: "Intermediate" },
  { id: "Advanced", label: "Advanced" },
  { id: "Expert", label: "Expert" },
]

export function DifficultyDropdown() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentDifficulty = searchParams.get("difficulty") || "all"

  const currentLabel = difficulties.find((d) => d.id === currentDifficulty)?.label || "All Levels"

  const handleDifficultyChange = (difficultyId: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (difficultyId === "all") {
      params.delete("difficulty")
    } else {
      params.set("difficulty", difficultyId)
    }

    // Get the current path to maintain the correct route
    const currentPath = window.location.pathname || "/practice"
    router.push(`${currentPath}?${params.toString()}`, { scroll: false })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="min-w-[180px]" onClick={(e) => e.preventDefault()}>
          <span className="mr-2">Difficulty:</span> {currentLabel}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[180px]">
        {difficulties.map((difficulty) => (
          <DropdownMenuItem
            key={difficulty.id}
            className={difficulty.id === currentDifficulty ? "bg-slate-100 font-medium" : ""}
            onClick={() => handleDifficultyChange(difficulty.id)}
          >
            <div className="flex items-center w-full">
              {difficulty.id === "Basic" && <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>}
              {difficulty.id === "Intermediate" && <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>}
              {difficulty.id === "Advanced" && <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>}
              {difficulty.id === "Expert" && <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>}
              {difficulty.label}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
