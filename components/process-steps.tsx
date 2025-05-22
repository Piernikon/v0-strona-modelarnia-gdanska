import { FileText, Printer, Package } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      title: "Submit Your Request",
      description: "Share your project details, specifications, and requirements with us through our contact form.",
      icon: <FileText className="h-12 w-12 text-[#dfae4f]" />,
    },
    {
      title: "Production Process",
      description:
        "Our experts work on your project using state-of-the-art equipment for 3D printing, laser cutting, or model painting.",
      icon: <Printer className="h-12 w-12 text-[#dfae4f]" />,
    },
    {
      title: "Delivery & Satisfaction",
      description: "Receive your completed project with our quality guarantee. We ensure your complete satisfaction.",
      icon: <Package className="h-12 w-12 text-[#dfae4f]" />,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-[#1e1e1e] dark:bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our simple three-step process to bring your ideas to life
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00330a] dark:bg-[#001a05]">
                {step.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
