import { Skeleton } from "@/components/ui/skeleton"

export default function ProductLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-background">
        {/* Breadcrumb */}
        <div className="bg-muted py-2">
          <div className="container px-4 md:px-6">
            <Skeleton className="h-5 w-64" />
          </div>
        </div>

        {/* Product Section */}
        <section className="py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                {/* Main Image */}
                <Skeleton className="aspect-square w-full rounded-lg" />

                {/* Thumbnails */}
                <div className="flex space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-20 w-20 rounded-md" />
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-5 w-32" />
                </div>

                <div className="flex items-baseline space-x-3">
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>

                <Skeleton className="h-5 w-32" />

                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>

                <div className="space-y-4 pt-4">
                  <div>
                    <Skeleton className="h-6 w-20 mb-2" />
                    <div className="flex flex-wrap gap-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-10 w-20 rounded-md" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <Skeleton className="h-6 w-20 mb-2" />
                    <div className="flex flex-wrap gap-3">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-10 w-16 rounded-md" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <Skeleton className="h-6 w-20 mb-2" />
                    <div className="flex items-center">
                      <Skeleton className="h-10 w-10 rounded-l-md" />
                      <Skeleton className="h-10 w-16" />
                      <Skeleton className="h-10 w-10 rounded-r-md" />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Skeleton className="h-10 flex-1 rounded-md" />
                    <Skeleton className="h-10 flex-1 rounded-md" />
                  </div>

                  <div className="flex gap-3">
                    <Skeleton className="h-9 w-36 rounded-md" />
                    <Skeleton className="h-9 w-24 rounded-md" />
                  </div>

                  <Skeleton className="h-5 w-64" />
                </div>

                <div className="pt-4">
                  <Skeleton className="h-6 w-32 mb-3" />
                  <div className="space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-start">
                        <Skeleton className="h-5 w-5 mr-2 flex-shrink-0" />
                        <Skeleton className="h-5 w-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Product Tabs */}
            <div className="mt-12">
              <div className="border-b">
                <div className="flex space-x-6">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
              <div className="pt-6">
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mt-16">
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <Skeleton className="aspect-square w-full" />
                    <div className="p-4 space-y-3">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-24" />
                      <div className="flex justify-between items-center">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-8 w-8 rounded-md" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
