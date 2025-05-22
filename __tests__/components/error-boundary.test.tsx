"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import { ErrorBoundary, withErrorBoundary } from "@/components/error-boundary"
import "@testing-library/jest-dom"
import { jest } from "@jest/globals"

// Komponent, który zawsze rzuca błąd podczas renderowania
const ErrorComponent = ({ shouldThrow = true }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error("Test error")
  }
  return <div>Komponent działa poprawnie</div>
}

// Komponent, który rzuca błąd po kliknięciu przycisku
const ThrowErrorOnClick = () => {
  const handleClick = () => {
    throw new Error("Error on click")
  }
  return <button onClick={handleClick}>Rzuć błąd</button>
}

// Niestandardowy komponent zastępczy (fallback)
const CustomFallback = () => <div>Niestandardowy komponent zastępczy</div>

describe("ErrorBoundary Component", () => {
  // Wyciszamy błędy konsoli, które są oczekiwane w testach
  const originalConsoleError = console.error
  beforeAll(() => {
    console.error = jest.fn()
  })
  afterAll(() => {
    console.error = originalConsoleError
  })

  test("renderuje dzieci, gdy nie ma błędu", () => {
    render(
      <ErrorBoundary>
        <div>Zawartość bez błędu</div>
      </ErrorBoundary>,
    )

    expect(screen.getByText("Zawartość bez błędu")).toBeInTheDocument()
  })

  test("wyświetla komunikat o błędzie, gdy komponent potomny rzuca błąd", () => {
    // Używamy try-catch, ponieważ oczekujemy błędu podczas renderowania
    try {
      render(
        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>,
      )
    } catch (error) {
      // Ignorujemy błąd, ponieważ ErrorBoundary powinien go obsłużyć
    }

    // Sprawdzamy, czy wyświetlany jest komunikat o błędzie
    expect(screen.getByText("Wystąpił błąd w komponencie")).toBeInTheDocument()
    expect(screen.getByText("Test error")).toBeInTheDocument()
  })

  test("wyświetla niestandardowy fallback, gdy jest przekazany", () => {
    try {
      render(
        <ErrorBoundary fallback={<CustomFallback />}>
          <ErrorComponent />
        </ErrorBoundary>,
      )
    } catch (error) {
      // Ignorujemy błąd
    }

    expect(screen.getByText("Niestandardowy komponent zastępczy")).toBeInTheDocument()
  })

  test('przycisk "Spróbuj ponownie" resetuje stan błędu', () => {
    // Tworzymy komponent, który może kontrolować, czy rzuca błąd
    const TestComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
      if (shouldThrow) {
        throw new Error("Test error")
      }
      return <div>Komponent działa poprawnie</div>
    }

    // Renderujemy komponent z ErrorBoundary
    const { rerender } = render(
      <ErrorBoundary>
        <TestComponent shouldThrow={true} />
      </ErrorBoundary>,
    )

    // Sprawdzamy, czy wyświetlany jest komunikat o błędzie
    expect(screen.getByText("Wystąpił błąd w komponencie")).toBeInTheDocument()

    // Klikamy przycisk "Spróbuj ponownie"
    fireEvent.click(screen.getByText("Spróbuj ponownie"))

    // Rerenderujemy komponent, tym razem bez rzucania błędu
    rerender(
      <ErrorBoundary>
        <TestComponent shouldThrow={false} />
      </ErrorBoundary>,
    )

    // Sprawdzamy, czy komponent działa poprawnie
    expect(screen.getByText("Komponent działa poprawnie")).toBeInTheDocument()
  })

  test("HOC withErrorBoundary działa poprawnie", () => {
    const SafeComponent = withErrorBoundary(ErrorComponent, <CustomFallback />)

    render(<SafeComponent shouldThrow={true} />)

    expect(screen.getByText("Niestandardowy komponent zastępczy")).toBeInTheDocument()
  })
})
