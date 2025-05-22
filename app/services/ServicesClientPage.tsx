"use client"

import Link from "next/link"
import { PrinterIcon as Printer3D, Scissors, PaintBucket, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ServicesClientPage() {
  const services = [
    {
      id: "3d-printing",
      title: "Druk 3D",
      description:
        "Wysokiej jakości usługi druku 3D z różnymi materiałami i wykończeniami do prototypów, modeli i niestandardowych części.",
      icon: <Printer3D className="h-12 w-12 text-[#dfae4f]" />,
      slug: "druk-3d",
    },
    {
      id: "laser-cutting",
      title: "Cięcie laserowe",
      description:
        "Precyzyjne cięcie laserowe dla skomplikowanych projektów i wzorów na różnych materiałach, w tym drewnie, akrylu i innych.",
      icon: <Scissors className="h-12 w-12 text-[#dfae4f]" />,
      slug: "ciecie-laserowe",
    },
    {
      id: "model-painting",
      title: "Malowanie modeli",
      description:
        "Profesjonalne usługi malowania modeli z dbałością o szczegóły, ożywiające Twoje modele żywymi kolorami.",
      icon: <PaintBucket className="h-12 w-12 text-[#dfae4f]" />,
      slug: "malowanie-modeli",
    },
  ]

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
    <div className="container px-4 py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00330a] dark:text-[#dfae4f]">
            Nasze Usługi
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Oferujemy szereg profesjonalnych usług, aby urzeczywistnić Twoje pomysły. Kliknij na usługę, aby zobaczyć
            szczegóły i cennik.
          </p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={item}>
            <Link href={`/services/${service.slug}`} className="block h-full">
              <Card className="border-2 border-[#dfae4f]/20 shadow-md dark:border-[#dfae4f]/30 dark:bg-[#1e1e1e]/80 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-[#dfae4f]/50 hover:scale-[1.02]">
                <CardHeader className="pb-2 pt-6 text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-[#00330a] dark:text-[#dfae4f]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <CardDescription className="text-muted-foreground dark:text-zinc-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center pt-0 pb-6">
                  <Button
                    variant="outline"
                    className="border-[#dfae4f] text-[#00330a] hover:bg-[#dfae4f]/10 dark:text-[#dfae4f] dark:hover:bg-[#dfae4f]/10 group"
                  >
                    Zobacz szczegóły i cennik{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
