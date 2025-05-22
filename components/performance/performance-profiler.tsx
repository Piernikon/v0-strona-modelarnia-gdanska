"use client"

import type React from "react"
import { Profiler, type ProfilerOnRenderCallback, useState } from "react"

interface PerformanceProfilerProps {
  id: string
  children: React.ReactNode
  onRenderData?: (renderData: RenderData) => void
}

export interface RenderData {
  id: string
  phase: "mount" | "update"
  actualDuration: number
  baseDuration: number
  startTime: number
  commitTime: number
  interactions: Set<any>
}

export function PerformanceProfiler({ id, children, onRenderData }: PerformanceProfilerProps) {
  const [renderCount, setRenderCount] = useState(0)
  const [lastRender, setLastRender] = useState<RenderData | null>(null)

  const handleRender: ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  ) => {
    const renderData: RenderData = {
      id,
      phase: phase as "mount" | "update",
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    }

    setRenderCount((prev) => prev + 1)
    setLastRender(renderData)

    if (onRenderData) {
      onRenderData(renderData)
    }
  }

  // Tylko w trybie deweloperskim pokazujemy panel z metrykami
  const showMetrics = process.env.NODE_ENV === "development"

  return (
    <>
      <Profiler id={id} onRender={handleRender}>
        {children}
      </Profiler>

      {showMetrics && lastRender && (
        <div className="fixed bottom-0 right-0 bg-black/80 text-white p-2 text-xs z-50 rounded-tl-md">
          <div className="font-bold">{id} Performance</div>
          <div>Renders: {renderCount}</div>
          <div>Last render: {lastRender.actualDuration.toFixed(2)}ms</div>
          <div>Base time: {lastRender.baseDuration.toFixed(2)}ms</div>
          <div>Phase: {lastRender.phase}</div>
        </div>
      )}
    </>
  )
}
