"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function ProjectsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto flex min-h-[400px] flex-col items-center justify-center text-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center space-y-4 p-4">
        <AlertTriangle className="h-12 w-12 text-amber-500" />
        <h2 className="text-2xl font-bold tracking-tight">Błąd ładowania projektów</h2>
        <p className="text-muted-foreground">
          Przepraszamy, wystąpił problem podczas ładowania projektów. Spróbuj ponownie za chwilę.
        </p>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Button onClick={() => reset()}>Spróbuj ponownie</Button>
          <Button variant="outline" onClick={() => (window.location.href = "/")}>
            Wróć do strony głównej
          </Button>
        </div>
      </div>
    </div>
  )
}
