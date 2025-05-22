import { render } from "@testing-library/react"
import Gallery from "@/components/gallery"
import { measureComponentPerformance } from "@/lib/performance-testing/measure-performance"
import { testListPerformance } from "@/lib/performance-testing/list-performance-test"
import { describe, test, expect } from "@jest/globals" // Importowanie describe, test i expect

// Mock dla obrazów galerii
const createMockImages = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `image-${i}`,
    src: `/placeholder.svg?height=300&width=400&text=Image${i}`,
    alt: `Test Image ${i}`,
    width: 400,
    height: 300,
  }))
}

describe("Gallery Performance Tests", () => {
  // Test wydajności renderowania galerii
  test("Gallery render performance", async () => {
    // Przygotuj funkcje renderowania i aktualizacji
    const renderGallery = () => {
      render(<Gallery images={createMockImages(10)} />)
    }

    const updateGallery = () => {
      render(<Gallery images={createMockImages(10)} />)
    }

    // Zmierz wydajność
    const metrics = await measureComponentPerformance(renderGallery, updateGallery, {
      componentName: "Gallery",
      iterations: 3,
      warmupIterations: 1,
      logResults: true,
    })

    // Sprawdź, czy metryki są rozsądne
    expect(metrics.renderTime).toBeDefined()
    expect(metrics.rerenderTime).toBeDefined()
    expect(metrics.componentName).toBe("Gallery")

    // Ustaw progi wydajności (dostosuj do swojego środowiska)
    const RENDER_TIME_THRESHOLD = 500 // ms
    const RERENDER_TIME_THRESHOLD = 200 // ms

    // Asercje wydajności
    expect(metrics.renderTime).toBeLessThan(RENDER_TIME_THRESHOLD)
    expect(metrics.rerenderTime).toBeLessThan(RERENDER_TIME_THRESHOLD)
  })

  // Test skalowalności galerii z różną liczbą obrazów
  test("Gallery scalability with different image counts", async () => {
    // Funkcja renderująca galerię z określoną liczbą obrazów
    const renderGalleryWithCount = (count: number) => {
      render(<Gallery images={createMockImages(count)} />)
    }

    // Testuj wydajność dla różnych rozmiarów galerii
    const results = await testListPerformance(renderGalleryWithCount, {
      initialCount: 5,
      maxCount: 20,
      step: 5,
      iterations: 2,
      componentName: "Gallery",
    })

    // Sprawdź, czy wyniki są dostępne
    expect(results.length).toBeGreaterThan(0)

    // Sprawdź, czy czas renderowania rośnie liniowo (lub lepiej) z liczbą elementów
    // To jest uproszczona heurystyka - w rzeczywistości możesz potrzebować bardziej zaawansowanej analizy
    const firstResult = results[0]
    const lastResult = results[results.length - 1]

    const itemCountRatio = lastResult.itemCount / firstResult.itemCount
    const renderTimeRatio = lastResult.renderTime / firstResult.renderTime

    // Oczekujemy, że czas renderowania rośnie wolniej niż liniowo z liczbą elementów
    // lub co najwyżej liniowo (współczynnik 1.5 daje pewien margines)
    expect(renderTimeRatio).toBeLessThan(itemCountRatio * 1.5)

    console.log("Gallery scalability test results:", results)
  })
})
