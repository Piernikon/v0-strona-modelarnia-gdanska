"use client"

import { useState } from "react"
import { PrinterIcon as Printer3D, Scissors, PaintBucket, ChevronRight, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import ServiceOrderForm from "./service-order-form"

interface ServicesGridProps {
  language?: "pl" | "en"
}

export default function ServicesGrid({ language = "pl" }: ServicesGridProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentServiceDetails, setCurrentServiceDetails] = useState({
    title: "",
    details: "",
    orderTips: "",
  })

  const services = {
    pl: [
      {
        id: "3d-printing",
        title: "Druk 3D",
        description:
          "Wysokiej jakości usługi druku 3D z różnymi materiałami i wykończeniami do prototypów, modeli i niestandardowych części.",
        icon: <Printer3D className="h-12 w-12 text-[#dfae4f]" />,
        details: "Oferujemy druk 3D FDM i SLA z różnymi materiałami, w tym PLA, PETG, ABS i żywicą.",
        orderTips: "Opisz wymiary, materiał i przeznaczenie modelu. Dołącz plik STL lub OBJ, jeśli to możliwe.",
        slug: "druk-3d",
      },
      {
        id: "laser-cutting",
        title: "Cięcie laserowe",
        description:
          "Precyzyjne cięcie laserowe dla skomplikowanych projektów i wzorów na różnych materiałach, w tym drewnie, akrylu i innych.",
        icon: <Scissors className="h-12 w-12 text-[#dfae4f]" />,
        details:
          "Nasza usługa cięcia laserowego może obsługiwać materiały o grubości do 8 mm z wysoką precyzją i czystymi krawędziami.",
        orderTips:
          "Podaj rodzaj materiału, grubość i wymiary. Dołącz plik wektorowy (SVG, AI, DXF) z projektem do wycięcia.",
        slug: "ciecie-laserowe",
      },
      {
        id: "model-painting",
        title: "Malowanie modeli",
        description:
          "Profesjonalne usługi malowania modeli z dbałością o szczegóły, ożywiające Twoje modele żywymi kolorami.",
        icon: <PaintBucket className="h-12 w-12 text-[#dfae4f]" />,
        details:
          "Nasi doświadczeni artyści mogą malować miniatury, modele skalowane i inne obiekty z niezwykłą dbałością o szczegóły.",
        orderTips:
          "Opisz schemat kolorów, poziom szczegółowości i referencje. Dołącz zdjęcia podobnych modeli jako inspirację.",
        slug: "malowanie-modeli",
      },
    ],
    en: [
      {
        id: "3d-printing",
        title: "3D Printing",
        description:
          "High-quality 3D printing services with various materials and finishes for prototypes, models, and custom parts.",
        icon: <Printer3D className="h-12 w-12 text-[#dfae4f]" />,
        details: "We offer FDM and SLA 3D printing with a variety of materials including PLA, PETG, ABS, and resin.",
        orderTips:
          "Describe the dimensions, material, and purpose of the model. Attach an STL or OBJ file if possible.",
        slug: "druk-3d",
      },
      {
        id: "laser-cutting",
        title: "Laser Cutting",
        description:
          "Precision laser cutting for intricate designs and patterns on various materials including wood, acrylic, and more.",
        icon: <Scissors className="h-12 w-12 text-[#dfae4f]" />,
        details: "Our laser cutting service can handle materials up to 8mm thick with high precision and clean edges.",
        orderTips:
          "Specify the material type, thickness, and dimensions. Include a vector file (SVG, AI, DXF) with your design.",
        slug: "ciecie-laserowe",
      },
      {
        id: "model-painting",
        title: "Model Painting",
        description:
          "Professional model painting services with attention to detail, bringing your models to life with vibrant colors.",
        icon: <PaintBucket className="h-12 w-12 text-[#dfae4f]" />,
        details:
          "Our experienced artists can paint miniatures, scale models, and other objects with meticulous attention to detail.",
        orderTips:
          "Describe the color scheme, level of detail, and any references. Include photos of similar models for inspiration.",
        slug: "malowanie-modeli",
      },
    ],
  }

  const currentServices = services[language]

  const texts = {
    pl: {
      title: "Nasze Usługi",
      description: "Oferujemy szereg profesjonalnych usług, aby urzeczywistnić Twoje pomysły",
      orderService: "Zamów usługę",
      viewAll: "Zobacz szczegóły i cennik",
      viewAllServices: "Zobacz wszystkie usługi",
    },
    en: {
      title: "Our Services",
      description: "We offer a range of professional services to bring your ideas to reality",
      orderService: "Order Service",
      viewAll: "View details and pricing",
      viewAllServices: "View all services",
    },
  }

  const handleOrderService = (service: any) => {
    setCurrentServiceDetails({
      title: service.title,
      details: service.details,
      orderTips: service.orderTips,
    })
    setIsDialogOpen(true)
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8"
        >
          {currentServices.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Card className="border-2 border-[#dfae4f]/20 shadow-md dark:border-[#dfae4f]/30 dark:bg-[#1e1e1e]/80 h-full flex flex-col">
                <CardHeader className="pb-2 pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl text-[#00330a] dark:text-[#dfae4f]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <CardDescription className="text-muted-foreground dark:text-zinc-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-0 pb-6">
                  <Button
                    variant="outline"
                    className="border-[#dfae4f] text-[#00330a] hover:bg-[#dfae4f]/10 dark:text-[#dfae4f] dark:hover:bg-[#dfae4f]/10"
                    onClick={() => handleOrderService(service)}
                  >
                    {texts[language].orderService} <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href={`/services/${service.slug}`} className="w-full">
                    <Button variant="link" className="text-[#00330a] dark:text-[#dfae4f] w-full group">
                      {texts[language].viewAll}{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button className="bg-[#00330a] text-white hover:bg-[#004a0f] dark:bg-[#001a05] dark:hover:bg-[#002a0a]">
              {texts[language].viewAllServices}
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Service Order Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <ServiceOrderForm
            serviceName={currentServiceDetails.title}
            serviceDetails={currentServiceDetails.details}
            orderTips={currentServiceDetails.orderTips}
            language={language}
            onClose={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </section>
  )
}
