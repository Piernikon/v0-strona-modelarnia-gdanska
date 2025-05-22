"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Target, Lightbulb, Heart } from "lucide-react"

interface AboutUsSectionProps {
  language?: "pl" | "en"
}

export default function AboutUsSection({ language = "pl" }: AboutUsSectionProps) {
  const texts = {
    pl: {
      title: "O Nas",
      subtitle: "Poznaj Modelarnię Gdańską",
      description1:
        "Modelarnia Gdańska to profesjonalne studio modelarskie założone w 2015 roku przez grupę pasjonatów druku 3D i modelarstwa. Nasza firma specjalizuje się w wysokiej jakości usługach druku 3D, cięcia laserowego oraz profesjonalnego malowania modeli.",
      description2:
        "Nasz zespół składa się z doświadczonych specjalistów, którzy łączą wiedzę techniczną z artystycznym podejściem. Każdy projekt traktujemy indywidualnie, dbając o najdrobniejsze szczegóły i najwyższą jakość wykonania.",
      description3:
        "Dysponujemy nowoczesnym parkiem maszynowym, który obejmuje precyzyjne drukarki 3D (FDM i SLA), profesjonalne plotery laserowe oraz specjalistyczne stanowiska do malowania i wykańczania modeli.",
      values: "Nasze wartości",
      value1: "Jakość",
      value1Desc: "Dbamy o najwyższą jakość każdego elementu, który opuszcza naszą pracownię.",
      value2: "Precyzja",
      value2Desc: "Skupiamy się na detalach, które czynią każdy model wyjątkowym.",
      value3: "Innowacyjność",
      value3Desc: "Stale rozwijamy nasze umiejętności i wprowadzamy nowe technologie.",
      value4: "Pasja",
      value4Desc: "Kochamy to, co robimy, i wkładamy serce w każdy projekt.",
    },
    en: {
      title: "About Us",
      subtitle: "Meet Modelarnia Gdańska",
      description1:
        "Modelarnia Gdańska is a professional modeling studio founded in 2015 by a group of 3D printing and modeling enthusiasts. Our company specializes in high-quality 3D printing services, laser cutting, and professional model painting.",
      description2:
        "Our team consists of experienced specialists who combine technical knowledge with an artistic approach. We treat each project individually, paying attention to the smallest details and the highest quality of workmanship.",
      description3:
        "We have modern machinery, including precise 3D printers (FDM and SLA), professional laser plotters, and specialized stations for painting and finishing models.",
      values: "Our Values",
      value1: "Quality",
      value1Desc: "We ensure the highest quality of every item that leaves our workshop.",
      value2: "Precision",
      value2Desc: "We focus on details that make each model unique.",
      value3: "Innovation",
      value3Desc: "We constantly develop our skills and introduce new technologies.",
      value4: "Passion",
      value4Desc: "We love what we do and put our heart into every project.",
    },
  }

  const currentTexts = texts[language]

  return (
    <section
      id="about"
      className="w-full py-12 bg-gradient-to-b from-background to-background/80 flex items-center relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#00330a] dark:border-[#dfae4f] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#00330a] dark:border-[#dfae4f] opacity-30"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Centered Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00330a] dark:text-[#dfae4f]">
              {currentTexts.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {currentTexts.subtitle}
            </p>
            <div className="h-1 w-20 bg-[#00330a] dark:bg-[#dfae4f] rounded-full mx-auto mt-2"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Enhanced Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -top-3 -left-3 right-3 bottom-3 bg-[#00330a]/5 dark:bg-[#dfae4f]/5 rounded-lg"></div>
            <div className="relative h-[320px] rounded-lg overflow-hidden shadow-lg border border-[#00330a]/10 dark:border-[#dfae4f]/10">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Modelarnia Gdańska"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#00330a]/10 dark:bg-[#dfae4f]/10 rounded-full"></div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">{currentTexts.description1}</p>

            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="bg-background p-3 rounded-lg shadow-sm border border-[#00330a]/10 dark:border-[#dfae4f]/10">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-[#00330a] dark:text-[#dfae4f]" />
                  <span className="font-medium text-[#00330a] dark:text-[#dfae4f]">{currentTexts.value1}</span>
                </div>
                <p className="text-xs text-muted-foreground">{currentTexts.value1Desc}</p>
              </div>
              <div className="bg-background p-3 rounded-lg shadow-sm border border-[#00330a]/10 dark:border-[#dfae4f]/10">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-4 h-4 text-[#00330a] dark:text-[#dfae4f]" />
                  <span className="font-medium text-[#00330a] dark:text-[#dfae4f]">{currentTexts.value2}</span>
                </div>
                <p className="text-xs text-muted-foreground">{currentTexts.value2Desc}</p>
              </div>
              <div className="bg-background p-3 rounded-lg shadow-sm border border-[#00330a]/10 dark:border-[#dfae4f]/10">
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="w-4 h-4 text-[#00330a] dark:text-[#dfae4f]" />
                  <span className="font-medium text-[#00330a] dark:text-[#dfae4f]">{currentTexts.value3}</span>
                </div>
                <p className="text-xs text-muted-foreground">{currentTexts.value3Desc}</p>
              </div>
              <div className="bg-background p-3 rounded-lg shadow-sm border border-[#00330a]/10 dark:border-[#dfae4f]/10">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-[#00330a] dark:text-[#dfae4f]" />
                  <span className="font-medium text-[#00330a] dark:text-[#dfae4f]">{currentTexts.value4}</span>
                </div>
                <p className="text-xs text-muted-foreground">{currentTexts.value4Desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
