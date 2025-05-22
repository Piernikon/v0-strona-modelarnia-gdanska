import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
  const categories = ["All", "3D Printing", "Laser Cutting", "Model Painting"]

  const portfolioItems = [
    {
      title: "Architectural Model",
      slug: "architectural-model",
      category: "3D Printing",
      description: "Detailed architectural model of a modern building complex printed with high precision.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Custom Game Pieces",
      slug: "custom-game-pieces",
      category: "3D Printing",
      description: "Set of custom designed and printed game pieces for a board game enthusiast.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Decorative Wall Art",
      slug: "decorative-wall-art",
      category: "Laser Cutting",
      description: "Intricate laser cut wooden wall art with geometric patterns.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Fantasy Miniature",
      slug: "fantasy-miniature",
      category: "Model Painting",
      description: "Hand-painted fantasy miniature with detailed color work and weathering effects.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Custom Signage",
      slug: "custom-signage",
      category: "Laser Cutting",
      description: "Custom business signage with precision cut logo and lettering.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Sci-Fi Character",
      slug: "sci-fi-character",
      category: "Model Painting",
      description: "Professionally painted sci-fi character with custom color scheme.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Mechanical Prototype",
      slug: "mechanical-prototype",
      category: "3D Printing",
      description: "Functional mechanical prototype printed with engineering-grade materials.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Jewelry Designs",
      slug: "jewelry-designs",
      category: "Laser Cutting",
      description: "Collection of laser cut jewelry pieces with intricate patterns.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative py-24 bg-[#00330a] dark:bg-[#001a05] text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Our Portfolio</h1>
          <p className="mt-4 mx-auto max-w-[700px] text-zinc-200 md:text-xl text-center">
            Explore our past projects and see the quality of our work
          </p>
        </div>
      </div>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  index === 0
                    ? "bg-[#00330a] dark:bg-[#dfae4f] text-white dark:text-[#1e1e1e]"
                    : "bg-muted text-muted-foreground hover:bg-[#00330a]/10 dark:hover:bg-[#dfae4f]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Link
                key={index}
                href={`/projects/${item.slug}`}
                className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md dark:border-[#dfae4f]/20"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-medium text-white bg-[#dfae4f] px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#00330a] dark:text-[#dfae4f] group-hover:text-[#dfae4f] dark:group-hover:text-[#c99c45] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
