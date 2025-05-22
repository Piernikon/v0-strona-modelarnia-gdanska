import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Konfiguracja trybu konserwacji
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true"
const BYPASS_KEY = process.env.MAINTENANCE_BYPASS_KEY || "admin-bypass"

export function middleware(request: NextRequest) {
  // Sprawdź, czy tryb konserwacji jest aktywny
  if (MAINTENANCE_MODE) {
    // Sprawdź, czy żądanie zawiera klucz obejścia
    const bypass = request.cookies.get(BYPASS_KEY)
    const url = request.nextUrl.clone()

    // Jeśli to jest strona konserwacji, pozwól na dostęp
    if (url.pathname === "/maintenance") {
      return NextResponse.next()
    }

    // Jeśli to są zasoby statyczne, pozwól na dostęp
    if (
      url.pathname.startsWith("/_next") ||
      url.pathname.startsWith("/images") ||
      url.pathname.startsWith("/fonts") ||
      url.pathname.includes(".") // Pliki z rozszerzeniem (css, js, svg, itp.)
    ) {
      return NextResponse.next()
    }

    // Jeśli nie ma klucza obejścia, przekieruj na stronę konserwacji
    if (!bypass) {
      url.pathname = "/maintenance"
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts, /images (static files)
     * 4. /favicon.ico, /sitemap.xml (static files)
     */
    "/((?!api|_next|fonts|images|favicon.ico|sitemap.xml).*)",
  ],
}
