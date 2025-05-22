import { render, screen } from "@testing-library/react"
import SafeGallery from "@/components/safe-gallery"
import "@testing-library/jest-dom"
import jest from "jest" // Import jest to fix the undeclared variable error

// Mockujemy komponent Gallery
jest.mock("@/components/gallery", () => ({
  __esModule: true,
  default: ({ shouldThrow }: { shouldThrow?: boolean }) => {
    if (shouldThrow) {
      throw new Error("Gallery error")
    }
    return <div>Gallery Component</div>
  },
}))

describe("SafeGallery Component", () => {
  const originalConsoleError = console.error
  beforeAll(() => {
    console.error = jest.fn()
  })
  afterAll(() => {
    console.error = originalConsoleError
  })

  test("renderuje komponent Gallery, gdy nie ma błędu", () => {
    render(<SafeGallery />)
    expect(screen.getByText("Gallery Component")).toBeInTheDocument()
  })

  test("wyświetla komunikat o błędzie, gdy Gallery rzuca błąd", () => {
    render(<SafeGallery shouldThrow={true} />)
    expect(screen.getByText("Przepraszamy, wystąpił problem z galerią")).toBeInTheDocument()
    expect(screen.getByText("Spróbuj odświeżyć stronę")).toBeInTheDocument()
  })
})
