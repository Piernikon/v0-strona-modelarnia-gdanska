"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Printer, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ConfirmationPage() {
  const [language, setLanguage] = useState<"pl" | "en">("pl")
  const [orderNumber, setOrderNumber] = useState("")

  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(10000000 + Math.random() * 90000000).toString()
    setOrderNumber(randomOrderNumber)
  }, [])

  const texts = {
    pl: {
      title: "Zamówienie złożone!",
      subtitle: "Dziękujemy za zakupy w Modelarnia Gdańska",
      orderNumber: "Numer zamówienia",
      orderConfirmation: "Potwierdzenie zamówienia zostało wysłane na Twój adres e-mail.",
      orderTracking: "Możesz śledzić status swojego zamówienia w sekcji 'Moje zamówienia'.",
      estimatedDelivery: "Przewidywana dostawa",
      deliveryDate: "28 maja - 2 czerwca 2025",
      printReceipt: "Drukuj potwierdzenie",
      viewOrder: "Zobacz zamówienie",
      continueShopping: "Kontynuuj zakupy",
      questions: "Masz pytania dotyczące zamówienia?",
      contactUs: "Skontaktuj się z nami",
    },
    en: {
      title: "Order Placed!",
      subtitle: "Thank you for shopping with Modelarnia Gdańska",
      orderNumber: "Order Number",
      orderConfirmation: "An order confirmation has been sent to your email address.",
      orderTracking: "You can track your order status in the 'My Orders' section.",
      estimatedDelivery: "Estimated Delivery",
      deliveryDate: "May 28 - June 2, 2025",
      printReceipt: "Print Receipt",
      viewOrder: "View Order",
      continueShopping: "Continue Shopping",
      questions: "Have questions about your order?",
      contactUs: "Contact Us",
    },
  }

  const currentTexts = texts[language]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
            <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold text-[#00330a] dark:text-[#dfae4f]">{currentTexts.title}</h2>
          <p className="text-muted-foreground">{currentTexts.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-muted/50 rounded-lg p-6 space-y-4"
        >
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{currentTexts.orderNumber}</p>
            <p className="text-lg font-medium">#{orderNumber}</p>
          </div>
          <p className="text-sm">{currentTexts.orderConfirmation}</p>
          <p className="text-sm">{currentTexts.orderTracking}</p>
          <div className="pt-2 space-y-1">
            <p className="text-sm text-muted-foreground">{currentTexts.estimatedDelivery}</p>
            <div className="flex items-center justify-center space-x-2">
              <Package className="h-4 w-4 text-[#00330a] dark:text-[#dfae4f]" />
              <p className="font-medium">{currentTexts.deliveryDate}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="space-y-4 pt-4"
        >
          <Button variant="outline" size="sm" className="gap-2">
            <Printer className="h-4 w-4" />
            {currentTexts.printReceipt}
          </Button>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button variant="outline" className="flex-1">
              {currentTexts.viewOrder}
            </Button>
            <Link href="/store" className="flex-1">
              <Button className="w-full bg-[#00330a] hover:bg-[#004a0f] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]">
                {currentTexts.continueShopping}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="border-t pt-6 mt-6"
        >
          <p className="text-sm text-muted-foreground">{currentTexts.questions}</p>
          <Link href="/#contact">
            <Button variant="link" className="text-[#00330a] dark:text-[#dfae4f]">
              {currentTexts.contactUs}
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
