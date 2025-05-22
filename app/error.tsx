"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Opcjonalnie można tutaj zalogować błąd do serwisu monitorowania błędów
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center space-y-4 p-4">
        <AlertTriangle className="h-12 w-12 text-red-500" />
        <h2 className="text-2xl font-bold tracking-tight">Coś poszło nie tak!</h2>
        <p className="text-muted-foreground">
          Przepraszamy, wystąpił nieoczekiwany błąd. Nasz zespół został powiadomiony.
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
