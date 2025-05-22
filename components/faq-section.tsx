"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "What 3D printing technologies do you offer?",
      answer:
        "We offer both FDM (Fused Deposition Modeling) and SLA (Stereolithography) 3D printing technologies. FDM is great for functional parts and prototypes, while SLA provides higher detail for miniatures and intricate models.",
    },
    {
      question: "What materials can you print with?",
      answer:
        "We can print with a variety of materials including PLA, PETG, ABS, TPU, and various resins. Each material has different properties suitable for different applications.",
    },
    {
      question: "How long does it take to complete a 3D printing order?",
      answer:
        "Turnaround time depends on the complexity, size, and quantity of the models. Simple prints can be completed within 1-2 days, while more complex projects may take up to a week. We'll provide you with an estimated timeline when you place your order.",
    },
    {
      question: "What file formats do you accept for 3D printing?",
      answer:
        "We accept STL, OBJ, and 3MF files for 3D printing. If you have a different format, please contact us to see if we can accommodate it.",
    },
    {
      question: "Do you offer design services?",
      answer:
        "Yes, we offer design services for clients who need help creating 3D models. Our team can work with you to bring your ideas to life, whether you need a complete design from scratch or modifications to an existing model.",
    },
    {
      question: "What materials can you laser cut?",
      answer:
        "We can laser cut a variety of materials including wood, acrylic, cardboard, paper, leather, and certain plastics. The maximum thickness depends on the material, but generally up to 8mm.",
    },
    {
      question: "How detailed can your model painting be?",
      answer:
        "Our professional painters can achieve very high levels of detail, from basic tabletop quality to display-quality miniatures with advanced techniques like layering, wet blending, and object source lighting.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00330a] dark:text-[#dfae4f]">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our services
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
