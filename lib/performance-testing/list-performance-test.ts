/**
 * Narzędzie do testowania wydajności renderowania list
 */

export interface ListPerformanceOptions {
  initialCount: number
  maxCount: number
  step: number
  iterations?: number
  componentName?: string
}

export interface ListPerformanceResult {
  itemCount: number
  renderTime: number
  rerenderTime: number
  memoryUsage?: number
}

/**
 * Testuje wydajność renderowania listy o różnych rozmiarach
 * @param renderFn Funkcja renderująca komponent z listą
 * @param options Opcje testu
 * @returns Wyniki testu wydajności
 */
export async function testListPerformance(
  renderFn: (count: number) => void,
  options: ListPerformanceOptions,
): Promise<ListPerformanceResult[]> {
  const { initialCount, maxCount, step, iterations = 3, componentName = "ListComponent" } = options

  const results: ListPerformanceResult[] = []

  for (let count = initialCount; count <= maxCount; count += step) {
    console.log(`Testing ${componentName} with ${count} items...`)

    // Rozgrzewka
    renderFn(count)

    // Mierz czas pierwszego renderowania
    const renderStartTime = performance.now()
    renderFn(count)
    const renderEndTime = performance.now()
    const renderTime = renderEndTime - renderStartTime

    // Mierz czas ponownego renderowania
    let totalRerenderTime = 0
    for (let i = 0; i < iterations; i++) {
      const rerenderStartTime = performance.now()
      renderFn(count)
      const rerenderEndTime = performance.now()
      totalRerenderTime += rerenderEndTime - rerenderStartTime
    }
    const rerenderTime = totalRerenderTime / iterations

    // Zbierz metryki pamięci, jeśli dostępne
    let memoryUsage: number | undefined = undefined
    if (typeof performance.memory !== "undefined") {
      // @ts-ignore - performance.memory nie jest standardową właściwością, ale jest dostępna w Chrome
      memoryUsage = performance.memory?.usedJSHeapSize
    }

    results.push({
      itemCount: count,
      renderTime,
      rerenderTime,
      memoryUsage,
    })

    console.log(`Results for ${count} items:`)
    console.log(`- Render time: ${renderTime.toFixed(2)}ms`)
    console.log(`- Re-render time: ${rerenderTime.toFixed(2)}ms`)
    if (memoryUsage) {
      console.log(`- Memory usage: ${(memoryUsage / (1024 * 1024)).toFixed(2)} MB`)
    }
  }

  return results
}
