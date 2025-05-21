import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import type { Topic } from "@/lib/types"

interface TopicCardProps {
  topic: Topic
}

export function TopicCard({ topic }: TopicCardProps) {
  const getTopicIcon = (topicId: string) => {
    switch (topicId) {
      case "data-types":
        return "📊"
      case "control-flow":
        return "🔄"
      case "arrays-strings":
        return "📝"
      case "oop":
        return "🧩"
      case "static-instance":
        return "🏛️"
      case "exceptions":
        return "⚠️"
      case "collections":
        return "📚"
      case "streams-lambdas":
        return "🌊"
      case "multithreading":
        return "🧵"
      case "inner-classes":
        return "🪆"
      default:
        return "📘"
    }
  }

  return (
    <Link href={`/practice?topic=${topic.id}`} className="block h-full">
      <Card className="h-full transition-all hover:shadow-md hover:border-blue-200 cursor-pointer">
        <CardContent className="p-6">
          <div className="text-4xl mb-4">{getTopicIcon(topic.id)}</div>
          <h3 className="text-xl font-semibold mb-2">{topic.name}</h3>
          <p className="text-slate-600 mb-4">{getTopicDescription(topic.id)}</p>
          <div className="flex items-center text-blue-600 font-medium">
            Practice Now <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function getTopicDescription(topicId: string): string {
  switch (topicId) {
    case "data-types":
      return "Master primitive types, variables, operators, and type conversions."
    case "control-flow":
      return "Understand loops, conditionals, and control statements in Java."
    case "arrays-strings":
      return "Learn array manipulation, String methods, and text processing."
    case "oop":
      return "Explore classes, inheritance, polymorphism, and encapsulation."
    case "static-instance":
      return "Understand the differences between static and instance members."
    case "exceptions":
      return "Master exception handling, try-catch blocks, and custom exceptions."
    case "collections":
      return "Work with Lists, Sets, Maps, and other collection classes."
    case "streams-lambdas":
      return "Learn functional programming with streams and lambda expressions."
    case "multithreading":
      return "Understand concurrent programming and thread synchronization."
    case "inner-classes":
      return "Explore inner classes, anonymous classes, and local classes."
    default:
      return "Practice Java programming concepts and improve your skills."
  }
}
