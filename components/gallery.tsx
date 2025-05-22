import Image from "next/image"

export default function Gallery() {
  const galleryItems = [
    {
      title: "3D Printed Miniature",
      src: "/placeholder.svg?height=300&width=400",
      alt: "3D printed miniature figure",
    },
    {
      title: "Laser Cut Design",
      src: "/placeholder.svg?height=300&width=400",
      alt: "Intricate laser cut wooden design",
    },
    {
      title: "Painted Model",
      src: "/placeholder.svg?height=300&width=400",
      alt: "Professionally painted model with detailed finish",
    },
    {
      title: "Architectural Model",
      src: "/placeholder.svg?height=300&width=400",
      alt: "3D printed architectural model",
    },
    {
      title: "Custom Game Pieces",
      src: "/placeholder.svg?height=300&width=400",
      alt: "Custom designed and painted game pieces",
    },
    {
      title: "Prototype Design",
      src: "/placeholder.svg?height=300&width=400",
      alt: "Prototype design for a product",
    },
  ]

  return (
    <section id="gallery" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00330a] dark:text-[#dfae4f]">
              Our Work
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse through our portfolio of completed projects
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 mt-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg dark:bg-[#1e1e1e]/80 dark:shadow-none dark:border dark:border-[#dfae4f]/30"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={400}
                height={300}
                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="bg-white dark:bg-transparent p-4">
                <h3 className="text-lg font-medium text-[#00330a] dark:text-[#dfae4f]">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
