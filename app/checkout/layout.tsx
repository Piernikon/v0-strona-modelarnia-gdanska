"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, ShoppingCart, Truck, CreditCard, FileCheck } from "lucide-react"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

interface CheckoutLayoutProps {
  children: React.ReactNode
}

export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  const pathname = usePathname()
  const [language, setLanguage] = useState<"pl" | "en">("pl")
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    // Determine current step based on pathname
    if (pathname.includes("/shipping")) {
      setCurrentStep(1)
    } else if (pathname.includes("/payment")) {
      setCurrentStep(2)
    } else if (pathname.includes("/review")) {
      setCurrentStep(3)
    } else if (pathname.includes("/confirmation")) {
      setCurrentStep(4)
    }
  }, [pathname])

  const steps = [
    {
      number: 1,
      title: language === "pl" ? "Dostawa" : "Shipping",
      path: "/checkout/shipping",
      icon: <Truck className="h-5 w-5" />,
    },
    {
      number: 2,
      title: language === "pl" ? "Płatność" : "Payment",
      path: "/checkout/payment",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      number: 3,
      title: language === "pl" ? "Przegląd" : "Review",
      path: "/checkout/review",
      icon: <FileCheck className="h-5 w-5" />,
    },
    {
      number: 4,
      title: language === "pl" ? "Potwierdzenie" : "Confirmation",
      path: "/checkout/confirmation",
      icon: <Check className="h-5 w-5" />,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-[#00330a] dark:text-[#dfae4f]">
            Modelarnia Gdańska
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-4 w-4 mr-2" />
                {language === "pl" ? "Koszyk" : "Cart"}
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "pl" ? "en" : "pl")}>
              {language === "pl" ? "EN" : "PL"}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-background">
        <div className="container px-4 md:px-6 py-8">
          <div className="mb-8">
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === "pl" ? "Powrót do koszyka" : "Back to cart"}
              </Button>
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-[#00330a] dark:text-[#dfae4f]"
            >
              {language === "pl" ? "Zamówienie" : "Checkout"}
            </motion.h1>
          </div>

          {/* Checkout Steps */}
          <div className="mb-8">
            <div className="hidden md:flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  {/* Step with number */}
                  <div
                    className={`flex items-center justify-center h-10 w-10 rounded-full ${
                      step.number <= currentStep
                        ? "bg-[#00330a] text-white dark:bg-[#dfae4f] dark:text-[#1e1e1e]"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.number < currentStep ? <Check className="h-5 w-5" /> : <span>{step.number}</span>}
                  </div>

                  {/* Step title */}
                  <span
                    className={`ml-2 ${
                      step.number <= currentStep
                        ? "font-medium text-[#00330a] dark:text-[#dfae4f]"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>

                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-grow mx-4 h-0.5 ${
                        step.number < currentStep ? "bg-[#00330a] dark:bg-[#dfae4f]" : "bg-muted"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Steps */}
            <div className="flex md:hidden items-center justify-between px-2">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex flex-col items-center ${
                    step.number === currentStep ? "text-[#00330a] dark:text-[#dfae4f]" : "text-muted-foreground"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center h-8 w-8 rounded-full ${
                      step.number <= currentStep
                        ? "bg-[#00330a] text-white dark:bg-[#dfae4f] dark:text-[#1e1e1e]"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.number < currentStep ? <Check className="h-4 w-4" /> : step.icon}
                  </div>
                  <span className="text-xs mt-1">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">{children}</div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="border rounded-lg p-6 space-y-4 bg-card sticky top-8">
                <h2 className="text-lg font-bold mb-4 text-[#00330a] dark:text-[#dfae4f]">
                  {language === "pl" ? "Podsumowanie zamówienia" : "Order Summary"}
                </h2>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden mr-3 bg-muted">
                        <img src="/placeholder.svg?height=300&width=300" alt="Product" className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">PLA Filament Premium 1.75mm</p>
                        <p className="text-xs text-muted-foreground">
                          {language === "pl" ? "Czarny" : "Black"}, 1kg x 2
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">{language === "pl" ? "259,98 zł" : "$59.98"}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden mr-3 bg-muted">
                        <img src="/placeholder.svg?height=300&width=300" alt="Product" className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {language === "pl" ? "Żywica standardowa 500ml" : "Standard Resin 500ml"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {language === "pl" ? "Przezroczysty" : "Clear"}, 500ml x 1
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">{language === "pl" ? "149,99 zł" : "$34.99"}</span>
                  </div>

                  <div className="border-t pt-3 mt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{language === "pl" ? "Suma częściowa" : "Subtotal"}</span>
                      <span>{language === "pl" ? "409,97 zł" : "$94.97"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{language === "pl" ? "Dostawa" : "Shipping"}</span>
                      <span className="text-green-600 dark:text-green-400">
                        {language === "pl" ? "Darmowa" : "Free"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === "pl" ? "Podatek (23% VAT)" : "Tax (23% VAT)"}
                      </span>
                      <span>{language === "pl" ? "94,29 zł" : "$21.84"}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2">
                      <span>{language === "pl" ? "Suma" : "Total"}</span>
                      <span>{language === "pl" ? "504,26 zł" : "$116.81"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer language={language} />
    </div>
  )
}
