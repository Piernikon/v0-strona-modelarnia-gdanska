"use client"

import type React from "react"
import { Component, type ErrorInfo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Tutaj można zalogować błąd do serwisu monitorowania błędów
    console.error("ErrorBoundary złapała błąd:", error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Jeśli przekazano własny fallback, użyj go
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Domyślny komponent błędu
      return (
        <div className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border border-red-100 bg-red-50 p-4 text-center dark:border-red-900/30 dark:bg-red-900/10">
          <AlertTriangle className="h-8 w-8 text-red-500" />
          <h3 className="mt-2 text-lg font-medium">Wystąpił błąd w komponencie</h3>
          <p className="mt-1 text-sm text-muted-foreground">{this.state.error?.message || "Nieznany błąd"}</p>
          <Button variant="outline" size="sm" className="mt-4" onClick={() => this.setState({ hasError: false })}>
            Spróbuj ponownie
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

// Komponent wyższego rzędu (HOC) dla łatwiejszego użycia
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode,
): React.FC<P> {
  return (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  )
}
