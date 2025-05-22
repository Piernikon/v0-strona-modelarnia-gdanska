/**
 * Narzędzie do testowania wydajności całych stron
 */

export interface PagePerformanceMetrics {
  url: string
  loadTime: number
  firstPaint?: number
  firstContentfulPaint?: number
  domContentLoaded: number
  domComplete: number
  resourcesLoaded: number
  timestamp: number
}

/**
 * Mierzy wydajność ładowania strony
 * @param url URL strony do przetestowania
 * @returns Metryki wydajności strony
 */
export async function measurePagePerformance(url: string): Promise<PagePerformanceMetrics> {
  // Ta funkcja jest przeznaczona do uruchamiania w przeglądarce
  if (typeof window === "undefined") {
    throw new Error("measurePagePerformance can only be run in browser environment")
  }

  return new Promise((resolve) => {
    const iframe = document.createElement("iframe")
    iframe.style.width = "1px"
    iframe.style.height = "1px"
    iframe.style.position = "absolute"
    iframe.style.top = "-9999px"
    iframe.style.left = "-9999px"

    const startTime = performance.now()
    let domContentLoadedTime = 0

    iframe.onload = () => {
      const loadTime = performance.now() - startTime
      const contentWindow = iframe.contentWindow

      if (!contentWindow) {
        document.body.removeChild(iframe)
        resolve({
          url,
          loadTime,
          domContentLoaded: domContentLoadedTime || loadTime,
          domComplete: loadTime,
          resourcesLoaded: 0,
          timestamp: Date.now(),
        })
        return
      }

      // Pobierz metryki wydajności z iframe
      const performanceEntries = contentWindow.performance.getEntriesByType("navigation")
      const paintEntries = contentWindow.performance.getEntriesByType("paint")
      const resourceEntries = contentWindow.performance.getEntriesByType("resource")

      let firstPaint: number | undefined = undefined
      let firstContentfulPaint: number | undefined = undefined
      let domContentLoaded = loadTime
      let domComplete = loadTime

      // Pobierz metryki malowania
      paintEntries.forEach((entry) => {
        if (entry.name === "first-paint") {
          firstPaint = entry.startTime
        } else if (entry.name === "first-contentful-paint") {
          firstContentfulPaint = entry.startTime
        }
      })

      // Pobierz metryki nawigacji
      if (performanceEntries.length > 0) {
        const navEntry = performanceEntries[0] as PerformanceNavigationTiming
        domContentLoaded = navEntry.domContentLoadedEventEnd
        domComplete = navEntry.domComplete
      }

      // Usuń iframe
      document.body.removeChild(iframe)

      // Zwróć metryki
      resolve({
        url,
        loadTime,
        firstPaint,
        firstContentfulPaint,
        domContentLoaded,
        domComplete,
        resourcesLoaded: resourceEntries.length,
        timestamp: Date.now(),
      })
    }

    // Nasłuchuj zdarzenia DOMContentLoaded
    iframe.addEventListener("DOMContentLoaded", () => {
      domContentLoadedTime = performance.now() - startTime
    })

    // Dodaj iframe do dokumentu i załaduj stronę
    document.body.appendChild(iframe)
    iframe.src = url
  })
}

/**
 * Zapisuje metryki wydajności strony do localStorage
 */
export function savePagePerformanceMetrics(metrics: PagePerformanceMetrics): void {
  try {
    const storedMetrics = localStorage.getItem("pagePerformanceMetrics")
    const metricsArray = storedMetrics ? JSON.parse(storedMetrics) : []
    metricsArray.push(metrics)
    localStorage.setItem("pagePerformanceMetrics", JSON.stringify(metricsArray))
  } catch (error) {
    console.error("Failed to save page performance metrics:", error)
  }
}

/**
 * Pobiera zapisane metryki wydajności strony z localStorage
 */
export function getPagePerformanceMetrics(): PagePerformanceMetrics[] {
  try {
    const storedMetrics = localStorage.getItem("pagePerformanceMetrics")
    return storedMetrics ? JSON.parse(storedMetrics) : []
  } catch (error) {
    console.error("Failed to retrieve page performance metrics:", error)
    return []
  }
}

/**
 * Czyści zapisane metryki wydajności strony
 */
export function clearPagePerformanceMetrics(): void {
  try {
    localStorage.removeItem("pagePerformanceMetrics")
  } catch (error) {
    console.error("Failed to clear page performance metrics:", error)
  }
}
