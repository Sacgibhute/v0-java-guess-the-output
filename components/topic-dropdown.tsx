"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import type { Topic } from "@/lib/types"

interface TopicDropdownProps {
  topics: Topic[]
}

export function TopicDropdown({ topics }: TopicDropdownProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentTopic = searchParams.get("topic") || "all"

  const currentLabel =
    currentTopic === "all" ? "All Topics" : topics.find((t) => t.id === currentTopic)?.name || "All Topics"

  const handleTopicChange = (topicId: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (topicId === "all") {
      params.delete("topic")
    } else {
      params.set("topic", topicId)
    }

    // Get the current path to maintain the correct route
    const currentPath = window.location.pathname || "/practice"
    router.push(`${currentPath}?${params.toString()}`, { scroll: false })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="min-w-[220px]" onClick={(e) => e.preventDefault()}>
          <span className="mr-2">Topic:</span> {currentLabel}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[220px] max-h-[300px] overflow-y-auto">
        <DropdownMenuItem
          className={currentTopic === "all" ? "bg-slate-100 font-medium" : ""}
          onClick={() => handleTopicChange("all")}
        >
          All Topics
        </DropdownMenuItem>

        {topics.map((topic) => (
          <DropdownMenuItem
            key={topic.id}
            className={topic.id === currentTopic ? "bg-slate-100 font-medium" : ""}
            onClick={() => handleTopicChange(topic.id)}
          >
            {topic.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
