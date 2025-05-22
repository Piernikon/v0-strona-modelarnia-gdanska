"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Truck, CreditCard, Edit2 } from "lucide-react"
import { motion } from "framer-motion"

export default function ReviewPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"pl" | "en">("pl")
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [error, setError] = useState("")

  const texts = {
    pl: {
      title: "Przegląd zamówienia",
      shippingInfo: "Informacje o dostawie",
      edit: "Edytuj",
      paymentInfo: "Informacje o płatności",
      orderItems: "Przedmioty w zamówieniu",
      quantity: "Ilość",
      price: "Cena",
      subtotal: "Suma częściowa",
      shipping: "Dostawa",
      shippingFree: "Darmowa",
      tax: "Podatek (23% VAT)",
      orderTotal: "Suma zamówienia",
      termsAndConditions: "Przeczytałem i akceptuję warunki korzystania z usługi oraz politykę prywatności",
      placeOrder: "Złóż zamówienie",
      back: "Wróć do płatności",
      termsRequired: "Musisz zaakceptować warunki, aby kontynuować",
    },
    en: {
      title: "Order Review",
      shippingInfo: "Shipping Information",
      edit: "Edit",
      paymentInfo: "Payment Information",
      orderItems: "Order Items",
      quantity: "Quantity",
      price: "Price",
      subtotal: "Subtotal",
      shipping: "Shipping",
      shippingFree: "Free",
      tax: "Tax (23% VAT)",
      orderTotal: "Order Total",
      termsAndConditions: "I have read and agree to the terms of service and privacy policy",
      placeOrder: "Place Order",
      back: "Back to Payment",
      termsRequired: "You must accept the terms to continue",
    },
  }

  const currentTexts = texts[language]

  // Mock data for the review page
  const shippingInfo = {
    name: language === "pl" ? "Jan Kowalski" : "John Smith",
    address: language === "pl" ? "ul. Długa 12, 80-765 Gdańsk, Polska" : "123 Main St, Gdańsk, Poland",
    method: language === "pl" ? "Standardowa dostawa (3-5 dni roboczych)" : "Standard Shipping (3-5 business days)",
  }

  const paymentInfo = {
    method: language === "pl" ? "Karta kredytowa" : "Credit Card",
    card: "Visa •••• 1234",
    billingAddress: language === "pl" ? "Taki sam jak adres dostawy" : "Same as shipping address",
  }

  const orderItems = [
    {
      id: 1,
      name: language === "pl" ? "PLA Filament Premium 1.75mm" : "PLA Filament Premium 1.75mm",
      color: language === "pl" ? "Czarny" : "Black",
      size: "1kg",
      price: language === "pl" ? "129,99 zł" : "$29.99",
      priceValue: 129.99,
      quantity: 2,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: language === "pl" ? "Żywica standardowa 500ml" : "Standard Resin 500ml",
      color: language === "pl" ? "Przezroczysty" : "Clear",
      size: "500ml",
      price: language === "pl" ? "149,99 zł" : "$34.99",
      priceValue: 149.99,
      quantity: 1,
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  // Calculate totals
  const subtotal = orderItems.reduce((sum, item) => sum + item.priceValue * item.quantity, 0)
  const shipping = 0 // Free shipping
  const tax = subtotal * 0.23 // 23% VAT
  const total = subtotal + shipping + tax

  // Format currency based on language
  const formatCurrency = (value: number) => {
    if (language === "pl") {
      return value.toFixed(2).replace(".", ",") + " zł"
    } else {
      return "$" + value.toFixed(2)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!termsAccepted) {
      setError(currentTexts.termsRequired)
      return
    }

    // Proceed to confirmation
    router.push("/checkout/confirmation")
  }

  const handleBack = () => {
    router.push("/checkout/payment")
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#00330a] dark:text-[#dfae4f]">{currentTexts.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Shipping Information */}
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-2 text-[#00330a] dark:text-[#dfae4f]" />
                <h3 className="text-lg font-medium">{currentTexts.shippingInfo}</h3>
              </div>
              <Link href="/checkout/shipping">
                <Button variant="ghost" size="sm" className="h-8 text-[#00330a] dark:text-[#dfae4f]">
                  <Edit2 className="h-4 w-4 mr-1" />
                  {currentTexts.edit}
                </Button>
              </Link>
            </div>
            <div className="pl-7 space-y-1 text-muted-foreground">
              <p>{shippingInfo.name}</p>
              <p>{shippingInfo.address}</p>
              <p>{shippingInfo.method}</p>
            </div>
          </div>

          {/* Payment Information */}
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-[#00330a] dark:text-[#dfae4f]" />
                <h3 className="text-lg font-medium">{currentTexts.paymentInfo}</h3>
              </div>
              <Link href="/checkout/payment">
                <Button variant="ghost" size="sm" className="h-8 text-[#00330a] dark:text-[#dfae4f]">
                  <Edit2 className="h-4 w-4 mr-1" />
                  {currentTexts.edit}
                </Button>
              </Link>
            </div>
            <div className="pl-7 space-y-1 text-muted-foreground">
              <p>{paymentInfo.method}</p>
              <p>{paymentInfo.card}</p>
              <p>{paymentInfo.billingAddress}</p>
            </div>
          </div>

          {/* Order Items */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{currentTexts.orderItems}</h3>
            <div className="border rounded-lg divide-y">
              {orderItems.map((item) => (
                <div key={item.id} className="p-4 flex items-center">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden mr-4 bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.color}, {item.size}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      {currentTexts.quantity}: {item.quantity}
                    </p>
                    <p className="font-medium">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="border rounded-lg p-4 space-y-3">
            <h3 className="text-lg font-medium">{currentTexts.orderTotal}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{currentTexts.subtotal}</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{currentTexts.shipping}</span>
                <span className="text-green-600 dark:text-green-400">{currentTexts.shippingFree}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{currentTexts.tax}</span>
                <span>{formatCurrency(tax)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>{currentTexts.orderTotal}</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) => {
                setTermsAccepted(!!checked)
                if (!!checked) setError("")
              }}
              className={error ? "border-red-500" : ""}
            />
            <div>
              <Label htmlFor="terms" className="cursor-pointer">
                {currentTexts.termsAndConditions}
              </Label>
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="button" variant="outline" className="flex-1" onClick={handleBack}>
              {currentTexts.back}
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#00330a] hover:bg-[#004a0f] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]"
            >
              {currentTexts.placeOrder}
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
