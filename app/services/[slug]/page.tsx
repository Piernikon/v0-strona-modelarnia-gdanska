"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PrinterIcon as Printer3D, Scissors, PaintBucket, ChevronRight, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import ServiceOrderForm from "@/components/service-order-form"

interface ServicePageProps {
  params: {
    slug: string
  }
}

// This would typically come from a CMS or database
const servicesData = {
  "druk-3d": {
    id: "3d-printing",
    title: "Druk 3D",
    titleEn: "3D Printing",
    description:
      "Wysokiej jakości usługi druku 3D z różnymi materiałami i wykończeniami do prototypów, modeli i niestandardowych części.",
    descriptionEn:
      "High-quality 3D printing services with various materials and finishes for prototypes, models, and custom parts.",
    icon: <Printer3D className="h-12 w-12 text-[#dfae4f]" />,
    details:
      "Oferujemy druk 3D FDM i SLA z różnymi materiałami, w tym PLA, PETG, ABS i żywicą. Nasze drukarki 3D są w stanie drukować z wysoką precyzją i rozdzielczością, zapewniając doskonałą jakość powierzchni i szczegółów. Możemy drukować modele o różnych rozmiarach, od małych figurek po większe prototypy.",
    detailsEn:
      "We offer FDM and SLA 3D printing with a variety of materials including PLA, PETG, ABS, and resin. Our 3D printers are capable of printing with high precision and resolution, ensuring excellent surface quality and detail. We can print models of various sizes, from small figurines to larger prototypes.",
    orderTips:
      "Opisz wymiary, materiał i przeznaczenie modelu. Dołącz plik STL lub OBJ, jeśli to możliwe. Podaj preferowany kolor i gęstość wypełnienia.",
    orderTipsEn:
      "Describe the dimensions, material, and purpose of the model. Attach an STL or OBJ file if possible. Specify your preferred color and infill density.",
    features: [
      "Druk FDM i SLA",
      "Szeroki wybór materiałów",
      "Wysoka precyzja i jakość",
      "Szybka realizacja",
      "Możliwość druku dużych modeli",
      "Obróbka wykończeniowa",
    ],
    featuresEn: [
      "FDM and SLA printing",
      "Wide range of materials",
      "High precision and quality",
      "Fast turnaround",
      "Large model capability",
      "Post-processing services",
    ],
    materials: [
      {
        name: "PLA",
        description: "Standardowy materiał, biodegradowalny, łatwy w druku, idealny do modeli pokazowych.",
        descriptionEn: "Standard material, biodegradable, easy to print, ideal for display models.",
      },
      {
        name: "PETG",
        description: "Wytrzymały i elastyczny, odporny na uderzenia, dobry do części funkcjonalnych.",
        descriptionEn: "Durable and flexible, impact resistant, good for functional parts.",
      },
      {
        name: "ABS",
        description: "Bardzo wytrzymały, odporny na wysokie temperatury, idealny do części mechanicznych.",
        descriptionEn: "Very durable, resistant to high temperatures, ideal for mechanical parts.",
      },
      {
        name: "TPU",
        description: "Elastyczny materiał, idealny do części wymagających giętkości.",
        descriptionEn: "Flexible material, ideal for parts requiring bendability.",
      },
      {
        name: "Żywica (Resin)",
        description: "Najwyższa precyzja i jakość powierzchni, idealna do bardzo szczegółowych modeli.",
        descriptionEn: "Highest precision and surface quality, ideal for highly detailed models.",
      },
    ],
    pricing: [
      {
        category: "Druk FDM - PLA/PETG",
        categoryEn: "FDM Printing - PLA/PETG",
        items: [
          { name: "Mały model (do 50g)", nameEn: "Small model (up to 50g)", price: "30-50 zł" },
          { name: "Średni model (50-150g)", nameEn: "Medium model (50-150g)", price: "50-120 zł" },
          { name: "Duży model (150-300g)", nameEn: "Large model (150-300g)", price: "120-250 zł" },
          { name: "Bardzo duży model (powyżej 300g)", nameEn: "Very large model (above 300g)", price: "od 250 zł" },
        ],
      },
      {
        category: "Druk FDM - ABS/TPU",
        categoryEn: "FDM Printing - ABS/TPU",
        items: [
          { name: "Mały model (do 50g)", nameEn: "Small model (up to 50g)", price: "40-60 zł" },
          { name: "Średni model (50-150g)", nameEn: "Medium model (50-150g)", price: "60-140 zł" },
          { name: "Duży model (150-300g)", nameEn: "Large model (150-300g)", price: "140-280 zł" },
          { name: "Bardzo duży model (powyżej 300g)", nameEn: "Very large model (above 300g)", price: "od 280 zł" },
        ],
      },
      {
        category: "Druk SLA - Żywica",
        categoryEn: "SLA Printing - Resin",
        items: [
          { name: "Mały model (do 30ml)", nameEn: "Small model (up to 30ml)", price: "50-90 zł" },
          { name: "Średni model (30-80ml)", nameEn: "Medium model (30-80ml)", price: "90-180 zł" },
          { name: "Duży model (80-150ml)", nameEn: "Large model (80-150ml)", price: "180-350 zł" },
          { name: "Bardzo duży model (powyżej 150ml)", nameEn: "Very large model (above 150ml)", price: "od 350 zł" },
        ],
      },
      {
        category: "Obróbka wykończeniowa",
        categoryEn: "Post-processing",
        items: [
          { name: "Szlifowanie", nameEn: "Sanding", price: "od 20 zł" },
          { name: "Gruntowanie", nameEn: "Priming", price: "od 30 zł" },
          { name: "Malowanie (podstawowe)", nameEn: "Painting (basic)", price: "od 50 zł" },
          { name: "Malowanie (zaawansowane)", nameEn: "Painting (advanced)", price: "od 100 zł" },
        ],
      },
    ],
    faq: [
      {
        question: "Jaki format pliku jest najlepszy do druku 3D?",
        questionEn: "What file format is best for 3D printing?",
        answer:
          "Najlepszym formatem do druku 3D jest STL lub OBJ. Te formaty są powszechnie używane w druku 3D i zachowują wszystkie niezbędne informacje o geometrii modelu.",
        answerEn:
          "The best format for 3D printing is STL or OBJ. These formats are widely used in 3D printing and preserve all necessary information about the model's geometry.",
      },
      {
        question: "Jak długo trwa druk 3D?",
        questionEn: "How long does 3D printing take?",
        answer:
          "Czas druku zależy od rozmiaru modelu, wybranego materiału i szczegółowości. Małe modele mogą być gotowe w kilka godzin, podczas gdy większe projekty mogą zająć nawet kilka dni.",
        answerEn:
          "Print time depends on the size of the model, chosen material, and level of detail. Small models can be ready in a few hours, while larger projects may take several days.",
      },
      {
        question: "Czy mogę otrzymać wycenę przed zamówieniem?",
        questionEn: "Can I get a quote before ordering?",
        answer:
          "Tak, oferujemy bezpłatne wyceny. Wystarczy przesłać nam plik modelu i podać preferowane materiały, a my przygotujemy dla Ciebie szczegółową wycenę.",
        answerEn:
          "Yes, we offer free quotes. Simply send us your model file and specify your preferred materials, and we will prepare a detailed quote for you.",
      },
      {
        question: "Jaką dokładność ma druk 3D?",
        questionEn: "What accuracy does 3D printing have?",
        answer:
          "Dokładność zależy od technologii druku. Dla druku FDM typowa dokładność to około 0,1-0,2 mm, podczas gdy druk SLA może osiągnąć dokładność do 0,025-0,05 mm.",
        answerEn:
          "Accuracy depends on the printing technology. For FDM printing, typical accuracy is around 0.1-0.2 mm, while SLA printing can achieve accuracy up to 0.025-0.05 mm.",
      },
      {
        question: "Czy oferujecie usługi projektowania 3D?",
        questionEn: "Do you offer 3D design services?",
        answer:
          "Tak, oferujemy usługi projektowania 3D. Możemy pomóc w stworzeniu modelu od podstaw lub zmodyfikować istniejący projekt według Twoich potrzeb.",
        answerEn:
          "Yes, we offer 3D design services. We can help create a model from scratch or modify an existing design according to your needs.",
      },
    ],
    examples: [
      {
        title: "Figurka postaci z gry",
        titleEn: "Game character figurine",
        description: "Druk SLA, żywica, wysokiej jakości detale, malowanie ręczne",
        descriptionEn: "SLA print, resin, high-quality details, hand-painted",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        title: "Prototyp obudowy urządzenia",
        titleEn: "Device case prototype",
        description: "Druk FDM, PETG, funkcjonalny prototyp z elementami montażowymi",
        descriptionEn: "FDM print, PETG, functional prototype with mounting elements",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        title: "Model architektoniczny",
        titleEn: "Architectural model",
        description: "Druk FDM, PLA, złożony model budynku z detalami",
        descriptionEn: "FDM print, PLA, complex building model with details",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  "ciecie-laserowe": {
    id: "laser-cutting",
    title: "Cięcie laserowe",
    titleEn: "Laser Cutting",
    description:
      "Precyzyjne cięcie laserowe dla skomplikowanych projektów i wzorów na różnych materiałach, w tym drewnie, akrylu i innych.",
    descriptionEn:
      "Precision laser cutting for intricate designs and patterns on various materials including wood, acrylic, and more.",
    icon: <Scissors className="h-12 w-12 text-[#dfae4f]" />,
    details:
      "Nasza usługa cięcia laserowego może obsługiwać materiały o grubości do 8 mm z wysoką precyzją i czystymi krawędziami. Wykorzystujemy najnowocześniejsze lasery CO2, które zapewniają doskonałą jakość cięcia i grawerowania. Możemy realizować zarówno proste projekty, jak i skomplikowane wzory z najdrobniejszymi detalami.",
    detailsEn:
      "Our laser cutting service can handle materials up to 8mm thick with high precision and clean edges. We use state-of-the-art CO2 lasers that provide excellent cutting and engraving quality. We can handle both simple projects and complex patterns with the finest details.",
    orderTips:
      "Podaj rodzaj materiału, grubość i wymiary. Dołącz plik wektorowy (SVG, AI, DXF) z projektem do wycięcia. Określ, czy potrzebujesz tylko cięcia, czy również grawerowania.",
    orderTipsEn:
      "Specify the material type, thickness, and dimensions. Include a vector file (SVG, AI, DXF) with your design. Specify whether you need cutting only or engraving as well.",
    features: [
      "Precyzyjne cięcie laserowe",
      "Grawerowanie laserowe",
      "Szeroki wybór materiałów",
      "Możliwość realizacji skomplikowanych wzorów",
      "Szybka realizacja",
      "Prototypowanie",
    ],
    featuresEn: [
      "Precision laser cutting",
      "Laser engraving",
      "Wide range of materials",
      "Complex pattern capability",
      "Fast turnaround",
      "Prototyping",
    ],
    materials: [
      {
        name: "Sklejka",
        description: "Dostępna w różnych grubościach, idealna do modeli architektonicznych i dekoracji.",
        descriptionEn: "Available in various thicknesses, ideal for architectural models and decorations.",
      },
      {
        name: "MDF",
        description: "Gładka powierzchnia, dobra do grawerowania, idealna do szablonów i puzzli.",
        descriptionEn: "Smooth surface, good for engraving, ideal for templates and puzzles.",
      },
      {
        name: "Akryl (Plexiglas)",
        description: "Przezroczysty lub kolorowy, idealny do szyldów, ekspozytorów i elementów dekoracyjnych.",
        descriptionEn: "Transparent or colored, ideal for signage, displays, and decorative elements.",
      },
      {
        name: "Tektura",
        description: "Ekonomiczna opcja do prototypów, opakowań i szablonów jednorazowych.",
        descriptionEn: "Economical option for prototypes, packaging, and one-time templates.",
      },
      {
        name: "Filc",
        description: "Miękki materiał do projektów tekstylnych i dekoracji.",
        descriptionEn: "Soft material for textile projects and decorations.",
      },
    ],
    pricing: [
      {
        category: "Cięcie laserowe - Sklejka",
        categoryEn: "Laser Cutting - Plywood",
        items: [
          { name: "3mm (za minutę cięcia)", nameEn: "3mm (per minute of cutting)", price: "3-5 zł" },
          { name: "5mm (za minutę cięcia)", nameEn: "5mm (per minute of cutting)", price: "5-7 zł" },
          { name: "8mm (za minutę cięcia)", nameEn: "8mm (per minute of cutting)", price: "7-10 zł" },
          { name: "Przygotowanie pliku", nameEn: "File preparation", price: "od 30 zł" },
        ],
      },
      {
        category: "Cięcie laserowe - Akryl",
        categoryEn: "Laser Cutting - Acrylic",
        items: [
          { name: "2mm (za minutę cięcia)", nameEn: "2mm (per minute of cutting)", price: "4-6 zł" },
          { name: "3mm (za minutę cięcia)", nameEn: "3mm (per minute of cutting)", price: "6-8 zł" },
          { name: "5mm (za minutę cięcia)", nameEn: "5mm (per minute of cutting)", price: "8-12 zł" },
          { name: "Przygotowanie pliku", nameEn: "File preparation", price: "od 30 zł" },
        ],
      },
      {
        category: "Grawerowanie laserowe",
        categoryEn: "Laser Engraving",
        items: [
          { name: "Grawerowanie rastrowe (za cm²)", nameEn: "Raster engraving (per cm²)", price: "0.5-1 zł" },
          { name: "Grawerowanie wektorowe (za minutę)", nameEn: "Vector engraving (per minute)", price: "3-5 zł" },
          { name: "Przygotowanie pliku", nameEn: "File preparation", price: "od 30 zł" },
        ],
      },
      {
        category: "Materiały",
        categoryEn: "Materials",
        items: [
          { name: "Sklejka 3mm (za arkusz 30x40cm)", nameEn: "Plywood 3mm (per 30x40cm sheet)", price: "15-25 zł" },
          { name: "Sklejka 5mm (za arkusz 30x40cm)", nameEn: "Plywood 5mm (per 30x40cm sheet)", price: "25-35 zł" },
          { name: "Akryl 3mm (za arkusz 30x40cm)", nameEn: "Acrylic 3mm (per 30x40cm sheet)", price: "40-60 zł" },
          { name: "MDF 3mm (za arkusz 30x40cm)", nameEn: "MDF 3mm (per 30x40cm sheet)", price: "10-20 zł" },
        ],
      },
    ],
    faq: [
      {
        question: "Jakie formaty plików akceptujecie do cięcia laserowego?",
        questionEn: "What file formats do you accept for laser cutting?",
        answer:
          "Akceptujemy pliki wektorowe w formatach SVG, AI, DXF i PDF. Ważne, aby wszystkie linie cięcia były wektorami, a nie obrazami rastrowymi.",
        answerEn:
          "We accept vector files in SVG, AI, DXF, and PDF formats. It's important that all cutting lines are vectors, not raster images.",
      },
      {
        question: "Jaka jest minimalna szerokość szczeliny cięcia?",
        questionEn: "What is the minimum cutting gap width?",
        answer:
          "Szerokość szczeliny cięcia (kerf) wynosi około 0,1-0,2 mm, w zależności od materiału i jego grubości. Uwzględniamy to przy przygotowywaniu plików do cięcia.",
        answerEn:
          "The cutting gap width (kerf) is approximately 0.1-0.2 mm, depending on the material and its thickness. We take this into account when preparing files for cutting.",
      },
      {
        question: "Czy mogę przynieść własny materiał do cięcia?",
        questionEn: "Can I bring my own material for cutting?",
        answer:
          "Tak, możesz dostarczyć własny materiał. Należy jednak pamiętać, że nie wszystkie materiały nadają się do cięcia laserowego. Skontaktuj się z nami wcześniej, aby potwierdzić, czy Twój materiał jest odpowiedni.",
        answerEn:
          "Yes, you can provide your own material. However, please note that not all materials are suitable for laser cutting. Contact us beforehand to confirm if your material is appropriate.",
      },
      {
        question: "Jak szybko mogę otrzymać zamówienie?",
        questionEn: "How quickly can I receive my order?",
        answer:
          "Czas realizacji zależy od złożoności projektu i naszego aktualnego obciążenia. Typowo, proste projekty mogą być gotowe w ciągu 1-3 dni roboczych. Dla pilnych zleceń oferujemy usługę ekspresową za dodatkową opłatą.",
        answerEn:
          "Turnaround time depends on the complexity of the project and our current workload. Typically, simple projects can be ready within 1-3 business days. For urgent orders, we offer an express service for an additional fee.",
      },
      {
        question: "Czy oferujecie usługi projektowania do cięcia laserowego?",
        questionEn: "Do you offer design services for laser cutting?",
        answer:
          "Tak, oferujemy usługi projektowania. Możemy stworzyć projekt od podstaw na podstawie Twojego opisu lub przekształcić istniejący szkic czy obraz w plik wektorowy gotowy do cięcia laserowego.",
        answerEn:
          "Yes, we offer design services. We can create a design from scratch based on your description or convert an existing sketch or image into a vector file ready for laser cutting.",
      },
    ],
    examples: [
      {
        title: "Makieta architektoniczna",
        titleEn: "Architectural model",
        description: "Cięcie sklejki 3mm, złożony model budynku z detalami",
        descriptionEn: "3mm plywood cutting, complex building model with details",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        title: "Personalizowany zegar ścienny",
        titleEn: "Personalized wall clock",
        description: "Cięcie i grawerowanie akrylu, precyzyjne detale",
        descriptionEn: "Acrylic cutting and engraving, precise details",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        title: "Puzzle drewniane",
        titleEn: "Wooden puzzle",
        description: "Cięcie sklejki 5mm, grawerowane wzory",
        descriptionEn: "5mm plywood cutting, engraved patterns",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  "malowanie-modeli": {
    id: "model-painting",
    title: "Malowanie modeli",
    titleEn: "Model Painting",
    description:
      "Profesjonalne usługi malowania modeli z dbałością o szczegóły, ożywiające Twoje modele żywymi kolorami.",
    descriptionEn:
      "Professional model painting services with attention to detail, bringing your models to life with vibrant colors.",
    icon: <PaintBucket className="h-12 w-12 text-[#dfae4f]" />,
    details:
      "Nasi doświadczeni artyści mogą malować miniatury, modele skalowane i inne obiekty z niezwykłą dbałością o szczegóły. Używamy wysokiej jakości farb akrylowych, emalii i aerografów, aby osiągnąć najlepsze rezultaty. Oferujemy różne poziomy wykończenia, od podstawowego malowania po zaawansowane techniki cieniowania i efektów specjalnych.",
    detailsEn:
      "Our experienced artists can paint miniatures, scale models, and other objects with meticulous attention to detail. We use high-quality acrylic paints, enamels, and airbrushes to achieve the best results. We offer various levels of finishing, from basic painting to advanced shading techniques and special effects.",
    orderTips:
      "Opisz schemat kolorów, poziom szczegółowości i referencje. Dołącz zdjęcia podobnych modeli jako inspirację. Określ  poziom szczegółowości i referencje. Dołącz zdjęcia podobnych modeli jako inspirację. Określ, czy model wymaga wcześniejszego przygotowania (czyszczenie, gruntowanie).",
    orderTipsEn:
      "Describe the color scheme, level of detail, and any references. Include photos of similar models for inspiration. Specify if the model requires prior preparation (cleaning, priming).",
    features: [
      "Malowanie miniatur do gier",
      "Malowanie modeli skalowanych",
      "Malowanie figurek kolekcjonerskich",
      "Różne techniki malowania",
      "Efekty specjalne i postarzanie",
      "Lakierowanie ochronne",
    ],
    featuresEn: [
      "Gaming miniature painting",
      "Scale model painting",
      "Collectible figure painting",
      "Various painting techniques",
      "Special effects and weathering",
      "Protective varnishing",
    ],
    materials: [
      {
        name: "Farby akrylowe",
        description: "Szybkoschnące, łatwe w użyciu, idealne do większości modeli plastikowych i drukowanych 3D.",
        descriptionEn: "Quick-drying, easy to use, ideal for most plastic and 3D printed models.",
      },
      {
        name: "Farby emaliowe",
        description: "Trwałe wykończenie, idealne do modeli metalowych i niektórych plastikowych.",
        descriptionEn: "Durable finish, ideal for metal models and some plastics.",
      },
      {
        name: "Farby olejne",
        description: "Dłuższy czas schnięcia, ale umożliwiają płynne przejścia kolorów i efekty specjalne.",
        descriptionEn: "Longer drying time but allow for smooth color transitions and special effects.",
      },
      {
        name: "Pigmenty i washes",
        description: "Do cieniowania, podkreślania detali i efektów postarzania.",
        descriptionEn: "For shading, highlighting details, and weathering effects.",
      },
      {
        name: "Lakiery ochronne",
        description: "Matowe, satynowe lub błyszczące wykończenie chroniące model przed uszkodzeniami.",
        descriptionEn: "Matte, satin, or glossy finish protecting the model from damage.",
      },
    ],
    pricing: [
      {
        category: "Malowanie miniatur do gier (28-32mm)",
        categoryEn: "Gaming Miniature Painting (28-32mm)",
        items: [
          {
            name: "Standard (podstawowe kolory i cieniowanie)",
            nameEn: "Standard (basic colors and shading)",
            price: "30-60 zł",
          },
          {
            name: "Zaawansowane (szczegółowe cieniowanie, detale)",
            nameEn: "Advanced (detailed shading, details)",
            price: "60-120 zł",
          },
          {
            name: "Premium (najwyższa jakość, efekty specjalne)",
            nameEn: "Premium (highest quality, special effects)",
            price: "120-250 zł",
          },
          {
            name: "Przygotowanie modelu (czyszczenie, gruntowanie)",
            nameEn: "Model preparation (cleaning, priming)",
            price: "10-20 zł",
          },
        ],
      },
      {
        category: "Malowanie modeli skalowanych",
        categoryEn: "Scale Model Painting",
        items: [
          { name: "Mały model (1:72, 1:48)", nameEn: "Small model (1:72, 1:48)", price: "100-250 zł" },
          { name: "Średni model (1:35, 1:32)", nameEn: "Medium model (1:35, 1:32)", price: "250-500 zł" },
          { name: "Duży model (1:24, 1:16)", nameEn: "Large model (1:24, 1:16)", price: "500-1000 zł" },
          { name: "Efekty specjalne i postarzanie", nameEn: "Special effects and weathering", price: "+30-50%" },
        ],
      },
      {
        category: "Malowanie figurek kolekcjonerskich",
        categoryEn: "Collectible Figure Painting",
        items: [
          { name: "Mała figurka (do 10cm)", nameEn: "Small figure (up to 10cm)", price: "80-150 zł" },
          { name: "Średnia figurka (10-20cm)", nameEn: "Medium figure (10-20cm)", price: "150-300 zł" },
          { name: "Duża figurka (powyżej 20cm)", nameEn: "Large figure (above 20cm)", price: "od 300 zł" },
          { name: "Diorama/podstawka", nameEn: "Diorama/base", price: "od 100 zł" },
        ],
      },
      {
        category: "Usługi dodatkowe",
        categoryEn: "Additional Services",
        items: [
          { name: "Lakierowanie ochronne", nameEn: "Protective varnishing", price: "10-30 zł" },
          { name: "Konwersje i modyfikacje", nameEn: "Conversions and modifications", price: "od 50 zł" },
          { name: "Montaż modelu", nameEn: "Model assembly", price: "od 30 zł" },
          { name: "Ekspresowa realizacja", nameEn: "Express service", price: "+50%" },
        ],
      },
    ],
    faq: [
      {
        question: "Jak długo trwa malowanie modelu?",
        questionEn: "How long does it take to paint a model?",
        answer:
          "Czas malowania zależy od rozmiaru modelu, poziomu szczegółowości i wybranego standardu wykończenia. Małe miniatury w standardowej jakości mogą być gotowe w ciągu kilku dni, podczas gdy duże modele premium mogą wymagać kilku tygodni pracy.",
        answerEn:
          "Painting time depends on the model size, level of detail, and chosen finishing standard. Small miniatures in standard quality can be ready within a few days, while large premium models may require several weeks of work.",
      },
      {
        question: "Czy muszę dostarczyć własny model do malowania?",
        questionEn: "Do I need to provide my own model for painting?",
        answer:
          "Tak, zwykle klient dostarcza model do malowania. Jeśli nie masz jeszcze modelu, możemy pomóc w jego zakupie lub wydrukować go dla Ciebie w ramach naszej usługi druku 3D.",
        answerEn:
          "Yes, typically the client provides the model for painting. If you don't have a model yet, we can help you purchase one or print it for you as part of our 3D printing service.",
      },
      {
        question: "Czy mogę zobaczyć postęp prac przed ukończeniem?",
        questionEn: "Can I see the progress before completion?",
        answer:
          "Tak, dla większych projektów oferujemy aktualizacje postępu prac. Możemy wysłać zdjęcia na kluczowych etapach malowania, aby upewnić się, że kierunek prac spełnia Twoje oczekiwania.",
        answerEn:
          "Yes, for larger projects we offer progress updates. We can send photos at key stages of painting to ensure that the direction of work meets your expectations.",
      },
      {
        question: "Czy oferujecie gwarancję na malowanie?",
        questionEn: "Do you offer a warranty on painting?",
        answer:
          "Tak, oferujemy 30-dniową gwarancję na nasze usługi malowania. Jeśli farba zacznie się łuszczyć lub pojawią się inne problemy wynikające z naszej pracy, naprawimy model bezpłatnie.",
        answerEn:
          "Yes, we offer a 30-day warranty on our painting services. If the paint starts to chip or other issues arise from our work, we will repair the model free of charge.",
      },
      {
        question: "Czy malujecie modele z metalu, plastiku i żywicy?",
        questionEn: "Do you paint models made of metal, plastic, and resin?",
        answer:
          "Tak, malujemy modele wykonane z różnych materiałów, w tym metalu, plastiku, żywicy i wydruków 3D. Każdy materiał wymaga odpowiedniego przygotowania i technik malowania, które dobieramy indywidualnie.",
        answerEn:
          "Yes, we paint models made of various materials, including metal, plastic, resin, and 3D prints. Each material requires appropriate preparation and painting techniques, which we select individually.",
      },
    ],
    examples: [
      {
        title: "Figurka fantasy",
        titleEn: "Fantasy figurine",
        description: "Malowanie premium, efekty specjalne, niestandardowa podstawka",
        descriptionEn: "Premium painting, special effects, custom base",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        title: "Model czołgu",
        titleEn: "Tank model",
        description: "Malowanie zaawansowane, efekty postarzania i uszkodzeń bojowych",
        descriptionEn: "Advanced painting, weathering and battle damage effects",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        title: "Kolekcja miniatur do gier",
        titleEn: "Gaming miniature collection",
        description: "Spójna kolorystyka, malowanie standardowe z detalami",
        descriptionEn: "Consistent color scheme, standard painting with details",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mb-8">
        <Link
          href="/services"
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Powrót do usług
        </Link>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="bg-[#dfae4f]/10 p-4 rounded-full">{service.icon}</div>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00330a] dark:text-[#dfae4f]">
              {service.title}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{service.details}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-2 mt-1">
                  <Check className="h-5 w-5 text-[#dfae4f]" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Card className="border-2 border-[#dfae4f]/20 shadow-md dark:border-[#dfae4f]/30 dark:bg-[#1e1e1e]/80">
            <CardHeader>
              <CardTitle>Zamów usługę</CardTitle>
              <CardDescription>
                Wypełnij formularz, aby zamówić tę usługę. Skontaktujemy się z Tobą z wyceną.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-[#dfae4f] text-[#1e1e1e] hover:bg-[#c99c45]">
                    Zamów teraz <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <ServiceOrderForm
                    serviceName={service.title}
                    serviceDetails={service.details}
                    orderTips={service.orderTips}
                    onClose={() => {}}
                  />
                </DialogContent>
              </Dialog>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <p className="text-sm text-muted-foreground mb-2">Wskazówki do zamówienia:</p>
              <p className="text-sm">{service.orderTips}</p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Cennik</h2>
        <Tabs defaultValue={service.pricing[0].category}>
          <TabsList className="mb-4 flex flex-wrap">
            {service.pricing.map((category, index) => (
              <TabsTrigger key={index} value={category.category} className="mb-2">
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          {service.pricing.map((category, index) => (
            <TabsContent key={index} value={category.category}>
              <Table>
                <TableCaption>Cennik może ulec zmianie w zależności od złożoności projektu.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Usługa</TableHead>
                    <TableHead className="text-right">Cena</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {category.items.map((item, itemIndex) => (
                    <TableRow key={itemIndex}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className="text-right">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Materiały</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.materials.map((material, index) => (
            <Card key={index} className="border-[#dfae4f]/20 dark:border-[#dfae4f]/30">
              <CardHeader>
                <CardTitle className="text-lg">{material.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{material.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Przykładowe realizacje</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.examples.map((example, index) => (
            <Card key={index} className="overflow-hidden border-[#dfae4f]/20 dark:border-[#dfae4f]/30">
              <div className="aspect-square relative">
                <Image src={example.image || "/placeholder.svg"} alt={example.title} fill className="object-cover" />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{example.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Często zadawane pytania</h2>
        <Accordion type="single" collapsible className="w-full">
          {service.faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Gotowy do zamówienia?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Skontaktuj się z nami, aby omówić swój projekt lub złóż zamówienie bezpośrednio przez nasz formularz.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-[#dfae4f] text-[#1e1e1e] hover:bg-[#c99c45]">
              Zamów usługę teraz
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <ServiceOrderForm
              serviceName={service.title}
              serviceDetails={service.details}
              orderTips={service.orderTips}
              onClose={() => {}}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
