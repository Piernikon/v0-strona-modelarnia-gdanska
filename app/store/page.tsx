"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Filter, Search, SlidersHorizontal, Star } from "lucide-react"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

interface StorePageProps {
  language?: "pl" | "en"
}

export default function StorePage({ language = "pl" }: StorePageProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const texts = {
    pl: {
      title: "Sklep",
      description: "Przeglądaj nasze produkty i materiały",
      categories: {
        all: "Wszystkie",
        filaments: "Filamenty",
        resins: "Żywice",
        accessories: "Akcesoria",
        tools: "Narzędzia",
      },
      search: "Szukaj produktów...",
      filter: "Filtruj",
      sort: "Sortuj według",
      addToCart: "Dodaj do koszyka",
      viewDetails: "Zobacz szczegóły",
      price: "Cena",
      inStock: "W magazynie",
      outOfStock: "Brak w magazynie",
    },
    en: {
      title: "Store",
      description: "Browse our products and materials",
      categories: {
        all: "All",
        filaments: "Filaments",
        resins: "Resins",
        accessories: "Accessories",
        tools: "Tools",
      },
      search: "Search products...",
      filter: "Filter",
      sort: "Sort by",
      addToCart: "Add to Cart",
      viewDetails: "View Details",
      price: "Price",
      inStock: "In Stock",
      outOfStock: "Out of Stock",
    },
  }

  const products = [
    {
      id: 1,
      name: language === "pl" ? "PLA Filament 1.75mm" : "PLA Filament 1.75mm",
      category: "filaments",
      price: language === "pl" ? "89,99 zł" : "$19.99",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      inStock: true,
    },
    {
      id: 2,
      name: language === "pl" ? "PETG Filament 1.75mm" : "PETG Filament 1.75mm",
      category: "filaments",
      price: language === "pl" ? "109,99 zł" : "$24.99",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 3,
      name: language === "pl" ? "Żywica standardowa 500ml" : "Standard Resin 500ml",
      category: "resins",
      price: language === "pl" ? "149,99 zł" : "$34.99",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 4,
      name: language === "pl" ? "Żywica elastyczna 500ml" : "Flexible Resin 500ml",
      category: "resins",
      price: language === "pl" ? "199,99 zł" : "$44.99",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      inStock: false,
    },
    {
      id: 5,
      name: language === "pl" ? "Zestaw narzędzi do druku 3D" : "3D Printing Tool Kit",
      category: "tools",
      price: language === "pl" ? "129,99 zł" : "$29.99",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 6,
      name: language === "pl" ? "Płyta do druku 235x235mm" : "Build Plate 235x235mm",
      category: "accessories",
      price: language === "pl" ? "79,99 zł" : "$17.99",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.4,
      inStock: true,
    },
    {
      id: 7,
      name: language === "pl" ? "ABS Filament 1.75mm" : "ABS Filament 1.75mm",
      category: "filaments",
      price: language === "pl" ? "99,99 zł" : "$22.99",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.3,
      inStock: true,
    },
    {
      id: 8,
      name: language === "pl" ? "Dysza 0.4mm" : "Nozzle 0.4mm",
      category: "accessories",
      price: language === "pl" ? "29,99 zł" : "$6.99",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      inStock: true,
    },
  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="relative h-64 bg-[#00330a] dark:bg-[#001a05]">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container relative z-10 h-full flex flex-col justify-center px-4 md:px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              {texts[language].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-200 mt-2 max-w-xl"
            >
              {texts[language].description}
            </motion.p>
          </div>
        </div>

        <main className="flex-grow bg-background">
          <section className="py-12">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Search and Filters */}
                <div className="w-full md:w-1/4 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input placeholder={texts[language].search} className="pl-10" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{texts[language].categories.all}</h3>
                      <Filter className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <div className="space-y-2">
                      {Object.entries(texts[language].categories).map(([key, value]) => (
                        <button
                          key={key}
                          onClick={() => setActiveCategory(key)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                            activeCategory === key
                              ? "bg-[#00330a] text-white dark:bg-[#dfae4f] dark:text-[#1e1e1e]"
                              : "hover:bg-muted"
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{texts[language].price}</h3>
                        <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="mt-4 flex items-center space-x-4">
                        <div className="grid flex-1 items-center gap-1.5">
                          <Label htmlFor="price-min">Min</Label>
                          <Input id="price-min" defaultValue="0" />
                        </div>
                        <div className="grid flex-1 items-center gap-1.5">
                          <Label htmlFor="price-max">Max</Label>
                          <Input id="price-max" defaultValue="1000" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Products Grid */}
                <div className="w-full md:w-3/4">
                  <Tabs defaultValue="grid" className="mb-8">
                    <div className="flex items-center justify-between">
                      <TabsList>
                        <TabsTrigger value="grid">
                          <div className="grid grid-cols-3 gap-0.5 h-4 w-4 mr-2" />
                          Grid
                        </TabsTrigger>
                        <TabsTrigger value="list">
                          <div className="flex flex-col gap-0.5 h-4 w-4 mr-2">
                            <div className="h-0.5 w-full bg-current" />
                            <div className="h-0.5 w-full bg-current" />
                            <div className="h-0.5 w-full bg-current" />
                          </div>
                          List
                        </TabsTrigger>
                      </TabsList>
                      <select className="text-sm border rounded-md px-2 py-1">
                        <option>{texts[language].sort}</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Rating: High to Low</option>
                      </select>
                    </div>

                    <TabsContent value="grid" className="mt-6">
                      <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      >
                        {filteredProducts.map((product) => (
                          <motion.div key={product.id} variants={item}>
                            <Card className="h-full flex flex-col overflow-hidden group">
                              <div className="relative aspect-square overflow-hidden">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                              <CardHeader className="p-4">
                                <CardTitle className="text-lg">{product.name}</CardTitle>
                                <div className="flex items-center mt-1">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
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
                              </CardHeader>
                              <CardContent className="p-4 pt-0 flex-grow">
                                <div className="flex justify-between items-center">
                                  <p className="font-bold text-lg">{product.price}</p>
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full ${product.inStock ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"}`}
                                  >
                                    {product.inStock ? texts[language].inStock : texts[language].outOfStock}
                                  </span>
                                </div>
                              </CardContent>
                              <CardFooter className="p-4 pt-0 flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1">
                                  {texts[language].viewDetails}
                                </Button>
                                <Button
                                  size="sm"
                                  className="flex-1 bg-[#00330a] hover:bg-[#004a0f] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]"
                                  disabled={!product.inStock}
                                >
                                  <ShoppingCart className="h-4 w-4 mr-2" />
                                  {texts[language].addToCart}
                                </Button>
                              </CardFooter>
                            </Card>
                          </motion.div>
                        ))}
                      </motion.div>
                    </TabsContent>

                    <TabsContent value="list" className="mt-6">
                      <div className="space-y-4">
                        {filteredProducts.map((product) => (
                          <Card key={product.id} className="overflow-hidden">
                            <div className="flex flex-col sm:flex-row">
                              <div className="relative w-full sm:w-48 h-48">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex-1 p-4 flex flex-col">
                                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                                <div className="flex items-center mb-4">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
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
                                <div className="flex-grow"></div>
                                <div className="flex justify-between items-center mt-4">
                                  <p className="font-bold text-lg">{product.price}</p>
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full ${product.inStock ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"}`}
                                  >
                                    {product.inStock ? texts[language].inStock : texts[language].outOfStock}
                                  </span>
                                </div>
                                <div className="flex gap-2 mt-4">
                                  <Button variant="outline" size="sm" className="flex-1">
                                    {texts[language].viewDetails}
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="flex-1 bg-[#00330a] hover:bg-[#004a0f] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]"
                                    disabled={!product.inStock}
                                  >
                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                    {texts[language].addToCart}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer language={language} />
    </>
  )
}
