import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GuidePage() {
  const guideTopics = [
    {
      id: "basics",
      title: "3D Printing Basics",
      content: `
        <h3>What is 3D Printing?</h3>
        <p>3D printing is an additive manufacturing process that creates three-dimensional objects by depositing materials layer by layer according to a digital model.</p>
        
        <h3>Common 3D Printing Technologies</h3>
        <ul>
          <li><strong>FDM (Fused Deposition Modeling)</strong>: Melts and extrudes plastic filament layer by layer.</li>
          <li><strong>SLA (Stereolithography)</strong>: Uses a laser to cure liquid resin into solid objects.</li>
          <li><strong>SLS (Selective Laser Sintering)</strong>: Uses a laser to sinter powdered material into solid objects.</li>
        </ul>
      `,
    },
    {
      id: "materials",
      title: "3D Printing Materials",
      content: `
        <h3>Common FDM Materials</h3>
        <ul>
          <li><strong>PLA (Polylactic Acid)</strong>: Biodegradable, easy to print, good for decorative items.</li>
          <li><strong>PETG (Polyethylene Terephthalate Glycol)</strong>: Durable, chemical resistant, good for functional parts.</li>
          <li><strong>ABS (Acrylonitrile Butadiene Styrene)</strong>: Heat resistant, strong, good for mechanical parts.</li>
          <li><strong>TPU (Thermoplastic Polyurethane)</strong>: Flexible, elastic, good for parts that need to bend.</li>
        </ul>
        
        <h3>Common Resin Types</h3>
        <ul>
          <li><strong>Standard Resin</strong>: Good detail, somewhat brittle.</li>
          <li><strong>Tough Resin</strong>: More durable, less brittle than standard resin.</li>
          <li><strong>Flexible Resin</strong>: Bendable and elastic properties.</li>
          <li><strong>Dental/Medical Resin</strong>: Biocompatible for specific applications.</li>
        </ul>
      `,
    },
    {
      id: "design",
      title: "Designing for 3D Printing",
      content: `
        <h3>Design Considerations</h3>
        <ul>
          <li><strong>Wall Thickness</strong>: Minimum 1.2mm for FDM, 0.8mm for SLA.</li>
          <li><strong>Overhangs</strong>: Keep angles less than 45° or use supports.</li>
          <li><strong>Tolerances</strong>: Allow 0.1-0.2mm clearance for moving parts.</li>
          <li><strong>Support Structures</strong>: Design to minimize the need for supports.</li>
        </ul>
        
        <h3>Common Design Software</h3>
        <ul>
          <li><strong>Tinkercad</strong>: Free, browser-based, good for beginners.</li>
          <li><strong>Fusion 360</strong>: Powerful CAD software with free options for hobbyists.</li>
          <li><strong>Blender</strong>: Free, open-source, great for organic shapes.</li>
          <li><strong>SolidWorks</strong>: Professional CAD software for engineering.</li>
        </ul>
      `,
    },
    {
      id: "file-preparation",
      title: "File Preparation",
      content: `
        <h3>File Formats</h3>
        <ul>
          <li><strong>STL</strong>: Standard Tessellation Language, most common format.</li>
          <li><strong>OBJ</strong>: Can include color information.</li>
          <li><strong>3MF</strong>: Newer format with more features than STL.</li>
        </ul>
        
        <h3>Slicing Software</h3>
        <p>Slicing software converts 3D models into instructions (G-code) for the printer. Common options include:</p>
        <ul>
          <li><strong>Cura</strong>: Free, user-friendly, works with most FDM printers.</li>
          <li><strong>PrusaSlicer</strong>: Free, powerful features, optimized for Prusa printers.</li>
          <li><strong>Chitubox</strong>: Popular for resin printing.</li>
        </ul>
      `,
    },
    {
      id: "post-processing",
      title: "Post-Processing Techniques",
      content: `
        <h3>FDM Post-Processing</h3>
        <ul>
          <li><strong>Support Removal</strong>: Carefully remove support structures.</li>
          <li><strong>Sanding</strong>: Smooth surfaces with progressively finer sandpaper.</li>
          <li><strong>Filling</strong>: Use filler primer or putty to fill layer lines.</li>
          <li><strong>Painting</strong>: Apply primer before painting for best results.</li>
        </ul>
        
        <h3>Resin Post-Processing</h3>
        <ul>
          <li><strong>Washing</strong>: Clean uncured resin with isopropyl alcohol.</li>
          <li><strong>Curing</strong>: UV post-cure to achieve full material properties.</li>
          <li><strong>Support Removal</strong>: Carefully remove supports to avoid marks.</li>
          <li><strong>Sanding</strong>: Light sanding to remove support marks if needed.</li>
        </ul>
      `,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-64 bg-[#00330a] dark:bg-[#001a05]">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 h-full flex flex-col justify-center px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">3D Printing Guide</h1>
          <p className="text-zinc-200 mt-2 max-w-xl">
            Learn about 3D printing technologies, materials, design considerations, and more.
          </p>
        </div>
      </div>

      <main className="flex-grow bg-background">
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    Welcome to our comprehensive guide to 3D printing. Whether you're new to the world of 3D printing or
                    looking to expand your knowledge, this guide will help you understand the fundamentals and advanced
                    concepts of this exciting technology.
                  </p>

                  <div className="my-8">
                    <Accordion type="single" collapsible className="w-full">
                      {guideTopics.map((topic) => (
                        <AccordionItem key={topic.id} value={topic.id}>
                          <AccordionTrigger className="text-lg font-medium text-[#00330a] dark:text-[#dfae4f]">
                            {topic.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div
                              dangerouslySetInnerHTML={{ __html: topic.content }}
                              className="prose dark:prose-invert"
                            />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>

                  <h2 className="text-2xl font-bold mt-8 mb-4 text-[#00330a] dark:text-[#dfae4f]">
                    Ready to Start Your 3D Printing Project?
                  </h2>
                  <p>
                    Now that you understand the basics of 3D printing, you might be ready to start your own project. At
                    Modelarnia Gdańska, we offer professional 3D printing services to bring your ideas to life.
                  </p>

                  <div className="mt-6">
                    <Link href="/#contact">
                      <Button className="bg-[#dfae4f] text-[#1e1e1e] hover:bg-[#c99c45]">Contact Us for a Quote</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border p-6 shadow-sm dark:border-zinc-800">
                  <h3 className="text-xl font-bold mb-4 text-[#00330a] dark:text-[#dfae4f]">
                    Our 3D Printing Services
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#dfae4f]"></div>
                      <span>FDM Printing (PLA, PETG, ABS, TPU)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#dfae4f]"></div>
                      <span>SLA Resin Printing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#dfae4f]"></div>
                      <span>3D Model Design</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#dfae4f]"></div>
                      <span>Post-Processing & Finishing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#dfae4f]"></div>
                      <span>Prototyping & Small Batch Production</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link href="/services/druk-3d">
                      <Button
                        variant="outline"
                        className="w-full border-[#dfae4f] text-[#00330a] hover:bg-[#dfae4f]/10 dark:text-[#dfae4f]"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg border p-6 shadow-sm dark:border-zinc-800">
                  <h3 className="text-xl font-bold mb-4 text-[#00330a] dark:text-[#dfae4f]">Related Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/projects"
                        className="text-[#00330a] hover:text-[#dfae4f] dark:text-[#dfae4f] dark:hover:text-[#c99c45] font-medium"
                      >
                        View Our 3D Printing Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-[#00330a] hover:text-[#dfae4f] dark:text-[#dfae4f] dark:hover:text-[#c99c45] font-medium"
                      >
                        3D Printing Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#faq"
                        className="text-[#00330a] hover:text-[#dfae4f] dark:text-[#dfae4f] dark:hover:text-[#c99c45] font-medium"
                      >
                        Frequently Asked Questions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
