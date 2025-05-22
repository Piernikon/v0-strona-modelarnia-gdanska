import { render } from "@testing-library/react"
import HeroSection from "@/components/hero-section"
import { measureComponentPerformance } from "@/lib/performance-testing/measure-performance"
import { describe, test, expect } from "@jest/globals"

describe("HeroSection Performance Tests", () => {
  // Test wydajności renderowania sekcji hero
  test("HeroSection render performance", async () => {
    // Przygotuj funkcje renderowania i aktualizacji
    const renderHeroSection = () => {
      render(<HeroSection />)
    }

    const updateHeroSection = () => {
      // Ponowne renderowanie tego samego komponentu
      render(<HeroSection />)
    }

    // Zmierz wydajność
    const metrics = await measureComponentPerformance(renderHeroSection, updateHeroSection, {
      componentName: "HeroSection",
      iterations: 5,
      warmupIterations: 2,
      logResults: true,
    })

    // Sprawdź, czy metryki są rozsądne
    expect(metrics.renderTime).toBeDefined()
    expect(metrics.rerenderTime).toBeDefined()
    expect(metrics.componentName).toBe("HeroSection")

    // Ustaw progi wydajności (dostosuj do swojego środowiska)
    const RENDER_TIME_THRESHOLD = 400 // ms
    const RERENDER_TIME_THRESHOLD = 200 // ms

    // Asercje wydajności
    expect(metrics.renderTime).toBeLessThan(RENDER_TIME_THRESHOLD)
    expect(metrics.rerenderTime).toBeLessThan(RERENDER_TIME_THRESHOLD)
  })

  // Test wydajności renderowania sekcji hero z różnymi językami
  test("HeroSection language switch performance", async () => {
    // Przygotuj funkcje renderowania dla różnych języków
    const renderPolishHeroSection = () => {
      render(<HeroSection language="pl" />)
    }

    const renderEnglishHeroSection = () => {
      render(<HeroSection language="en" />)
    }

    // Zmierz wydajność dla polskiej wersji
    const polishMetrics = await measureComponentPerformance(renderPolishHeroSection, renderPolishHeroSection, {
      componentName: "HeroSection (PL)",
      iterations: 3,
      warmupIterations: 1,
      logResults: true,
    })

    // Zmierz wydajność dla angielskiej wersji
    const englishMetrics = await measureComponentPerformance(renderEnglishHeroSection, renderEnglishHeroSection, {
      componentName: "HeroSection (EN)",
      iterations: 3,
      warmupIterations: 1,
      logResults: true,
    })

    // Sprawdź, czy metryki są rozsądne
    expect(polishMetrics.renderTime).toBeDefined()
    expect(englishMetrics.renderTime).toBeDefined()

    // Sprawdź, czy wydajność jest podobna dla obu języków
    // Różnica nie powinna być większa niż 20%
    const renderTimeDiff = Math.abs(polishMetrics.renderTime - englishMetrics.renderTime)
    const avgRenderTime = (polishMetrics.renderTime + englishMetrics.renderTime) / 2

    expect(renderTimeDiff / avgRenderTime).toBeLessThan(0.2)

    console.log("Language switch performance comparison:")
    console.log(`Polish: ${polishMetrics.renderTime.toFixed(2)}ms`)
    console.log(`English: ${englishMetrics.renderTime.toFixed(2)}ms`)
  })
})
