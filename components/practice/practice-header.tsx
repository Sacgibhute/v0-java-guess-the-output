"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TopicDropdown } from "@/components/topic-dropdown"
import { DifficultyDropdown } from "@/components/difficulty-dropdown"
import { topics } from "@/lib/topics"
import { Home, X } from "lucide-react"
import { JavaVersionDropdown } from "@/components/practice/java-version-dropdown"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { SettingsDialog } from "@/components/settings-dialog"
import { SignInDialog } from "@/components/sign-in-dialog"

export function PracticeHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="mr-2">
            <Button variant="ghost" size="icon" aria-label="Home">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <div className="hidden md:flex md:items-center md:gap-2">
            <TopicDropdown topics={topics} />
            <DifficultyDropdown />
            <JavaVersionDropdown />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Topic</h3>
                    <TopicDropdown topics={topics} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Difficulty</h3>
                    <DifficultyDropdown />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Java Version</h3>
                    <JavaVersionDropdown />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <SettingsDialog />
          <div className="hidden md:inline-flex">
            <SignInDialog />
          </div>
        </div>
      </div>
    </header>
  )
}
