import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, BookOpen, Trophy, Brain, Zap, CheckCircle } from "lucide-react"
import { SampleQuestion } from "@/components/sample-question"
import { TopicCard } from "@/components/topic-card"
import { topics } from "@/lib/topics"
import { DifficultyCard } from "@/components/difficulty-card"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Java Quiz App</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Master Java with <span className="text-blue-400">"Guess the Output"</span> Questions
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Test and improve your Java knowledge with 1000+ carefully crafted questions spanning from basic concepts to
            expert-level challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/practice">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg h-12 px-8">
                Start Practicing <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 h-20 bottom-0 top-auto"></div>
            <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
              <div className="flex items-center px-4 py-2 bg-slate-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-slate-300">Java Output Challenge</div>
              </div>
              <div className="p-6">
                <pre className="text-blue-400 font-mono text-sm md:text-base overflow-x-auto">
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
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Practice with Our Java Quiz?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 text-blue-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">1000+ Questions</h3>
              <p className="text-slate-600">
                Comprehensive collection of Java questions covering all important concepts and edge cases.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 text-green-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">10 Topic Areas</h3>
              <p className="text-slate-600">
                Focused practice in specific areas from data types to multithreading and Java 8+ features.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="bg-purple-100 text-purple-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">4 Difficulty Levels</h3>
              <p className="text-slate-600">
                Progressive learning path from basic concepts to expert-level Java challenges.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg text-center">
              <div className="bg-amber-100 text-amber-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Explanations</h3>
              <p className="text-slate-600">Learn from mistakes with comprehensive explanations for every question.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Question */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Try a Sample Question</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Get a taste of our "Guess the Output" questions. Select what you think the code will output and check your
            answer.
          </p>
          <div className="max-w-3xl mx-auto">
            <SampleQuestion />
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Explore Java Topics</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Our questions cover all major Java topics from basic syntax to advanced features introduced in the latest
            Java versions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.slice(0, 6).map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/practice">
              <Button variant="outline" size="lg">
                View All Topics <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Difficulty Levels */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Progressive Learning Path</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Start with basic questions and work your way up to expert-level challenges as you improve your Java skills.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <DifficultyCard
              level="Basic"
              description="Fundamental Java concepts and syntax for beginners"
              color="green"
              percentage={40}
            />
            <DifficultyCard
              level="Intermediate"
              description="More complex scenarios and common Java patterns"
              color="blue"
              percentage={30}
            />
            <DifficultyCard
              level="Advanced"
              description="Challenging questions on advanced Java features"
              color="purple"
              percentage={20}
            />
            <DifficultyCard
              level="Expert"
              description="Complex edge cases and Java version-specific features"
              color="red"
              percentage={10}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Practicing "Guess the Output" Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <CheckCircle className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Deepen Your Understanding</h3>
                <p className="text-blue-100">
                  Understand how Java actually works under the hood by predicting program output.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <CheckCircle className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prepare for Interviews</h3>
                <p className="text-blue-100">
                  "Guess the Output" questions are common in technical interviews for Java positions.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <CheckCircle className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Identify Knowledge Gaps</h3>
                <p className="text-blue-100">
                  Discover areas where your Java knowledge needs improvement and focus your learning.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <CheckCircle className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Master Java Versions</h3>
                <p className="text-blue-100">
                  Learn about features specific to different Java versions from Java 8 to the latest releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Developers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-sm text-slate-500">Java Developer</p>
                </div>
              </div>
              <p className="text-slate-600">
                "This quiz app helped me prepare for my Java certification. The detailed explanations for each question
                were incredibly valuable for understanding the nuances of Java."
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Michael Chen</h3>
                  <p className="text-sm text-slate-500">Software Engineer</p>
                </div>
              </div>
              <p className="text-slate-600">
                "I use this app to keep my Java skills sharp. The variety of questions across different topics and
                difficulty levels ensures I'm always learning something new."
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Aisha Patel</h3>
                  <p className="text-sm text-slate-500">CS Student</p>
                </div>
              </div>
              <p className="text-slate-600">
                "As a computer science student, this app has been invaluable for my Java courses. The progressive
                difficulty levels helped me build confidence in my programming skills."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Test Your Java Knowledge?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Start practicing with our 1000+ Java "Guess the Output" questions and take your Java skills to the next
            level.
          </p>
          <Link href="/practice">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg h-12 px-8">
              Start Practicing Now <Zap className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white text-lg font-semibold mb-2">Java Quiz App</h3>
          <p className="text-sm mb-4 max-w-md mx-auto">
            A comprehensive platform for Java developers to test and improve their knowledge through "Guess the Output"
            questions.
          </p>
          <div className="border-t border-slate-700 mt-4 pt-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Java Quiz App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
