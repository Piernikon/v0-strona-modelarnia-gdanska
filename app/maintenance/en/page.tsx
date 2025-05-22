import { Suspense } from "react"
import Link from "next/link"
import { Facebook, Instagram, Mail, Clock } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import MaintenanceCountdown from "@/components/maintenance-countdown"
import LanguageSwitcher from "@/components/maintenance-language-switcher"

export default function MaintenancePageEN() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#001a05] to-[#003311] text-white">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-3xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Logo variant="light" className="mx-auto" />
          </div>

          {/* Language Switcher */}
          <div className="absolute top-4 right-4">
            <Suspense fallback={<div className="h-10 w-20 bg-gray-800/50 rounded animate-pulse" />}>
              <LanguageSwitcher />
            </Suspense>
          </div>

          {/* Main Content */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-[#dfae4f]/10 rounded-full blur-xl" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#dfae4f]/10 rounded-full blur-xl" />

            <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-[#dfae4f] mb-4">Site Under Maintenance</h1>

              <p className="text-lg md:text-xl mb-6 text-zinc-200">
                We apologize for the inconvenience. Our website is temporarily unavailable due to maintenance work.
                We'll be back soon with new features and improvements.
              </p>

              {/* Countdown Timer */}
              <div className="mb-8">
                <Suspense fallback={<div className="h-16 bg-gray-800/50 rounded animate-pulse" />}>
                  <MaintenanceCountdown endTime="2023-12-31T23:59:59" />
                </Suspense>
              </div>

              {/* Contact Info */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#dfae4f] mb-3 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Need assistance?
                </h2>
                <p className="text-zinc-300">
                  For urgent matters, please contact us at:
                  <a href="mailto:contact@modelarniagdanska.pl" className="text-[#dfae4f] hover:underline ml-1">
                    contact@modelarniagdanska.pl
                  </a>
                </p>
              </div>

              {/* Social Media */}
              <div className="flex justify-center space-x-4 mb-8">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>

              {/* Status Updates Button */}
              <Button
                variant="outline"
                className="bg-transparent border-[#dfae4f] text-[#dfae4f] hover:bg-[#dfae4f]/10"
              >
                <Clock className="mr-2 h-4 w-4" />
                Check Status Updates
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-sm text-zinc-400">
            <p>© 2023 Modelarnia Gdańska. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
