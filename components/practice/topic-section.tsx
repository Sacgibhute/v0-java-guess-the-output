"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { topics } from "@/lib/topics"
import { allQuestions } from "@/lib/questions"
import { useState } from "react"

export function TopicSection() {
  const searchParams = useSearchParams()
  const difficulty = searchParams.get("difficulty") || "all"
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null)

  const toggleTopic = (topicId: string) => {
    if (expandedTopic === topicId) {
      setExpandedTopic(null)
    } else {
      setExpandedTopic(topicId)
    }
  }

  // Get question counts for each topic
  const topicsWithCounts = topics.map((topic) => {
    let filteredQuestions = allQuestions.filter((q) => q.topicId === topic.id)

    // Apply difficulty filter if specified
    if (difficulty !== "all") {
      filteredQuestions = filteredQuestions.filter((q) => q.difficulty === difficulty)
    }

    return {
      ...topic,
      count: filteredQuestions.length,
      // Get a sample question for this topic
      sampleQuestion: filteredQuestions.length > 0 ? filteredQuestions[0] : null,
    }
  })

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

  // Create URL with current difficulty if any
  const createTopicUrl = (topicId: string) => {
    const params = new URLSearchParams()
    params.set("topic", topicId)
    if (difficulty !== "all") {
      params.set("difficulty", difficulty)
    }
    return `/practice?${params.toString()}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Practice by Topic</h1>
        <p className="text-center text-slate-600 mb-6 max-w-3xl mx-auto">
          Choose a Java topic to focus your practice on specific concepts. Each topic contains questions that test your
          understanding of key Java principles.
          {difficulty !== "all" && ` Currently showing ${difficulty} level questions.`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {topicsWithCounts.map((topic) => (
            <Link href={createTopicUrl(topic.id)} key={topic.id} className="block h-full">
              <Card className="h-full hover:shadow-md transition-shadow border-l-4 border-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{getTopicIcon(topic.id)}</div>
                    <Badge variant="outline">{topic.count} questions</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-700">{topic.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{getTopicDescription(topic.id)}</p>
                  <Button variant="outline" className="w-full">
                    Practice {topic.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {topicsWithCounts.map((topic) => {
        const isExpanded = expandedTopic === topic.id
        const sampleQuestion = topic.sampleQuestion

        if (!sampleQuestion) return null

        return (
          <div key={topic.id} className="mb-10">
            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{getTopicIcon(topic.id)}</div>
                    <div>
                      <Badge variant="outline">{topic.count} questions</Badge>
                      <CardTitle className="mt-2 text-2xl">{topic.name}</CardTitle>
                    </div>
                  </div>
                  <Button onClick={() => toggleTopic(topic.id)} variant="outline" className="text-blue-700">
                    {isExpanded ? "Hide Sample" : "Show Sample Question"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{getTopicDescription(topic.id)}</p>
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Concepts covered:</h4>
                  <ul className="list-disc ml-5 text-slate-600 space-y-1">
                    {getTopicConcepts(topic.id).map((concept, i) => (
                      <li key={i}>{concept}</li>
                    ))}
                  </ul>
                </div>

                {isExpanded && sampleQuestion && (
                  <div className="mt-6 border-t pt-6">
                    <h4 className="font-medium mb-4">Sample Question:</h4>
                    <div className="bg-white rounded-lg p-4 border">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            className={
                              sampleQuestion.difficulty === "Basic"
                                ? "bg-green-100 text-green-800"
                                : sampleQuestion.difficulty === "Intermediate"
                                  ? "bg-blue-100 text-blue-800"
                                  : sampleQuestion.difficulty === "Advanced"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-red-100 text-red-800"
                            }
                          >
                            {sampleQuestion.difficulty}
                          </Badge>
                          {sampleQuestion.javaVersion && (
                            <Badge variant="outline">Java {sampleQuestion.javaVersion}</Badge>
                          )}
                        </div>
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
                  <Link href={createTopicUrl(topic.id)}>
                    <Button>
                      Practice All {topic.name} Questions <ArrowRight className="ml-2 h-4 w-4" />
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

function getTopicDescription(topicId: string): string {
  switch (topicId) {
    case "data-types":
      return "Master primitive types, variables, operators, and type conversions in Java. Understand how different data types behave in various operations."
    case "control-flow":
      return "Explore Java's control flow mechanisms including conditionals, loops, and branching statements. Learn how program execution flows through different code paths."
    case "arrays-strings":
      return "Work with arrays and strings in Java, including manipulation, searching, and transformation operations. Understand how Java handles text and collections of similar data."
    case "oop":
      return "Dive into Object-Oriented Programming concepts in Java. Learn about classes, objects, inheritance, polymorphism, and encapsulation."
    case "static-instance":
      return "Understand the differences between static and instance members in Java. Learn when to use each and how they affect program behavior."
    case "exceptions":
      return "Master Java's exception handling mechanisms. Learn how to catch, throw, and create custom exceptions to handle error conditions gracefully."
    case "collections":
      return "Explore Java's Collections Framework including Lists, Sets, Maps, and Queues. Learn how to store, retrieve, and manipulate collections of objects."
    case "streams-lambdas":
      return "Learn functional programming in Java with streams and lambda expressions. Understand how to process data declaratively and write more concise code."
    case "multithreading":
      return "Dive into Java's concurrency model. Learn how to create and manage threads, synchronize access to shared resources, and build thread-safe applications."
    case "inner-classes":
      return "Explore Java's inner classes, anonymous classes, and local classes. Understand how these specialized class types can be used to solve specific problems."
    default:
      return "Practice Java programming concepts and improve your skills."
  }
}

function getTopicConcepts(topicId: string): string[] {
  switch (topicId) {
    case "data-types":
      return [
        "Primitive types (int, double, boolean, etc.)",
        "Type conversion and casting",
        "Operators and operator precedence",
        "Autoboxing and unboxing",
        "Variable scope and lifetime",
      ]
    case "control-flow":
      return [
        "If-else statements and ternary operators",
        "Switch statements and expressions",
        "For, while, and do-while loops",
        "Break and continue statements",
        "Labeled statements",
      ]
    case "arrays-strings":
      return [
        "Array creation and initialization",
        "Multi-dimensional arrays",
        "String methods and operations",
        "StringBuilder and StringBuffer",
        "Regular expressions",
      ]
    case "oop":
      return [
        "Class definition and instantiation",
        "Inheritance and method overriding",
        "Polymorphism and dynamic binding",
        "Abstract classes and interfaces",
        "Encapsulation and access modifiers",
      ]
    case "static-instance":
      return [
        "Static variables and methods",
        "Instance variables and methods",
        "Static initialization blocks",
        "Instance initialization blocks",
        "Static vs instance context",
      ]
    case "exceptions":
      return [
        "Try-catch-finally blocks",
        "Checked vs unchecked exceptions",
        "Exception propagation",
        "Custom exception classes",
        "Try-with-resources statement",
      ]
    case "collections":
      return [
        "List implementations (ArrayList, LinkedList)",
        "Set implementations (HashSet, TreeSet)",
        "Map implementations (HashMap, TreeMap)",
        "Queue and Deque implementations",
        "Collection algorithms and utilities",
      ]
    case "streams-lambdas":
      return [
        "Lambda expressions and functional interfaces",
        "Stream creation and operations",
        "Map, filter, and reduce operations",
        "Collectors and terminal operations",
        "Method references",
      ]
    case "multithreading":
      return [
        "Thread creation and lifecycle",
        "Synchronization and locks",
        "Volatile and atomic variables",
        "Executor framework",
        "Concurrent collections",
      ]
    case "inner-classes":
      return [
        "Member inner classes",
        "Static nested classes",
        "Local inner classes",
        "Anonymous inner classes",
        "Lambda expressions as anonymous classes",
      ]
    default:
      return []
  }
}
