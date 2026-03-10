"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
// @ts-expect-error - Direct import for performance
import Moon from "lucide-react/dist/esm/icons/moon"
// @ts-expect-error - Direct import for performance
import Sun from "lucide-react/dist/esm/icons/sun"
// @ts-expect-error - Direct import for performance
import Monitor from "lucide-react/dist/esm/icons/monitor"

type Theme = "light" | "dark" | "system"

const CYCLE: Theme[] = ["light", "dark", "system"]
const LABELS: Record<Theme, string> = { light: "Light", dark: "Dark", system: "System" }

function nextTheme(current: string | undefined): Theme {
  const idx = CYCLE.indexOf(current as Theme)
  return CYCLE[(idx + 1) % CYCLE.length]
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const current = (theme ?? "system") as Theme
  const next = nextTheme(current)

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(next)}
            aria-label={`Switch to ${LABELS[next]} mode`}
            className="relative text-muted-foreground pointer-coarse:touch-hitbox"
          />
        }
      >
        {current === "light" ? (
          <Sun className="size-4" aria-hidden="true" />
        ) : current === "dark" ? (
          <Moon className="size-4" aria-hidden="true" />
        ) : (
          <Monitor className="size-4" aria-hidden="true" />
        )}
      </TooltipTrigger>
      <TooltipContent>
        Switch to {LABELS[next]}
      </TooltipContent>
    </Tooltip>
  )
}
