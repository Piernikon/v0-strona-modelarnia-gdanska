import type { Metadata } from "next"
import Link from "next/link"
import { PrinterIcon as Printer3D, Scissors, PaintBucket, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Usługi - Modelarnia Gdańska",
  description: "Profesjonalne usługi druku 3D, cięcia laserowego i malowania modeli w Gdańsku.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "druk-3d",
      title: "Druk 3D",
      description:
        "Wysokiej jakości usługi druku 3D z różnymi materiałami i wykończeniami do prototypów, modeli i niestandardowych części.",
      icon: <Printer3D className="h-12 w-12 text-[#dfae4f]" />,
    },
    {
      id: "ciecie-laserowe",
      title: "Cięcie laserowe",
      description:
        "Precyzyjne cięcie laserowe dla skomplikowanych projektów i wzorów na różnych materiałach, w tym drewnie, akrylu i innych.",
      icon: <Scissors className="h-12 w-12 text-[#dfae4f]" />,
    },
    {
      id: "malowanie-modeli",
      title: "Malowanie modeli",
      description:
        "Profesjonalne usługi malowania modeli z dbałością o szczegóły, ożywiające Twoje modele żywymi kolorami.",
      icon: <PaintBucket className="h-12 w-12 text-[#dfae4f]" />,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative py-24 bg-[#00330a] dark:bg-[#001a05] text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Nasze Usługi</h1>
          <p className="mt-4 mx-auto max-w-[700px] text-zinc-200 md:text-xl text-center">
            Oferujemy profesjonalne usługi druku 3D, cięcia laserowego i malowania modeli
          </p>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col h-full">
                <div className="p-6 bg-background border rounded-lg shadow-sm flex-1 transition-all hover:shadow-md dark:border-[#dfae4f]/20">
                  <div className="bg-[#dfae4f]/10 p-4 rounded-full w-fit mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-2 text-[#00330a] dark:text-[#dfae4f]">{service.title}</h2>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href={`/services/${service.id}`}>
                    <Button className="mt-auto bg-[#00330a] hover:bg-[#004a0f] dark:bg-[#dfae4f] dark:text-[#1e1e1e] dark:hover:bg-[#c99c45]">
                      Dowiedz się więcej
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
