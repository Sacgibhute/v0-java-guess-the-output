"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { allQuestions } from "@/lib/questions"
import { useState } from "react"

export function DifficultySection() {
  const difficultyLevels = ["Basic", "Intermediate", "Advanced", "Expert"]
  const searchParams = useSearchParams()
  const topic = searchParams.get("topic") || "all"

  // Get a sample question for each difficulty level
  const sampleQuestions = difficultyLevels.map((difficulty) => {
    // Filter questions by difficulty
    const filteredQuestions = allQuestions.filter((q) => q.difficulty === difficulty)

    // If topic is specified, filter by that too
    const topicFilteredQuestions =
      topic !== "all" ? filteredQuestions.filter((q) => q.topicId === topic) : filteredQuestions

    // Return a sample question or null if none available
    return topicFilteredQuestions.length > 0 ? topicFilteredQuestions[0] : null
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Basic":
        return "border-l-4 border-green-500 bg-green-50"
      case "Intermediate":
        return "border-l-4 border-blue-500 bg-blue-50"
      case "Advanced":
        return "border-l-4 border-purple-500 bg-purple-50"
      case "Expert":
        return "border-l-4 border-red-500 bg-red-50"
      default:
        return ""
    }
  }

  const getDifficultyTextColor = (difficulty: string) => {
    switch (difficulty) {
      case "Basic":
        return "text-green-700"
      case "Intermediate":
        return "text-blue-700"
      case "Advanced":
        return "text-purple-700"
      case "Expert":
        return "text-red-700"
      default:
        return ""
    }
  }

  const getDifficultyBadgeColor = (difficulty: string) => {
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

  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (difficulty: string) => {
    if (expandedSection === difficulty) {
      setExpandedSection(null)
    } else {
      setExpandedSection(difficulty)
    }
  }

  // Create URL with current topic if any
  const createDifficultyUrl = (difficulty: string) => {
    const params = new URLSearchParams()
    params.set("difficulty", difficulty)
    if (topic !== "all") {
      params.set("topic", topic)
    }
    return `/practice?${params.toString()}`
  }

  const questionsCountByDifficulty = difficultyLevels.map((difficulty) => {
    let filteredQuestions = allQuestions.filter((q) => q.difficulty === difficulty)

    // Apply topic filter if specified
    if (topic !== "all") {
      filteredQuestions = filteredQuestions.filter((q) => q.topicId === topic)
    }

    return {
      difficulty,
      count: filteredQuestions.length,
    }
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Practice by Difficulty Level</h1>
        <p className="text-center text-slate-600 mb-6 max-w-3xl mx-auto">
          Choose a difficulty level to start practicing questions tailored to your skill level. Each level offers
          progressively more challenging Java "Guess the Output" questions.
          {topic !== "all" && ` Currently showing questions for the ${topic.replace(/-/g, " ")} topic.`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {questionsCountByDifficulty.map(({ difficulty, count }) => (
            <Link href={createDifficultyUrl(difficulty)} key={difficulty}>
              <Card className={`h-full hover:shadow-md transition-shadow ${getDifficultyColor(difficulty)}`}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getDifficultyBadgeColor(difficulty)}>{difficulty}</Badge>
                    <span className="text-sm text-slate-500">{count} questions</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${getDifficultyTextColor(difficulty)}`}>
                    {getDifficultyDescription(difficulty)}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{getDifficultyDetailedDescription(difficulty)}</p>
                  <Button variant="outline" className="w-full">
                    Practice {difficulty} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {difficultyLevels.map((difficulty, index) => {
        const sampleQuestion = sampleQuestions[index]
        const isExpanded = expandedSection === difficulty

        if (!sampleQuestion) return null

        return (
          <div key={difficulty} className="mb-10">
            <Card className={`${getDifficultyColor(difficulty)}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className={getDifficultyBadgeColor(difficulty)}>{difficulty}</Badge>
                    <CardTitle className="mt-2 text-2xl">{difficulty} Level Questions</CardTitle>
                  </div>
                  <Button
                    onClick={() => toggleSection(difficulty)}
                    variant="outline"
                    className={getDifficultyTextColor(difficulty)}
                  >
                    {isExpanded ? "Hide Sample" : "Show Sample Question"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{getDifficultyDetailedDescription(difficulty)}</p>
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Skills you'll practice:</h4>
                  <ul className="list-disc ml-5 text-slate-600 space-y-1">
                    {getDifficultySkills(difficulty).map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>

                {isExpanded && sampleQuestion && (
                  <div className="mt-6 border-t pt-6">
                    <h4 className="font-medium mb-4">Sample Question:</h4>
                    <div className="bg-white rounded-lg p-4 border">
                      <div>
                        <h5 className="font-medium">{sampleQuestion.text}</h5>
                        <div className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto my-4">
                          <pre className="text-sm">
                            <code>{sampleQuestion.code}</code>
                          </pre>
                        </div>
                        <div className="space-y-2 mb-4">
                          {sampleQuestion.options.map((option) => (
                            <div key={option.id} className="p-3 border rounded-md">
                              <span className="font-medium mr-2">{option.id})</span>
                              <span>{option.text}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h6 className="font-semibold text-blue-800 mb-2">Answer: {sampleQuestion.correctAnswer}</h6>
                          <p>{sampleQuestion.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex justify-end">
                  <Link href={createDifficultyUrl(difficulty)}>
                    <Button>
                      Practice All {difficulty} Questions <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

function getDifficultyDescription(difficulty: string): string {
  switch (difficulty) {
    case "Basic":
      return "Java Fundamentals"
    case "Intermediate":
      return "Core Concepts"
    case "Advanced":
      return "Complex Scenarios"
    case "Expert":
      return "Edge Cases & Nuances"
    default:
      return ""
  }
}

function getDifficultyDetailedDescription(difficulty: string): string {
  switch (difficulty) {
    case "Basic":
      return "Perfect for beginners. These questions cover fundamental Java concepts, basic syntax, and common programming patterns."
    case "Intermediate":
      return "For those with a solid grasp of Java basics. These questions involve more complex scenarios and combinations of core concepts."
    case "Advanced":
      return "Challenging questions for experienced Java developers. Covers advanced features, edge cases, and nuanced behavior."
    case "Expert":
      return "The most difficult questions that test deep Java knowledge. These questions involve obscure language features and complex interactions."
    default:
      return ""
  }
}

function getDifficultySkills(difficulty: string): string[] {
  switch (difficulty) {
    case "Basic":
      return [
        "Primitive types and basic operators",
        "Simple conditionals and loops",
        "Basic String and array operations",
        "Fundamental object-oriented concepts",
      ]
    case "Intermediate":
      return [
        "Type conversion and autoboxing",
        "Exception handling",
        "Collections framework basics",
        "Inheritance and polymorphism",
      ]
    case "Advanced":
      return [
        "Advanced stream operations",
        "Multithreading concepts",
        "Complex inheritance scenarios",
        "Java 8+ features like lambdas and method references",
      ]
    case "Expert":
      return [
        "Obscure Java behavior and edge cases",
        "Latest Java features (Java 12+)",
        "Advanced concurrency patterns",
        "Memory model and optimization",
      ]
    default:
      return []
  }
}
