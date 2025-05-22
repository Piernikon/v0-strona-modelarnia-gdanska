"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"pl" | "en">("pl")

  const texts = {
    pl: {
      title: "Kasa",
      subtitle: "Wybierz opcję, aby kontynuować",
      guestCheckout: "Kasa bez rejestracji",
      guestDescription: "Kontynuuj jako gość bez tworzenia konta",
      accountCheckout: "Kasa z kontem",
      accountDescription: "Zaloguj się lub utwórz konto, aby śledzić zamówienia",
      continue: "Kontynuuj",
    },
    en: {
      title: "Checkout",
      subtitle: "Choose an option to continue",
      guestCheckout: "Guest Checkout",
      guestDescription: "Continue as a guest without creating an account",
      accountCheckout: "Account Checkout",
      accountDescription: "Sign in or create an account to track orders",
      continue: "Continue",
    },
  }

  const currentTexts = texts[language]

  const handleGuestCheckout = () => {
    router.push("/checkout/shipping")
  }

  const handleAccountCheckout = () => {
    // In a real app, this would redirect to login/signup
    router.push("/checkout/shipping")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">{currentTexts.title}</h1>
          <p className="text-muted-foreground">{currentTexts.subtitle}</p>
        </div>

        <div className="space-y-4">
          <Card className="border-2 hover:border-[#00330a] dark:hover:border-[#dfae4f] cursor-pointer transition-all">
            <CardHeader>
              <CardTitle>{currentTexts.guestCheckout}</CardTitle>
              <CardDescription>{currentTexts.guestDescription}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                onClick={handleGuestCheckout}
                className="w-full bg-[#00330a] hover:bg-[#004a0f] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]"
              >
                {currentTexts.continue}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-2 hover:border-[#00330a] dark:hover:border-[#dfae4f] cursor-pointer transition-all">
            <CardHeader>
              <CardTitle>{currentTexts.accountCheckout}</CardTitle>
              <CardDescription>{currentTexts.accountDescription}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                onClick={handleAccountCheckout}
                variant="outline"
                className="w-full border-[#00330a] text-[#00330a] hover:bg-[#00330a]/10 dark:border-[#dfae4f] dark:text-[#dfae4f] dark:hover:bg-[#dfae4f]/10"
              >
                {currentTexts.continue}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
