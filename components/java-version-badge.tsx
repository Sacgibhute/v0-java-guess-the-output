import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface JavaVersionBadgeProps {
  version: string
  className?: string
}

export function JavaVersionBadge({ version, className }: JavaVersionBadgeProps) {
  // Extract the major version number
  const majorVersion = version.includes("+") ? version.replace("+", "") : version.split(".")[0]

  // Determine badge color based on major version
  let badgeClass = ""
  const versionNum = Number.parseInt(majorVersion)

  if (versionNum <= 8) {
    badgeClass = "java-version-badge-8"
  } else if (versionNum <= 11) {
    badgeClass = "java-version-badge-11"
  } else if (versionNum <= 17) {
    badgeClass = "java-version-badge-17"
  } else {
    badgeClass = "java-version-badge-21"
  }

  return (
    <Badge variant="outline" className={cn("java-version-badge", badgeClass, className)}>
      Java {version}
    </Badge>
  )
}
