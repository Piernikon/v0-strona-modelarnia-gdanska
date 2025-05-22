"use client"

import { useState } from "react"
import { PerformanceDashboard } from "@/components/performance/performance-dashboard"
import { measurePagePerformance, savePagePerformanceMetrics } from "@/lib/performance-testing/page-performance"
import { PerformanceProfiler } from "@/components/performance/performance-profiler"
import Gallery from "@/components/gallery"
import ServicesGrid from "@/components/services-grid"
import HeroSection from "@/components/hero-section"

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

export default function PerformanceTestsPage() {
  const [galleryItemCount, setGalleryItemCount] = useState(6)
  const [servicesCount, setServicesCount] = useState(6)
  const [pageUrl, setPageUrl] = useState("/")
  const [isRunningPageTest, setIsRunningPageTest] = useState(false)
  const [pageTestResult, setPageTestResult] = useState(null)

  const handleRunPageTest = async () => {
    setIsRunningPageTest(true)
    try {
      const metrics = await measurePagePerformance(pageUrl)
      savePagePerformanceMetrics(metrics)
      setPageTestResult(metrics)
    } catch (error) {
      console.error("Error running page performance test:", error)
      alert("Error running page performance test. See console for details.")
    } finally {
      setIsRunningPageTest(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Performance Tests</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Gallery Performance Test</h2>
          <div className="mb-4">
            <label className="block mb-2">Number of items:</label>
            <input
              type="range"
              min="1"
              max="20"
              value={galleryItemCount}
              onChange={(e) => setGalleryItemCount(Number.parseInt(e.target.value))}
              className="w-full"
            />
            <span>{galleryItemCount} items</span>
          </div>

          <div className="border p-4 rounded bg-gray-50">
            <PerformanceProfiler id="gallery-test">
              <Gallery images={createMockImages(galleryItemCount)} />
            </PerformanceProfiler>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Services Grid Performance Test</h2>
          <div className="mb-4">
            <label className="block mb-2">Number of services:</label>
            <input
              type="range"
              min="1"
              max="15"
              value={servicesCount}
              onChange={(e) => setServicesCount(Number.parseInt(e.target.value))}
              className="w-full"
            />
            <span>{servicesCount} services</span>
          </div>

          <div className="border p-4 rounded bg-gray-50">
            <PerformanceProfiler id="services-grid-test">
              <ServicesGrid services={createMockServices(servicesCount)} />
            </PerformanceProfiler>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Hero Section Performance Test</h2>

        <div className="border p-4 rounded bg-gray-50">
          <PerformanceProfiler id="hero-section-test">
            <HeroSection />
          </PerformanceProfiler>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Page Performance Test</h2>

        <div className="mb-4">
          <label className="block mb-2">Page URL:</label>
          <div className="flex">
            <input
              type="text"
              value={pageUrl}
              onChange={(e) => setPageUrl(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-l"
              placeholder="Enter page URL (e.g., /services)"
            />
            <button
              onClick={handleRunPageTest}
              disabled={isRunningPageTest}
              className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 disabled:bg-blue-300"
            >
              {isRunningPageTest ? "Running..." : "Run Test"}
            </button>
          </div>
        </div>

        {pageTestResult && (
          <div className="border p-4 rounded bg-gray-50">
            <h3 className="font-semibold mb-2">Test Results:</h3>
            <ul>
              <li>Load Time: {pageTestResult.loadTime.toFixed(2)} ms</li>
              <li>First Paint: {pageTestResult.firstPaint ? pageTestResult.firstPaint.toFixed(2) + " ms" : "N/A"}</li>
              <li>
                First Contentful Paint:{" "}
                {pageTestResult.firstContentfulPaint ? pageTestResult.firstContentfulPaint.toFixed(2) + " ms" : "N/A"}
              </li>
              <li>DOM Content Loaded: {pageTestResult.domContentLoaded.toFixed(2)} ms</li>
              <li>DOM Complete: {pageTestResult.domComplete.toFixed(2)} ms</li>
              <li>Resources Loaded: {pageTestResult.resourcesLoaded}</li>
            </ul>
          </div>
        )}
      </div>

      <PerformanceDashboard />
    </div>
  )
}
