"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Wallet, Building } from "lucide-react"
import { motion } from "framer-motion"

export default function PaymentPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"pl" | "en">("pl")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
    billingAddressSame: true,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const texts = {
    pl: {
      title: "Informacje o płatności",
      paymentMethod: "Metoda płatności",
      creditCard: "Karta kredytowa / debetowa",
      paypal: "PayPal",
      bankTransfer: "Przelew bankowy",
      cardDetails: "Dane karty",
      cardNumber: "Numer karty",
      cardName: "Imię i nazwisko na karcie",
      expiryDate: "Data ważności (MM/RR)",
      cvv: "CVV",
      saveCard: "Zapisz tę kartę na przyszłość",
      billingAddress: "Adres rozliczeniowy",
      sameAsShipping: "Taki sam jak adres dostawy",
      differentAddress: "Użyj innego adresu rozliczeniowego",
      continue: "Kontynuuj do przeglądu",
      back: "Wróć do dostawy",
      required: "To pole jest wymagane",
      invalidCard: "Proszę podać prawidłowy numer karty",
      invalidExpiry: "Proszę podać prawidłową datę ważności",
      invalidCvv: "Proszę podać prawidłowy kod CVV",
    },
    en: {
      title: "Payment Information",
      paymentMethod: "Payment Method",
      creditCard: "Credit / Debit Card",
      paypal: "PayPal",
      bankTransfer: "Bank Transfer",
      cardDetails: "Card Details",
      cardNumber: "Card Number",
      cardName: "Name on Card",
      expiryDate: "Expiry Date (MM/YY)",
      cvv: "CVV",
      saveCard: "Save this card for future purchases",
      billingAddress: "Billing Address",
      sameAsShipping: "Same as shipping address",
      differentAddress: "Use a different billing address",
      continue: "Continue to Review",
      back: "Back to Shipping",
      required: "This field is required",
      invalidCard: "Please enter a valid card number",
      invalidExpiry: "Please enter a valid expiry date",
      invalidCvv: "Please enter a valid CVV",
    },
  }

  const currentTexts = texts[language]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Format card number with spaces
    if (name === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
      setFormData((prev) => ({ ...prev, [name]: formatted }))
    }
    // Format expiry date with slash
    else if (name === "expiryDate") {
      const cleaned = value.replace(/\D/g, "")
      let formatted = cleaned
      if (cleaned.length > 2) {
        formatted = cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4)
      }
      setFormData((prev) => ({ ...prev, [name]: formatted }))
    }
    // Limit CVV to 3-4 digits
    else if (name === "cvv") {
      const cleaned = value.replace(/\D/g, "").slice(0, 4)
      setFormData((prev) => ({ ...prev, [name]: cleaned }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleRadioChange = (value: string) => {
    setPaymentMethod(value)
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (paymentMethod === "credit-card") {
      // Required fields
      const requiredFields = ["cardNumber", "cardName", "expiryDate", "cvv"]
      requiredFields.forEach((field) => {
        if (!formData[field as keyof typeof formData]) {
          newErrors[field] = currentTexts.required
        }
      })

      // Card number validation (simplified)
      if (formData.cardNumber && formData.cardNumber.replace(/\s/g, "").length < 16) {
        newErrors.cardNumber = currentTexts.invalidCard
      }

      // Expiry date validation
      if (formData.expiryDate) {
        const [month, year] = formData.expiryDate.split("/")
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear() % 100
        const currentMonth = currentDate.getMonth() + 1

        if (
          !month ||
          !year ||
          month.length !== 2 ||
          year.length !== 2 ||
          Number.parseInt(month) < 1 ||
          Number.parseInt(month) > 12 ||
          Number.parseInt(year) < currentYear ||
          (Number.parseInt(year) === currentYear && Number.parseInt(month) < currentMonth)
        ) {
          newErrors.expiryDate = currentTexts.invalidExpiry
        }
      }

      // CVV validation
      if (formData.cvv && (formData.cvv.length < 3 || formData.cvv.length > 4)) {
        newErrors.cvv = currentTexts.invalidCvv
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Proceed to next step
      router.push("/checkout/review")
    }
  }

  const handleBack = () => {
    router.push("/checkout/shipping")
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#00330a] dark:text-[#dfae4f]">{currentTexts.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Payment Method */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{currentTexts.paymentMethod}</h3>
            <RadioGroup value={paymentMethod} onValueChange={handleRadioChange} className="space-y-3">
              <div className="flex items-start space-x-3 border rounded-md p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="credit-card" id="credit-card" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-[#00330a] dark:text-[#dfae4f]" />
                    <Label htmlFor="credit-card" className="font-medium cursor-pointer">
                      {currentTexts.creditCard}
                    </Label>
                  </div>
                  <div className="flex mt-2 space-x-2">
                    <img src="/placeholder.svg?height=30&width=40" alt="Visa" className="h-6" />
                    <img src="/placeholder.svg?height=30&width=40" alt="Mastercard" className="h-6" />
                    <img src="/placeholder.svg?height=30&width=40" alt="Amex" className="h-6" />
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3 border rounded-md p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
                <div className="flex items-center flex-1">
                  <Wallet className="h-5 w-5 mr-2 text-[#00330a] dark:text-[#dfae4f]" />
                  <Label htmlFor="paypal" className="font-medium cursor-pointer">
                    {currentTexts.paypal}
                  </Label>
                </div>
              </div>
              <div className="flex items-start space-x-3 border rounded-md p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="bank-transfer" id="bank-transfer" className="mt-1" />
                <div className="flex items-center flex-1">
                  <Building className="h-5 w-5 mr-2 text-[#00330a] dark:text-[#dfae4f]" />
                  <Label htmlFor="bank-transfer" className="font-medium cursor-pointer">
                    {currentTexts.bankTransfer}
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Card Details (shown only if credit card is selected) */}
          {paymentMethod === "credit-card" && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{currentTexts.cardDetails}</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">{currentTexts.cardNumber}</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className={errors.cardNumber ? "border-red-500" : ""}
                  />
                  {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardName">{currentTexts.cardName}</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className={errors.cardName ? "border-red-500" : ""}
                  />
                  {errors.cardName && <p className="text-sm text-red-500">{errors.cardName}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">{currentTexts.expiryDate}</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className={errors.expiryDate ? "border-red-500" : ""}
                    />
                    {errors.expiryDate && <p className="text-sm text-red-500">{errors.expiryDate}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">{currentTexts.cvv}</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      type="password"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength={4}
                      className={errors.cvv ? "border-red-500" : ""}
                    />
                    {errors.cvv && <p className="text-sm text-red-500">{errors.cvv}</p>}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="saveCard"
                    checked={formData.saveCard}
                    onCheckedChange={(checked) => handleCheckboxChange("saveCard", !!checked)}
                  />
                  <Label htmlFor="saveCard" className="text-sm cursor-pointer">
                    {currentTexts.saveCard}
                  </Label>
                </div>
              </div>
            </div>
          )}

          {/* Billing Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{currentTexts.billingAddress}</h3>
            <RadioGroup
              value={formData.billingAddressSame ? "same" : "different"}
              onValueChange={(value) => handleCheckboxChange("billingAddressSame", value === "same")}
              className="space-y-3"
            >
              <div className="flex items-start space-x-3 border rounded-md p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="same" id="same-address" className="mt-1" />
                <Label htmlFor="same-address" className="font-medium cursor-pointer">
                  {currentTexts.sameAsShipping}
                </Label>
              </div>
              <div className="flex items-start space-x-3 border rounded-md p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="different" id="different-address" className="mt-1" />
                <Label htmlFor="different-address" className="font-medium cursor-pointer">
                  {currentTexts.differentAddress}
                </Label>
              </div>
            </RadioGroup>
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
              {currentTexts.continue}
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
