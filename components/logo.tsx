import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "light" | "dark" | "default"
}

export function Logo({ className, variant = "default" }: LogoProps) {
  // Choose the appropriate logo based on the variant
  const logoSrc = variant === "light" ? "/logo-light.png" : variant === "dark" ? "/logo-dark.png" : "/logo.png"

  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="Modelarnia Gdańska"
        width={180}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </Link>
  )
}

// For now, we'll use a placeholder SVG for the logo
