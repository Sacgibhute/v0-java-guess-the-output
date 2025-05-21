"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const javaVersions = [
  { id: "all", label: "All Versions" },
  { id: "8", label: "Java 8" },
  { id: "9", label: "Java 9" },
  { id: "10", label: "Java 10" },
  { id: "11", label: "Java 11" },
  { id: "12", label: "Java 12" },
  { id: "13", label: "Java 13" },
  { id: "14", label: "Java 14" },
  { id: "15", label: "Java 15" },
  { id: "16", label: "Java 16" },
  { id: "17", label: "Java 17" },
  { id: "18", label: "Java 18" },
  { id: "19", label: "Java 19" },
  { id: "20", label: "Java 20" },
  { id: "21", label: "Java 21" },
]

export function JavaVersionDropdown() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentVersion = searchParams.get("javaVersion") || "all"

  const currentLabel = javaVersions.find((v) => v.id === currentVersion)?.label || "All Versions"

  const handleVersionChange = (versionId: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (versionId === "all") {
      params.delete("javaVersion")
    } else {
      params.set("javaVersion", versionId)
    }

    // Get the current path to maintain the correct route
    const currentPath = window.location.pathname || "/practice"
    router.push(`${currentPath}?${params.toString()}`, { scroll: false })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="min-w-[160px]" onClick={(e) => e.preventDefault()}>
          <span className="mr-2">Version:</span> {currentLabel}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[160px] max-h-[300px] overflow-y-auto">
        {javaVersions.map((version) => (
          <DropdownMenuItem
            key={version.id}
            className={version.id === currentVersion ? "bg-accent font-medium" : ""}
            onClick={() => handleVersionChange(version.id)}
          >
            {version.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
