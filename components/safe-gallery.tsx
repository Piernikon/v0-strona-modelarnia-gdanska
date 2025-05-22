"use client"

import { ErrorBoundary } from "@/components/error-boundary"
import Gallery from "@/components/gallery"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Komponent fallback dla galerii
const GalleryErrorFallback = ({ reset }: { reset: () => void }) => (
  <div className="container mx-auto my-12 flex flex-col items-center justify-center rounded-lg border border-amber-100 bg-amber-50 p-8 text-center dark:border-amber-900/30 dark:bg-amber-900/10">
    <AlertTriangle className="h-12 w-12 text-amber-500" />
    <h3 className="mt-4 text-xl font-medium">Nie udało się załadować galerii</h3>
    <p className="mt-2 max-w-md text-muted-foreground">
      Przepraszamy, wystąpił problem podczas ładowania galerii. Spróbuj odświeżyć stronę.
    </p>
    <Button onClick={reset} className="mt-4">
      Spróbuj ponownie
    </Button>
  </div>
)

export default function SafeGallery() {
  return (
    <ErrorBoundary fallback={<GalleryErrorFallback reset={() => window.location.reload()} />}>
      <Gallery />
    </ErrorBoundary>
  )
}
