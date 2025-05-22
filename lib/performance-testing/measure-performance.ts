/**
 * Narzędzie do mierzenia wydajności renderowania komponentów React
 */

export interface PerformanceMetrics {
  renderTime: number
  rerenderTime: number
  memoryUsage?: number
  componentName: string
  timestamp: number
}

export interface PerformanceOptions {
  iterations?: number
  warmupIterations?: number
  componentName?: string
  logResults?: boolean
}

/**
 * Mierzy czas renderowania i ponownego renderowania komponentu
 * @param renderFn Funkcja renderująca komponent
 * @param updateFn Funkcja aktualizująca props komponentu (do testowania ponownego renderowania)
 * @param options Opcje pomiaru wydajności
 * @returns Metryki wydajności
 */
export async function measureComponentPerformance(
  renderFn: () => void,
  updateFn: () => void,
  options: PerformanceOptions = {},
): Promise<PerformanceMetrics> {
  const { iterations = 5, warmupIterations = 2, componentName = "UnnamedComponent", logResults = true } = options

  // Wykonaj rozgrzewkę, aby uniknąć wpływu JIT i innych optymalizacji
  for (let i = 0; i < warmupIterations; i++) {
    renderFn()
    updateFn()
  }

  // Mierz pierwsze renderowanie
  const renderStartTime = performance.now()
  renderFn()
  const renderEndTime = performance.now()
  const initialRenderTime = renderEndTime - renderStartTime

  // Mierz ponowne renderowanie (średnia z wielu iteracji)
  let totalRerenderTime = 0
  for (let i = 0; i < iterations; i++) {
    const rerenderStartTime = performance.now()
    updateFn()
    const rerenderEndTime = performance.now()
    totalRerenderTime += rerenderEndTime - rerenderStartTime
  }
  const averageRerenderTime = totalRerenderTime / iterations

  // Zbierz metryki pamięci, jeśli dostępne
  let memoryUsage: number | undefined = undefined
  if (typeof performance.memory !== "undefined") {
    // @ts-ignore - performance.memory nie jest standardową właściwością, ale jest dostępna w Chrome
    memoryUsage = performance.memory?.usedJSHeapSize
  }

  const metrics: PerformanceMetrics = {
    renderTime: initialRenderTime,
    rerenderTime: averageRerenderTime,
    memoryUsage,
    componentName,
    timestamp: Date.now(),
  }

  if (logResults) {
    console.log(`--- Performance metrics for ${componentName} ---`)
    console.log(`Initial render time: ${initialRenderTime.toFixed(2)}ms`)
    console.log(`Average re-render time (${iterations} iterations): ${averageRerenderTime.toFixed(2)}ms`)
    if (memoryUsage) {
      console.log(`Memory usage: ${(memoryUsage / (1024 * 1024)).toFixed(2)} MB`)
    }
    console.log("-------------------------------------------")
  }

  return metrics
}

/**
 * Zapisuje metryki wydajności do localStorage
 */
export function savePerformanceMetrics(metrics: PerformanceMetrics): void {
  try {
    const storedMetrics = localStorage.getItem("performanceMetrics")
    const metricsArray = storedMetrics ? JSON.parse(storedMetrics) : []
    metricsArray.push(metrics)
    localStorage.setItem("performanceMetrics", JSON.stringify(metricsArray))
  } catch (error) {
    console.error("Failed to save performance metrics:", error)
  }
}

/**
 * Pobiera zapisane metryki wydajności z localStorage
 */
export function getPerformanceMetrics(): PerformanceMetrics[] {
  try {
    const storedMetrics = localStorage.getItem("performanceMetrics")
    return storedMetrics ? JSON.parse(storedMetrics) : []
  } catch (error) {
    console.error("Failed to retrieve performance metrics:", error)
    return []
  }
}

/**
 * Czyści zapisane metryki wydajności
 */
export function clearPerformanceMetrics(): void {
  try {
    localStorage.removeItem("performanceMetrics")
  } catch (error) {
    console.error("Failed to clear performance metrics:", error)
  }
}
