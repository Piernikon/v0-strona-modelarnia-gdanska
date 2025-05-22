"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

type BackgroundType = "color" | "image" | "video"

interface HeroSectionProps {
  backgroundType?: BackgroundType
  backgroundSrc?: string
  language?: "pl" | "en"
}

export default function HeroSection({
  backgroundType = "color",
  backgroundSrc = "/placeholder.svg?height=1080&width=1920",
  language = "pl",
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const content = {
    pl: {
      title: "Modelarnia Gdańska",
      description:
        "Precyzyjny druk 3D, cięcie laserowe i profesjonalne usługi malowania modeli dla hobbystów i profesjonalistów.",
      quote: "Zamów wycenę",
      explore: "Poznaj nasze usługi",
    },
    en: {
      title: "Modelarnia Gdańska",
      description:
        "Precision 3D printing, laser cutting, and professional model painting services for hobbyists and professionals alike.",
      quote: "Get a Quote",
      explore: "Explore Services",
    },
  }

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {backgroundType === "color" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[#00330a] dark:bg-[#001a05]"
        ></motion.div>
      )}

      {backgroundType === "image" && (
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={backgroundSrc || "/placeholder.svg"}
              alt="Hero background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      )}

      {backgroundType === "video" && (
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={backgroundSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      )}

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {content[language].title}
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">{content[language].description}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-4"
          >
            <Link href="#contact">
              <Button className="bg-[#dfae4f] text-[#1e1e1e] hover:bg-[#c99c45] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]">
                {content[language].quote}
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
                {content[language].explore}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
