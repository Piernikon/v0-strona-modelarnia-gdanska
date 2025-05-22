"use client"

import { useState, useEffect } from "react"
import { getPerformanceMetrics, clearPerformanceMetrics } from "@/lib/performance-testing/measure-performance"
import { getPagePerformanceMetrics, clearPagePerformanceMetrics } from "@/lib/performance-testing/page-performance"

export function PerformanceDashboard() {
  const [componentMetrics, setComponentMetrics] = useState([])
  const [pageMetrics, setPageMetrics] = useState([])
  const [activeTab, setActiveTab] = useState("components")

  useEffect(() => {
    // Pobierz metryki przy montowaniu komponentu
    setComponentMetrics(getPerformanceMetrics())
    setPageMetrics(getPagePerformanceMetrics())
  }, [])

  const handleClearComponentMetrics = () => {
    clearPerformanceMetrics()
    setComponentMetrics([])
  }

  const handleClearPageMetrics = () => {
    clearPagePerformanceMetrics()
    setPageMetrics([])
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString()
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Performance Dashboard</h2>

      <div className="flex mb-4 border-b">
        <button
          className={`px-4 py-2 ${activeTab === "components" ? "border-b-2 border-blue-500 font-bold" : ""}`}
          onClick={() => setActiveTab("components")}
        >
          Component Metrics
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "pages" ? "border-b-2 border-blue-500 font-bold" : ""}`}
          onClick={() => setActiveTab("pages")}
        >
          Page Metrics
        </button>
      </div>

      {activeTab === "components" && (
        <>
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-semibold">Component Performance Metrics</h3>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleClearComponentMetrics}
            >
              Clear Metrics
            </button>
          </div>

          {componentMetrics.length === 0 ? (
            <p>No component metrics available.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Component</th>
                    <th className="py-2 px-4 border-b">Render Time (ms)</th>
                    <th className="py-2 px-4 border-b">Re-render Time (ms)</th>
                    <th className="py-2 px-4 border-b">Memory (MB)</th>
                    <th className="py-2 px-4 border-b">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {componentMetrics.map((metric, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-4 border-b">{metric.componentName}</td>
                      <td className="py-2 px-4 border-b">{metric.renderTime.toFixed(2)}</td>
                      <td className="py-2 px-4 border-b">{metric.rerenderTime.toFixed(2)}</td>
                      <td className="py-2 px-4 border-b">
                        {metric.memoryUsage ? (metric.memoryUsage / (1024 * 1024)).toFixed(2) : "N/A"}
                      </td>
                      <td className="py-2 px-4 border-b">{formatDate(metric.timestamp)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {activeTab === "pages" && (
        <>
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-semibold">Page Performance Metrics</h3>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleClearPageMetrics}
            >
              Clear Metrics
            </button>
          </div>

          {pageMetrics.length === 0 ? (
            <p>No page metrics available.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">URL</th>
                    <th className="py-2 px-4 border-b">Load Time (ms)</th>
                    <th className="py-2 px-4 border-b">First Paint (ms)</th>
                    <th className="py-2 px-4 border-b">First Contentful Paint (ms)</th>
                    <th className="py-2 px-4 border-b">DOM Content Loaded (ms)</th>
                    <th className="py-2 px-4 border-b">DOM Complete (ms)</th>
                    <th className="py-2 px-4 border-b">Resources</th>
                    <th className="py-2 px-4 border-b">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {pageMetrics.map((metric, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="py-2 px-4 border-b">{metric.url}</td>
                      <td className="py-2 px-4 border-b">{metric.loadTime.toFixed(2)}</td>
                      <td className="py-2 px-4 border-b">{metric.firstPaint ? metric.firstPaint.toFixed(2) : "N/A"}</td>
                      <td className="py-2 px-4 border-b">
                        {metric.firstContentfulPaint ? metric.firstContentfulPaint.toFixed(2) : "N/A"}
                      </td>
                      <td className="py-2 px-4 border-b">{metric.domContentLoaded.toFixed(2)}</td>
                      <td className="py-2 px-4 border-b">{metric.domComplete.toFixed(2)}</td>
                      <td className="py-2 px-4 border-b">{metric.resourcesLoaded}</td>
                      <td className="py-2 px-4 border-b">{formatDate(metric.timestamp)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  )
}
