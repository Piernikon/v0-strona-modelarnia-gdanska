"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"

export default function ShippingPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"pl" | "en">("pl")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: language === "pl" ? "Polska" : "Poland",
    shippingMethod: "standard",
    saveInfo: true,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const texts = {
    pl: {
      title: "Informacje o dostawie",
      contactInfo: "Informacje kontaktowe",
      firstName: "Imię",
      lastName: "Nazwisko",
      email: "Email",
      phone: "Telefon",
      shippingAddress: "Adres dostawy",
      address: "Adres",
      city: "Miasto",
      postalCode: "Kod pocztowy",
      country: "Kraj",
      shippingMethod: "Metoda dostawy",
      standard: "Standardowa dostawa (3-5 dni roboczych)",
      express: "Dostawa ekspresowa (1-2 dni robocze)",
      saveInfo: "Zapisz te informacje na przyszłość",
      continue: "Kontynuuj do płatności",
      required: "To pole jest wymagane",
      invalidEmail: "Proszę podać prawidłowy adres email",
      invalidPhone: "Proszę podać prawidłowy numer telefonu",
      invalidPostal: "Proszę podać prawidłowy kod pocztowy",
    },
    en: {
      title: "Shipping Information",
      contactInfo: "Contact Information",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      shippingAddress: "Shipping Address",
      address: "Address",
      city: "City",
      postalCode: "Postal Code",
      country: "Country",
      shippingMethod: "Shipping Method",
      standard: "Standard Shipping (3-5 business days)",
      express: "Express Shipping (1-2 business days)",
      saveInfo: "Save this information for next time",
      continue: "Continue to Payment",
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
      invalidPhone: "Please enter a valid phone number",
      invalidPostal: "Please enter a valid postal code",
    },
  }

  const currentTexts = texts[language]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, shippingMethod: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, saveInfo: checked }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Required fields
    const requiredFields = ["firstName", "lastName", "email", "phone", "address", "city", "postalCode"]
    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = currentTexts.required
      }
    })

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = currentTexts.invalidEmail
    }

    // Phone validation
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = currentTexts.invalidPhone
    }

    // Postal code validation
    if (formData.postalCode) {
      const postalRegex = language === "pl" ? /^\d{2}-\d{3}$/ : /^[A-Z0-9]{3,8}$/
      if (!postalRegex.test(formData.postalCode)) {
        newErrors.postalCode = currentTexts.invalidPostal
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Proceed to next step
      router.push("/checkout/payment")
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#00330a] dark:text-[#dfae4f]">{currentTexts.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{currentTexts.contactInfo}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">{currentTexts.firstName}</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{currentTexts.lastName}</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{currentTexts.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{currentTexts.phone}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{currentTexts.shippingAddress}</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="address">{currentTexts.address}</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">{currentTexts.city}</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={errors.city ? "border-red-500" : ""}
                  />
                  {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">{currentTexts.postalCode}</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={errors.postalCode ? "border-red-500" : ""}
                  />
                  {errors.postalCode && <p className="text-sm text-red-500">{errors.postalCode}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">{currentTexts.country}</Label>
                <Input id="country" name="country" value={formData.country} onChange={handleChange} disabled />
              </div>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{currentTexts.shippingMethod}</h3>
            <RadioGroup value={formData.shippingMethod} onValueChange={handleRadioChange} className="space-y-3">
              <div className="flex items-start space-x-3 border rounded-md p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="standard" id="standard" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="standard" className="font-medium cursor-pointer">
                    {currentTexts.standard}
                  </Label>
                  <p className="text-sm text-muted-foreground">{language === "pl" ? "Darmowa" : "Free"}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 border rounded-md p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="express" id="express" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="express" className="font-medium cursor-pointer">
                    {currentTexts.express}
                  </Label>
                  <p className="text-sm text-muted-foreground">{language === "pl" ? "25,00 zł" : "$5.99"}</p>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Save Information */}
          <div className="flex items-center space-x-2">
            <Checkbox id="saveInfo" checked={formData.saveInfo} onCheckedChange={handleCheckboxChange} />
            <Label htmlFor="saveInfo" className="text-sm cursor-pointer">
              {currentTexts.saveInfo}
            </Label>
          </div>

          {/* Continue Button */}
          <Button
            type="submit"
            className="w-full bg-[#00330a] hover:bg-[#004a0f] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]"
          >
            {currentTexts.continue}
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
