"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Topic } from "@/lib/types"

interface TopicSelectorProps {
  topics: Topic[]
}

export function TopicSelector({ topics }: TopicSelectorProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentTopic = searchParams.get("topic") || "all"

  const handleTopicChange = (topicId: string) => {
    // Create a new URLSearchParams object from the current search params
    const params = new URLSearchParams(searchParams.toString())

    // Update the topic parameter
    if (topicId === "all") {
      params.delete("topic")
    } else {
      params.set("topic", topicId)
    }

    // Navigate with the updated params
    router.push(`/?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="space-y-2">
      <Button
        variant={currentTopic === "all" ? "default" : "ghost"}
        className={cn("w-full justify-start", currentTopic === "all" ? "" : "text-slate-700")}
        onClick={() => handleTopicChange("all")}
      >
        All Topics
      </Button>

      {topics.map((topic) => (
        <Button
          key={topic.id}
          variant={currentTopic === topic.id ? "default" : "ghost"}
          className={cn("w-full justify-start", currentTopic === topic.id ? "" : "text-slate-700")}
          onClick={() => handleTopicChange(topic.id)}
        >
          {topic.name}
        </Button>
      ))}
    </div>
  )
}
