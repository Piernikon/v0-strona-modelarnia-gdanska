import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Footer from "@/components/footer"
import jest from "jest"

describe("Footer Component", () => {
  beforeEach(() => {
    // Mockowanie window.matchMedia
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it("renders the footer with copyright information", () => {
    render(<Footer />)

    // Sprawdzenie, czy rok w prawach autorskich jest obecny
    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })

  it("renders social media links", () => {
    render(<Footer />)

    // Sprawdzenie, czy linki do mediów społecznościowych są obecne
    const socialLinks = screen.getAllByRole("link")
    expect(socialLinks.length).toBeGreaterThan(0)

    // Sprawdzenie, czy link do Instagrama jest obecny
    const instagramLink = socialLinks.find((link) => link.getAttribute("href")?.includes("instagram.com"))
    expect(instagramLink).toBeInTheDocument()

    // Sprawdzenie, czy link do Facebooka jest obecny
    const facebookLink = socialLinks.find((link) => link.getAttribute("href")?.includes("facebook.com"))
    expect(facebookLink).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    render(<Footer />)

    // Sprawdzenie, czy linki nawigacyjne są obecne
    expect(screen.getByText(/Strona główna/i)).toBeInTheDocument()
    expect(screen.getByText(/Usługi/i)).toBeInTheDocument()
    expect(screen.getByText(/Projekty/i)).toBeInTheDocument()
    expect(screen.getByText(/Kontakt/i)).toBeInTheDocument()
  })

  it("renders contact information", () => {
    render(<Footer />)

    // Sprawdzenie, czy informacje kontaktowe są obecne
    expect(screen.getByText(/Modelarnia Gdańska/i)).toBeInTheDocument()
    expect(screen.getByText(/kontakt@modelarniagdanska.pl/i)).toBeInTheDocument()
    expect(screen.getByText(/\+48 123 456 789/i)).toBeInTheDocument()
  })
})
