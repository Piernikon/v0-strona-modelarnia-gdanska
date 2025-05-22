import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would normally come from a database or CMS
const getProjectData = (slug: string) => {
  // Mock data for demonstration
  return {
    title: "Architectural Model",
    slug: "architectural-model",
    category: "3D Printing",
    date: "2023-05-15",
    author: "Team Modelarnia",
    description: "Detailed architectural model of a modern building complex printed with high precision.",
    content: `
      <p>This project involved creating a detailed architectural model for a client in the real estate development industry. The model represents a modern building complex that is planned for construction in the heart of Gdańsk.</p>
      
      <p>The client required a high level of detail to showcase the project to potential investors. We used our advanced SLA 3D printers to achieve the necessary precision for small architectural elements like balconies, railings, and decorative facades.</p>
      
      <p>The model was printed in sections and then assembled and finished by our expert team. We used a combination of painting techniques to highlight different materials that will be used in the actual building - glass, concrete, metal, and wood elements.</p>
      
      <p>The base of the model includes the surrounding landscape, including miniature trees, pathways, and even small street furniture to give a complete impression of the finished development.</p>
      
      <p>The client was extremely satisfied with the final result, which is now being used in their sales office to showcase the development to potential buyers.</p>
    `,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["Architecture", "Real Estate", "Commercial", "SLA Printing"],
    relatedProjects: [
      {
        title: "Custom Game Pieces",
        slug: "custom-game-pieces",
        category: "3D Printing",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Decorative Wall Art",
        slug: "decorative-wall-art",
        category: "Laser Cutting",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative py-24 bg-[#00330a] dark:bg-[#001a05] text-white">
        <div className="container px-4 md:px-6">
          <Link href="/projects" className="inline-flex items-center text-zinc-200 hover:text-[#dfae4f] mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
          <div className="flex flex-wrap gap-4 mt-4 text-zinc-200">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{new Date(project.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{project.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-2 h-4 w-4" />
              <span>{project.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Content */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Project Description */}
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg font-medium text-muted-foreground mb-6">{project.description}</p>
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
              </div>

              {/* Image Gallery */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-[#00330a] dark:text-[#dfae4f]">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Tags */}
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-[#00330a] dark:text-[#dfae4f]">Project Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-background rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Projects */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#00330a] dark:text-[#dfae4f]">Related Projects</h3>
                <div className="space-y-4">
                  {project.relatedProjects.map((relatedProject, index) => (
                    <Link key={index} href={`/projects/${relatedProject.slug}`} className="block group">
                      <div className="flex items-start space-x-4">
                        <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={relatedProject.image || "/placeholder.svg"}
                            alt={relatedProject.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-[#dfae4f] transition-colors">
                            {relatedProject.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{relatedProject.category}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#00330a] dark:bg-[#001a05] text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2 text-[#dfae4f]">Interested in a similar project?</h3>
                <p className="text-sm text-zinc-300 mb-4">
                  Contact us today to discuss your ideas and get a free quote.
                </p>
                <Button className="w-full bg-[#dfae4f] text-[#1e1e1e] hover:bg-[#c99c45]">
                  <Link href="/#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
