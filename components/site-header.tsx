"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MoonIcon, SunIcon, Menu, X, Globe, Facebook, Instagram } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Logo } from "./logo"

// Polish translation
const navItemsPL = [
  { name: "Strona główna", href: "/" },
  { name: "Usługi", href: "/services" },
  { name: "Projekty", href: "/projects" },
  { name: "Sklep", href: "/store" },
  { name: "Poradnik", href: "/guide" },
  { name: "Kontakt", href: "/#contact" },
]

// English translation
const navItemsEN = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Store", href: "/store" },
  { name: "Guide", href: "/guide" },
  { name: "Contact", href: "/#contact" },
]

// Social media links
const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
]

export function SiteHeader() {
  const { setTheme, theme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState<"pl" | "en">("pl") // Default to Polish

  const navItems = language === "pl" ? navItemsPL : navItemsEN

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "pl" ? "en" : "pl")
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur transition-all duration-200",
        scrolled ? "bg-background/95 border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Logo variant={theme === "dark" ? "dark" : "default"} />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 overflow-x-auto">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-[#dfae4f] whitespace-nowrap"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Social Media Icons */}
          <div className="flex items-center gap-1 mr-2">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Change language">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("pl")} className={language === "pl" ? "bg-muted" : ""}>
                Polski
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Change language">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("pl")} className={language === "pl" ? "bg-muted" : ""}>
                Polski
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-background border-b"
        >
          <div className="container py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-medium transition-colors hover:text-[#dfae4f]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Social Media Icons in Mobile Menu */}
            <div className="flex items-center gap-2 pt-4 border-t border-border mt-4">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
