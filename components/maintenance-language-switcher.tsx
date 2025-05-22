"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<"pl" | "en">("pl")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10">
          <Globe className="h-4 w-4 mr-2" />
          {language === "pl" ? "Polski" : "English"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#002209] border-white/10">
        <DropdownMenuItem
          onClick={() => setLanguage("pl")}
          className={`${language === "pl" ? "bg-white/10" : ""} text-white hover:bg-white/20`}
        >
          Polski
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`${language === "en" ? "bg-white/10" : ""} text-white hover:bg-white/20`}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
