"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "./logo"
import React from "react"

interface FooterProps {
  language?: "pl" | "en"
}

export default function Footer({ language = "pl" }: FooterProps) {
  // Add console log to help identify multiple renders
  if (typeof window !== "undefined") {
    console.log("Footer component rendered")
  }

  // Prevent duplicate rendering
  React.useEffect(() => {
    const footers = document.querySelectorAll("footer.site-footer")
    if (footers.length > 1) {
      console.warn("Multiple footers detected!")
    }
  }, [])

  const texts = {
    pl: {
      about: "O nas",
      aboutText:
        "Modelarnia Gdańska to profesjonalne studio modelarskie specjalizujące się w druku 3D, cięciu laserowym i malowaniu modeli.",
      quickLinks: "Szybkie linki",
      services: "Usługi",
      projects: "Projekty",
      guide: "Poradnik druku 3D",
      faq: "FAQ",
      contact: "Kontakt",
      address: "Gdańsk, Polska",
      email: "kontakt@modelarniagdanska.pl",
      phone: "+48 123 456 789",
      copyright: "© 2023 Modelarnia Gdańska. Wszelkie prawa zastrzeżone.",
      privacyPolicy: "Polityka prywatności",
      termsOfService: "Warunki korzystania z usług",
    },
    en: {
      about: "About Us",
      aboutText:
        "Modelarnia Gdańska is a professional modeling studio specializing in 3D printing, laser cutting, and model painting.",
      quickLinks: "Quick Links",
      services: "Services",
      projects: "Projects",
      guide: "3D Printing Guide",
      faq: "FAQ",
      contact: "Contact",
      address: "Gdańsk, Poland",
      email: "contact@modelarniagdanska.pl",
      phone: "+48 123 456 789",
      copyright: "© 2023 Modelarnia Gdańska. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
  }

  const currentTexts = texts[language]

  // Social media links
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ]

  return (
    <footer className="bg-[#00330a] dark:bg-[#001a05] text-white site-footer">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-zinc-300 text-sm">{currentTexts.aboutText}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[#dfae4f] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#dfae4f]">{currentTexts.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-zinc-300 hover:text-[#dfae4f] transition-colors text-sm">
                  {currentTexts.services}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-zinc-300 hover:text-[#dfae4f] transition-colors text-sm">
                  {currentTexts.projects}
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-zinc-300 hover:text-[#dfae4f] transition-colors text-sm">
                  {currentTexts.guide}
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-zinc-300 hover:text-[#dfae4f] transition-colors text-sm">
                  {currentTexts.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-[#dfae4f]">{currentTexts.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#dfae4f] mr-3 mt-0.5" />
                <span className="text-zinc-300 text-sm">{currentTexts.address}</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#dfae4f] mr-3 mt-0.5" />
                <span className="text-zinc-300 text-sm">{currentTexts.email}</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#dfae4f] mr-3 mt-0.5" />
                <span className="text-zinc-300 text-sm">{currentTexts.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">{currentTexts.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-zinc-400 hover:text-[#dfae4f] transition-colors text-sm">
              {currentTexts.privacyPolicy}
            </Link>
            <Link href="/terms" className="text-zinc-400 hover:text-[#dfae4f] transition-colors text-sm">
              {currentTexts.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
