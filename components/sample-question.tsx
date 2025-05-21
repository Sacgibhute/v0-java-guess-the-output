"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"

export function SampleQuestion() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleOptionSelect = (optionId: string) => {
    if (!showAnswer) {
      setSelectedOption(optionId)
    }
  }

  const handleCheckAnswer = () => {
    setShowAnswer(true)
  }

  const correctAnswer = "b"

  return (
    <Card className="border-slate-200 shadow-lg">
      <CardContent className="pt-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">What will be the output of the following code?</h3>
          <div className="bg-slate-900 text-slate-50 p-4 rounded-md overflow-x-auto text-sm mb-4">
            <pre>
              <code>{`public class Main {
  public static void main(String[] args) {
    String s1 = "Java";
    String s2 = new String("Java");
    
    System.out.println(s1 == s2);
    System.out.println(s1.equals(s2));
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { id: "a", text: "true true" },
            { id: "b", text: "false true" },
            { id: "c", text: "true false" },
            { id: "d", text: "false false" },
          ].map((option) => (
            <button
              key={option.id}
              className={cn(
                "w-full text-left p-3 rounded-md border transition-colors",
                selectedOption === option.id && !showAnswer
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-200 hover:border-slate-300",
                showAnswer && option.id === correctAnswer
                  ? "border-green-500 bg-green-50"
                  : showAnswer && selectedOption === option.id && selectedOption !== correctAnswer
                    ? "border-red-500 bg-red-50"
                    : "",
              )}
              onClick={() => handleOptionSelect(option.id)}
              disabled={showAnswer}
            >
              <div className="flex items-center">
                <span className="font-medium mr-2">{option.id})</span>
                <span>{option.text}</span>
                {showAnswer && option.id === correctAnswer && <Check className="ml-auto text-green-500" size={18} />}
                {showAnswer && selectedOption === option.id && selectedOption !== correctAnswer && (
                  <X className="ml-auto text-red-500" size={18} />
                )}
              </div>
            </button>
          ))}
        </div>

        {selectedOption && !showAnswer && (
          <div className="mt-4">
            <Button onClick={handleCheckAnswer}>Check Answer</Button>
          </div>
        )}

        {showAnswer && (
          <div className="mt-6 p-4 bg-slate-50 rounded-md border border-slate-200">
            <h4 className="font-medium mb-2">Explanation:</h4>
            <p className="text-slate-700">
              The == operator compares object references, not the content. s1 refers to a string literal in the string
              pool, while s2 refers to a new String object on the heap. Therefore, s1 == s2 is false. The equals()
              method compares the content of the strings, which is "Java" in both cases, so s1.equals(s2) is true.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
