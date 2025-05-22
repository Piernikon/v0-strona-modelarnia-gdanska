import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex min-h-[600px] flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center space-y-4 text-center">
        <div className="text-6xl font-bold">404</div>
        <h1 className="text-2xl font-bold tracking-tight">Strona nie znaleziona</h1>
        <p className="text-muted-foreground">Przepraszamy, nie mogliśmy znaleźć strony, której szukasz.</p>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Button asChild>
            <Link href="/">Wróć do strony głównej</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Skontaktuj się z nami</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
