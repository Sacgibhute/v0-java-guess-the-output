"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Settings } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTheme } from "@/components/theme-provider"

export function SettingsDialog() {
  const { theme, setTheme } = useTheme()
  const [showExplanations, setShowExplanations] = useState(true)
  const [autoNextQuestion, setAutoNextQuestion] = useState(false)
  const [codeHighlighting, setCodeHighlighting] = useState(true)
  const [questionsPerPage, setQuestionsPerPage] = useState("10")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Customize your Java Quiz experience. These settings will be saved for your next visit.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="theme" className="col-span-2">
              Theme
            </Label>
            <div className="col-span-2">
              <RadioGroup
                value={theme}
                onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="theme-light" />
                  <Label htmlFor="theme-light">Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="theme-dark" />
                  <Label htmlFor="theme-dark">Dark</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="theme-system" />
                  <Label htmlFor="theme-system">System</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="explanations" className="col-span-3">
              Show explanations after answering
            </Label>
            <Switch id="explanations" checked={showExplanations} onCheckedChange={setShowExplanations} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="auto-next" className="col-span-3">
              Auto-advance to next question
            </Label>
            <Switch id="auto-next" checked={autoNextQuestion} onCheckedChange={setAutoNextQuestion} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="highlighting" className="col-span-3">
              Syntax highlighting for code
            </Label>
            <Switch id="highlighting" checked={codeHighlighting} onCheckedChange={setCodeHighlighting} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="per-page" className="col-span-2">
              Questions per page
            </Label>
            <div className="col-span-2">
              <RadioGroup
                value={questionsPerPage}
                onValueChange={setQuestionsPerPage}
                className="flex flex-row space-x-2"
              >
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="5" id="per-page-5" />
                  <Label htmlFor="per-page-5">5</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="10" id="per-page-10" />
                  <Label htmlFor="per-page-10">10</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="20" id="per-page-20" />
                  <Label htmlFor="per-page-20">20</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
