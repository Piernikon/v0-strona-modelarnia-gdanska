"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

interface CartPageProps {
  language?: "pl" | "en"
}

export default function CartPage({ language = "pl" }: CartPageProps) {
  const [cartItems, setCartItems] = useState([
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
  ])

  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  const texts = {
    pl: {
      title: "Koszyk",
      emptyCart: "Twój koszyk jest pusty",
      continueShopping: "Kontynuuj zakupy",
      product: "Produkt",
      price: "Cena",
      quantity: "Ilość",
      total: "Suma",
      remove: "Usuń",
      subtotal: "Suma częściowa",
      shipping: "Dostawa",
      shippingFree: "Darmowa",
      tax: "Podatek (23% VAT)",
      orderTotal: "Suma zamówienia",
      promoCode: "Kod promocyjny",
      applyPromo: "Zastosuj",
      promoApplied: "Kod promocyjny zastosowany",
      checkout: "Przejdź do kasy",
      continueShopping: "Kontynuuj zakupy",
      currency: "zł",
    },
    en: {
      title: "Shopping Cart",
      emptyCart: "Your cart is empty",
      continueShopping: "Continue Shopping",
      product: "Product",
      price: "Price",
      quantity: "Quantity",
      total: "Total",
      remove: "Remove",
      subtotal: "Subtotal",
      shipping: "Shipping",
      shippingFree: "Free",
      tax: "Tax (23% VAT)",
      orderTotal: "Order Total",
      promoCode: "Promo Code",
      applyPromo: "Apply",
      promoApplied: "Promo code applied",
      checkout: "Proceed to Checkout",
      continueShopping: "Continue Shopping",
      currency: "$",
    },
  }

  const currentTexts = texts[language]

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const applyPromoCode = () => {
    if (promoCode.trim() !== "") {
      setPromoApplied(true)
    }
  }

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.priceValue * item.quantity, 0)
  const discount = promoApplied ? subtotal * 0.1 : 0 // 10% discount if promo applied
  const shipping = 0 // Free shipping
  const tax = (subtotal - discount) * 0.23 // 23% VAT
  const total = subtotal - discount + shipping + tax

  // Format currency based on language
  const formatCurrency = (value: number) => {
    if (language === "pl") {
      return value.toFixed(2).replace(".", ",") + " zł"
    } else {
      return "$" + value.toFixed(2)
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow bg-background">
          <div className="container px-4 md:px-6 py-8 md:py-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-[#00330a] dark:text-[#dfae4f]"
            >
              {currentTexts.title}
            </motion.h1>

            {cartItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center py-16"
              >
                <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-xl font-medium mb-4">{currentTexts.emptyCart}</h2>
                <Link href="/store">
                  <Button className="bg-[#00330a] hover:bg-[#004a0f] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]">
                    {currentTexts.continueShopping}
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-2"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b">
                        <tr>
                          <th className="text-left py-4 font-medium">{currentTexts.product}</th>
                          <th className="text-right py-4 font-medium">{currentTexts.price}</th>
                          <th className="text-center py-4 font-medium">{currentTexts.quantity}</th>
                          <th className="text-right py-4 font-medium">{currentTexts.total}</th>
                          <th className="text-right py-4 font-medium sr-only">{currentTexts.remove}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {cartItems.map((item) => (
                          <tr key={item.id} className="group">
                            <td className="py-4">
                              <div className="flex items-center">
                                <div className="relative h-16 w-16 rounded-md overflow-hidden mr-4 bg-muted">
                                  <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h3 className="font-medium">{item.name}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {item.color}, {item.size}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 text-right">{item.price}</td>
                            <td className="py-4">
                              <div className="flex items-center justify-center">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-10 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </td>
                            <td className="py-4 text-right">{formatCurrency(item.priceValue * item.quantity)}</td>
                            <td className="py-4 text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4 text-red-500" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>

                {/* Order Summary */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="lg:col-span-1"
                >
                  <div className="border rounded-lg p-6 space-y-6 bg-card">
                    <h2 className="text-xl font-bold mb-4 text-[#00330a] dark:text-[#dfae4f]">
                      {currentTexts.orderTotal}
                    </h2>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{currentTexts.subtotal}</span>
                        <span>{formatCurrency(subtotal)}</span>
                      </div>

                      {promoApplied && (
                        <div className="flex justify-between text-green-600 dark:text-green-400">
                          <span>Discount (10%)</span>
                          <span>-{formatCurrency(discount)}</span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{currentTexts.shipping}</span>
                        <span className="text-green-600 dark:text-green-400">{currentTexts.shippingFree}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{currentTexts.tax}</span>
                        <span>{formatCurrency(tax)}</span>
                      </div>

                      <div className="border-t pt-3 mt-3">
                        <div className="flex justify-between font-bold">
                          <span>{currentTexts.orderTotal}</span>
                          <span>{formatCurrency(total)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="flex space-x-2">
                        <Input
                          placeholder={currentTexts.promoCode}
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          disabled={promoApplied}
                        />
                        <Button
                          variant="outline"
                          onClick={applyPromoCode}
                          disabled={promoApplied || promoCode.trim() === ""}
                        >
                          {currentTexts.applyPromo}
                        </Button>
                      </div>
                      {promoApplied && (
                        <p className="text-sm text-green-600 dark:text-green-400 mt-2">{currentTexts.promoApplied}</p>
                      )}
                    </div>

                    <div className="space-y-3 pt-4">
                      <Link href="/checkout">
                        <Button className="w-full bg-[#00330a] hover:bg-[#004a0f] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]">
                          {currentTexts.checkout}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href="/store">
                        <Button variant="outline" className="w-full">
                          {currentTexts.continueShopping}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer language={language} />
    </>
  )
}
