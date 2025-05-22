import { render } from "@testing-library/react"
import ServicesGrid from "@/components/services-grid"
import { measureComponentPerformance } from "@/lib/performance-testing/measure-performance"
import { testListPerformance } from "@/lib/performance-testing/list-performance-test"
import { describe, test, expect } from "@jest/globals" // Import describe, test, expect

// Mock dla usług
const createMockServices = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `service-${i}`,
    title: `Service ${i}`,
    description: `This is a description for service ${i}. It contains some text to simulate a real service description.`,
    icon: "Tool",
    price: `${(i + 1) * 100} zł`,
    slug: `service-${i}`,
  }))
}

describe("ServicesGrid Performance Tests", () => {
  // Test wydajności renderowania siatki usług
  test("ServicesGrid render performance", async () => {
    // Przygotuj funkcje renderowania i aktualizacji
    const renderServicesGrid = () => {
      render(<ServicesGrid services={createMockServices(6)} />)
    }

    const updateServicesGrid = () => {
      render(<ServicesGrid services={createMockServices(6)} />)
    }

    // Zmierz wydajność
    const metrics = await measureComponentPerformance(renderServicesGrid, updateServicesGrid, {
      componentName: "ServicesGrid",
      iterations: 3,
      warmupIterations: 1,
      logResults: true,
    })

    // Sprawdź, czy metryki są rozsądne
    expect(metrics.renderTime).toBeDefined()
    expect(metrics.rerenderTime).toBeDefined()
    expect(metrics.componentName).toBe("ServicesGrid")

    // Ustaw progi wydajności (dostosuj do swojego środowiska)
    const RENDER_TIME_THRESHOLD = 300 // ms
    const RERENDER_TIME_THRESHOLD = 150 // ms

    // Asercje wydajności
    expect(metrics.renderTime).toBeLessThan(RENDER_TIME_THRESHOLD)
    expect(metrics.rerenderTime).toBeLessThan(RERENDER_TIME_THRESHOLD)
  })

  // Test skalowalności siatki usług z różną liczbą elementów
  test("ServicesGrid scalability with different service counts", async () => {
    // Funkcja renderująca siatkę usług z określoną liczbą elementów
    const renderServicesGridWithCount = (count: number) => {
      render(<ServicesGrid services={createMockServices(count)} />)
    }

    // Testuj wydajność dla różnych rozmiarów siatki
    const results = await testListPerformance(renderServicesGridWithCount, {
      initialCount: 3,
      maxCount: 15,
      step: 3,
      iterations: 2,
      componentName: "ServicesGrid",
    })

    // Sprawdź, czy wyniki są dostępne
    expect(results.length).toBeGreaterThan(0)

    // Sprawdź, czy czas renderowania rośnie liniowo (lub lepiej) z liczbą elementów
    const firstResult = results[0]
    const lastResult = results[results.length - 1]

    const itemCountRatio = lastResult.itemCount / firstResult.itemCount
    const renderTimeRatio = lastResult.renderTime / firstResult.renderTime

    // Oczekujemy, że czas renderowania rośnie wolniej niż liniowo z liczbą elementów
    expect(renderTimeRatio).toBeLessThan(itemCountRatio * 1.5)

    console.log("ServicesGrid scalability test results:", results)
  })
})
