"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Heart, Share2, ShoppingCart, Star, Truck, ArrowLeft, Check } from "lucide-react"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProductPageProps {
  params: {
    slug: string
  }
  language?: "pl" | "en"
}

export default function ProductPage({ params, language = "pl" }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("1kg")

  // This would come from your API/database in a real implementation
  const product = {
    id: "pla-filament-premium",
    name: language === "pl" ? "PLA Filament Premium 1.75mm" : "PLA Filament Premium 1.75mm",
    slug: "pla-filament-premium",
    price: language === "pl" ? "129,99 zł" : "$29.99",
    originalPrice: language === "pl" ? "149,99 zł" : "$34.99",
    discount: "13%",
    rating: 4.8,
    reviewCount: 124,
    sku: "FIL-PLA-PREM-1.75",
    stock: 42,
    description:
      language === "pl"
        ? "Wysokiej jakości filament PLA 1.75mm do drukarek 3D. Zapewnia doskonałą jakość druku, minimalne skurcze i wysoką dokładność wymiarową. Idealny do modeli, prototypów i części użytkowych."
        : "High-quality PLA 1.75mm filament for 3D printers. Provides excellent print quality, minimal shrinkage, and high dimensional accuracy. Perfect for models, prototypes, and functional parts.",
    longDescription:
      language === "pl"
        ? "Nasz premium filament PLA 1.75mm jest produkowany z najwyższej jakości materiałów, zapewniając doskonałe rezultaty druku 3D. Filament charakteryzuje się wysoką dokładnością wymiarową (±0.03mm), minimalnym skurczem i doskonałą przyczepnością warstw. Jest biodegradowalny i przyjazny dla środowiska, co czyni go idealnym wyborem dla świadomych ekologicznie użytkowników. Doskonale nadaje się do drukowania modeli, prototypów, figurek, części funkcjonalnych i wielu innych zastosowań. Kompatybilny z większością drukarek 3D FDM na rynku."
        : "Our premium PLA 1.75mm filament is manufactured from the highest quality materials, ensuring excellent 3D printing results. The filament features high dimensional accuracy (±0.03mm), minimal shrinkage, and excellent layer adhesion. It is biodegradable and environmentally friendly, making it an ideal choice for environmentally conscious users. Perfect for printing models, prototypes, figurines, functional parts, and many other applications. Compatible with most FDM 3D printers on the market.",
    specifications: [
      {
        name: language === "pl" ? "Materiał" : "Material",
        value: "PLA (Polylactic Acid)",
      },
      {
        name: language === "pl" ? "Średnica" : "Diameter",
        value: "1.75mm ±0.03mm",
      },
      {
        name: language === "pl" ? "Waga" : "Weight",
        value: "1kg",
      },
      {
        name: language === "pl" ? "Temperatura druku" : "Printing Temperature",
        value: "190-220°C",
      },
      {
        name: language === "pl" ? "Temperatura stołu" : "Bed Temperature",
        value: "50-60°C",
      },
      {
        name: language === "pl" ? "Prędkość druku" : "Print Speed",
        value: "30-60mm/s",
      },
      {
        name: language === "pl" ? "Skurcz" : "Shrinkage",
        value: "<0.5%",
      },
      {
        name: language === "pl" ? "Tolerancja" : "Tolerance",
        value: "±0.03mm",
      },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: [
      { name: language === "pl" ? "Czarny" : "Black", value: "black" },
      { name: language === "pl" ? "Biały" : "White", value: "white" },
      { name: language === "pl" ? "Czerwony" : "Red", value: "red" },
      { name: language === "pl" ? "Niebieski" : "Blue", value: "blue" },
      { name: language === "pl" ? "Zielony" : "Green", value: "green" },
    ],
    sizes: [
      { name: "250g", value: "250g" },
      { name: "500g", value: "500g" },
      { name: "1kg", value: "1kg" },
      { name: "2kg", value: "2kg" },
    ],
    features: [
      language === "pl" ? "Wysoka dokładność wymiarowa" : "High dimensional accuracy",
      language === "pl" ? "Minimalne skurcze" : "Minimal shrinkage",
      language === "pl" ? "Doskonała przyczepność warstw" : "Excellent layer adhesion",
      language === "pl" ? "Biodegradowalny i przyjazny dla środowiska" : "Biodegradable and environmentally friendly",
      language === "pl" ? "Kompatybilny z większością drukarek 3D FDM" : "Compatible with most FDM 3D printers",
    ],
    reviews: [
      {
        id: 1,
        author: language === "pl" ? "Jan Kowalski" : "John Smith",
        rating: 5,
        date: language === "pl" ? "12 maja 2023" : "May 12, 2023",
        content:
          language === "pl"
            ? "Świetny filament! Drukuje się bez problemów, kolory są żywe, a jakość druku jest doskonała. Polecam!"
            : "Great filament! Prints without issues, colors are vibrant, and print quality is excellent. Highly recommended!",
      },
      {
        id: 2,
        author: language === "pl" ? "Anna Nowak" : "Anna Johnson",
        rating: 4,
        date: language === "pl" ? "3 kwietnia 2023" : "April 3, 2023",
        content:
          language === "pl"
            ? "Dobry stosunek jakości do ceny. Miałam tylko drobne problemy z przyczepnością do stołu, ale po dostosowaniu ustawień wszystko działa świetnie."
            : "Good value for money. I had only minor issues with bed adhesion, but after adjusting settings, everything works great.",
      },
      {
        id: 3,
        author: language === "pl" ? "Piotr Wiśniewski" : "Peter Wilson",
        rating: 5,
        date: language === "pl" ? "18 marca 2023" : "March 18, 2023",
        content:
          language === "pl"
            ? "Używam tego filamentu od kilku miesięcy i jestem bardzo zadowolony. Drukuje się konsekwentnie, bez zacięć i zapchań dyszy."
            : "I've been using this filament for several months and I'm very satisfied. It prints consistently without jams or nozzle clogs.",
      },
    ],
    relatedProducts: [
      {
        id: "petg-filament",
        name: "PETG Filament 1.75mm",
        price: language === "pl" ? "149,99 zł" : "$34.99",
        image: "/placeholder.svg?height=300&width=300",
        rating: 4.6,
      },
      {
        id: "abs-filament",
        name: "ABS Filament 1.75mm",
        price: language === "pl" ? "139,99 zł" : "$32.99",
        image: "/placeholder.svg?height=300&width=300",
        rating: 4.4,
      },
      {
        id: "tpu-filament",
        name: "TPU Flexible Filament 1.75mm",
        price: language === "pl" ? "169,99 zł" : "$39.99",
        image: "/placeholder.svg?height=300&width=300",
        rating: 4.7,
      },
      {
        id: "resin-standard",
        name: language === "pl" ? "Żywica standardowa 500ml" : "Standard Resin 500ml",
        price: language === "pl" ? "149,99 zł" : "$34.99",
        image: "/placeholder.svg?height=300&width=300",
        rating: 4.8,
      },
    ],
  }

  const texts = {
    pl: {
      breadcrumb: {
        home: "Strona główna",
        store: "Sklep",
        category: "Filamenty",
      },
      inStock: "W magazynie",
      lowStock: "Mało sztuk",
      outOfStock: "Brak w magazynie",
      quantity: "Ilość",
      color: "Kolor",
      size: "Rozmiar",
      addToCart: "Dodaj do koszyka",
      buyNow: "Kup teraz",
      addToWishlist: "Dodaj do listy życzeń",
      share: "Udostępnij",
      shipping: "Darmowa dostawa dla zamówień powyżej 200 zł",
      tabs: {
        description: "Opis",
        specifications: "Specyfikacja",
        reviews: "Opinie",
      },
      features: "Cechy produktu",
      relatedProducts: "Podobne produkty",
      reviewsTitle: "Opinie klientów",
      writeReview: "Napisz opinię",
      yourRating: "Twoja ocena",
      yourReview: "Twoja opinia",
      submitReview: "Wyślij opinię",
      backToStore: "Powrót do sklepu",
    },
    en: {
      breadcrumb: {
        home: "Home",
        store: "Store",
        category: "Filaments",
      },
      inStock: "In Stock",
      lowStock: "Low Stock",
      outOfStock: "Out of Stock",
      quantity: "Quantity",
      color: "Color",
      size: "Size",
      addToCart: "Add to Cart",
      buyNow: "Buy Now",
      addToWishlist: "Add to Wishlist",
      share: "Share",
      shipping: "Free shipping for orders over $50",
      tabs: {
        description: "Description",
        specifications: "Specifications",
        reviews: "Reviews",
      },
      features: "Product Features",
      relatedProducts: "Related Products",
      reviewsTitle: "Customer Reviews",
      writeReview: "Write a Review",
      yourRating: "Your Rating",
      yourReview: "Your Review",
      submitReview: "Submit Review",
      backToStore: "Back to Store",
    },
  }

  const currentTexts = texts[language]

  const getStockStatus = (stock: number) => {
    if (stock > 10) {
      return {
        text: currentTexts.inStock,
        className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
      }
    } else if (stock > 0) {
      return {
        text: currentTexts.lowStock,
        className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
      }
    } else {
      return {
        text: currentTexts.outOfStock,
        className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
      }
    }
  }

  const stockStatus = getStockStatus(product.stock)

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow bg-background">
          {/* Breadcrumb */}
          <div className="bg-muted py-2">
            <div className="container px-4 md:px-6">
              <nav className="flex text-sm">
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {currentTexts.breadcrumb.home}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
                <Link href="/store" className="text-muted-foreground hover:text-foreground transition-colors">
                  {currentTexts.breadcrumb.store}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
                <Link
                  href="/store?category=filaments"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {currentTexts.breadcrumb.category}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
                <span className="text-foreground font-medium truncate">{product.name}</span>
              </nav>
            </div>
          </div>

          {/* Back to Store Button (Mobile) */}
          <div className="container px-4 md:px-6 py-4 md:hidden">
            <Link href="/store">
              <Button variant="outline" size="sm" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {currentTexts.backToStore}
              </Button>
            </Link>
          </div>

          {/* Product Section */}
          <section className="py-6 md:py-12">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Product Images */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  {/* Main Image */}
                  <div className="relative aspect-square overflow-hidden rounded-lg border bg-white dark:bg-gray-950">
                    <Image
                      src={product.images[selectedImage] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Thumbnails */}
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={cn(
                          "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border",
                          selectedImage === index
                            ? "border-[#dfae4f] ring-2 ring-[#dfae4f]"
                            : "border-muted hover:border-[#dfae4f]",
                        )}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${product.name} thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Product Details */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#00330a] dark:text-[#dfae4f]">
                      {product.name}
                    </h1>
                    <div className="flex items-center mt-2 space-x-4">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating)
                                ? "text-[#dfae4f] fill-[#dfae4f]"
                                : i < product.rating
                                  ? "text-[#dfae4f] fill-[#dfae4f]"
                                  : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.reviewCount} {language === "pl" ? "opinii" : "reviews"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-baseline space-x-3">
                    <span className="text-3xl font-bold text-[#00330a] dark:text-[#dfae4f]">{product.price}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
                          {product.discount} {language === "pl" ? "taniej" : "off"}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${stockStatus.className}`}>
                      {stockStatus.text}
                    </span>
                    <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
                  </div>

                  <p className="text-muted-foreground">{product.description}</p>

                  <div className="space-y-4 pt-4 border-t">
                    {/* Color Selection */}
                    <div>
                      <Label htmlFor="color" className="text-base font-medium">
                        {currentTexts.color}
                      </Label>
                      <div className="flex flex-wrap gap-3 mt-2">
                        {product.colors.map((color) => (
                          <button
                            key={color.value}
                            onClick={() => setSelectedColor(color.value)}
                            className={cn(
                              "relative h-10 px-3 rounded-md border flex items-center justify-center text-sm transition-colors",
                              selectedColor === color.value
                                ? "border-[#dfae4f] bg-[#dfae4f]/10 text-[#00330a] dark:text-[#dfae4f]"
                                : "border-muted hover:border-[#dfae4f]",
                            )}
                          >
                            {selectedColor === color.value && <Check className="h-4 w-4 mr-2 text-[#dfae4f]" />}
                            {color.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Size Selection */}
                    <div>
                      <Label htmlFor="size" className="text-base font-medium">
                        {currentTexts.size}
                      </Label>
                      <RadioGroup
                        value={selectedSize}
                        onValueChange={setSelectedSize}
                        className="flex flex-wrap gap-3 mt-2"
                      >
                        {product.sizes.map((size) => (
                          <div key={size.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={size.value} id={`size-${size.value}`} className="peer sr-only" />
                            <Label
                              htmlFor={`size-${size.value}`}
                              className={cn(
                                "flex h-10 px-3 rounded-md border items-center justify-center text-sm transition-colors cursor-pointer",
                                selectedSize === size.value
                                  ? "border-[#dfae4f] bg-[#dfae4f]/10 text-[#00330a] dark:text-[#dfae4f]"
                                  : "border-muted hover:border-[#dfae4f] peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-[#dfae4f]",
                              )}
                            >
                              {size.name}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Quantity */}
                    <div>
                      <Label htmlFor="quantity" className="text-base font-medium">
                        {currentTexts.quantity}
                      </Label>
                      <div className="flex items-center mt-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={decrementQuantity}
                          disabled={quantity <= 1}
                          className="h-10 w-10 rounded-r-none"
                        >
                          -
                        </Button>
                        <Input
                          type="number"
                          id="quantity"
                          min="1"
                          value={quantity}
                          onChange={handleQuantityChange}
                          className="h-10 w-16 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={incrementQuantity}
                          className="h-10 w-10 rounded-l-none"
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button
                        className="flex-1 bg-[#00330a] hover:bg-[#004a0f] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]"
                        disabled={product.stock <= 0}
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        {currentTexts.addToCart}
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-[#dfae4f] text-[#00330a] hover:bg-[#dfae4f]/10 dark:text-[#dfae4f]"
                        disabled={product.stock <= 0}
                      >
                        {currentTexts.buyNow}
                      </Button>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Heart className="h-4 w-4 mr-2" />
                        {currentTexts.addToWishlist}
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Share2 className="h-4 w-4 mr-2" />
                        {currentTexts.share}
                      </Button>
                    </div>

                    {/* Shipping Info */}
                    <div className="flex items-center text-sm text-muted-foreground pt-2">
                      <Truck className="h-4 w-4 mr-2 text-[#dfae4f]" />
                      {currentTexts.shipping}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-medium mb-3">{currentTexts.features}</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 mr-2 text-[#dfae4f] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Product Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12"
              >
                <Tabs defaultValue="description">
                  <TabsList className="w-full border-b justify-start rounded-none h-auto p-0 bg-transparent">
                    <TabsTrigger
                      value="description"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#dfae4f] data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base"
                    >
                      {currentTexts.tabs.description}
                    </TabsTrigger>
                    <TabsTrigger
                      value="specifications"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#dfae4f] data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base"
                    >
                      {currentTexts.tabs.specifications}
                    </TabsTrigger>
                    <TabsTrigger
                      value="reviews"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#dfae4f] data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-base"
                    >
                      {currentTexts.tabs.reviews}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="pt-6">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>{product.longDescription}</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="specifications" className="pt-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <tbody>
                          {product.specifications.map((spec, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                              <td className="py-3 px-4 font-medium">{spec.name}</td>
                              <td className="py-3 px-4">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="reviews" className="pt-6">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">{currentTexts.reviewsTitle}</h3>
                        <div className="space-y-6">
                          {product.reviews.map((review) => (
                            <div key={review.id} className="border-b pb-6 last:border-0">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">{review.author}</p>
                                  <div className="flex items-center mt-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < review.rating ? "text-[#dfae4f] fill-[#dfae4f]" : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <p className="mt-3 text-muted-foreground">{review.content}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Write a Review Form */}
                      <div className="border rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-4">{currentTexts.writeReview}</h3>
                        <form className="space-y-4">
                          <div>
                            <Label htmlFor="rating" className="block mb-2">
                              {currentTexts.yourRating}
                            </Label>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <button key={i} type="button" className="text-gray-300 hover:text-[#dfae4f]">
                                  <Star className="h-6 w-6" />
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="review" className="block mb-2">
                              {currentTexts.yourReview}
                            </Label>
                            <Textarea
                              id="review"
                              rows={4}
                              placeholder={
                                language === "pl" ? "Napisz swoją opinię tutaj..." : "Write your review here..."
                              }
                            />
                          </div>
                          <Button className="bg-[#00330a] hover:bg-[#004a0f] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]">
                            {currentTexts.submitReview}
                          </Button>
                        </form>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </motion.div>

              {/* Related Products */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-16"
              >
                <h2 className="text-2xl font-bold mb-6 text-[#00330a] dark:text-[#dfae4f]">
                  {currentTexts.relatedProducts}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.relatedProducts.map((relatedProduct) => (
                    <Card key={relatedProduct.id} className="overflow-hidden group">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium truncate">{relatedProduct.name}</h3>
                        <div className="flex items-center mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(relatedProduct.rating)
                                  ? "text-[#dfae4f] fill-[#dfae4f]"
                                  : i < relatedProduct.rating
                                    ? "text-[#dfae4f] fill-[#dfae4f]"
                                    : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-1 text-xs text-muted-foreground">{relatedProduct.rating}</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <p className="font-bold">{relatedProduct.price}</p>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      <Footer language={language} />
    </>
  )
}
