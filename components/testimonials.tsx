"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface TestimonialsProps {
  language?: "pl" | "en"
}

export default function Testimonials({ language = "pl" }: TestimonialsProps) {
  const testimonials = {
    pl: [
      {
        id: 1,
        name: "Jan Kowalski",
        role: "Architekt",
        content:
          "Modelarnia Gdańska dostarczyła wyjątkową jakość mojego modelu architektonicznego. Dbałość o szczegóły była imponująca, a zespół był profesjonalny przez cały proces.",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Anna Nowak",
        role: "Projektant gier",
        content:
          "Korzystam z ich usług druku 3D do prototypów moich gier planszowych i wyniki są zawsze perfekcyjne. Szybka realizacja i świetna komunikacja.",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 3,
        name: "Piotr Wiśniewski",
        role: "Hobbysta",
        content:
          "Usługa malowania modeli jest najwyższej klasy. Ożywili moje miniatury niesamowitymi detalami i żywymi kolorami. Gorąco polecam!",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 4,
        name: "Magdalena Lewandowska",
        role: "Projektant produktu",
        content:
          "Ich usługa cięcia laserowego jest precyzyjna i niezawodna. Korzystam z Modelarni Gdańskiej do wszystkich moich prototypów produktów i nigdy mnie nie zawiedli.",
        avatar: "/placeholder.svg?height=100&width=100",
      },
    ],
    en: [
      {
        id: 1,
        name: "John Smith",
        role: "Architect",
        content:
          "Modelarnia Gdańska delivered exceptional quality on my architectural model. The attention to detail was impressive, and the team was professional throughout the entire process.",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Anna Johnson",
        role: "Game Designer",
        content:
          "I've been using their 3D printing services for my board game prototypes, and the results are always perfect. Fast turnaround and great communication.",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 3,
        name: "Peter Wilson",
        role: "Hobbyist",
        content:
          "The model painting service is top-notch. They brought my miniatures to life with incredible detail and vibrant colors. Highly recommended!",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 4,
        name: "Maggie Lewis",
        role: "Product Designer",
        content:
          "Their laser cutting service is precise and reliable. I've been using Modelarnia Gdańska for all my product prototypes, and they never disappoint.",
        avatar: "/placeholder.svg?height=100&width=100",
      },
    ],
  }

  const texts = {
    pl: {
      title: "Opinie Klientów",
      description: "Co nasi klienci mówią o naszych usługach",
    },
    en: {
      title: "Client Opinions",
      description: "What our clients say about our services",
    },
  }

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons)
      checkScrollButtons()
      return () => scrollContainer.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="testimonials" className="w-full py-12 md:py-16 bg-[#f8f8f8] dark:bg-[#121212]">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00330a] dark:text-[#dfae4f]">
              {texts[language].title}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {texts[language].description}
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials[language].map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[300px] md:min-w-[350px] snap-center"
              >
                <Card className="border-none shadow-lg dark:bg-[#1e1e1e]/80 h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Quote className="h-8 w-8 text-[#dfae4f] mb-4" />
                      <p className="mb-6 italic">{testimonial.content}</p>
                      <div className="flex items-center mt-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-[#00330a] dark:text-[#dfae4f]">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
