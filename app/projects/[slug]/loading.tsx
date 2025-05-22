import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectLoading() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section Skeleton */}
        <div className="relative py-24 bg-[#00330a] dark:bg-[#001a05] text-white">
          <div className="container px-4 md:px-6">
            <Skeleton className="h-6 w-32 bg-zinc-700 mb-6" />
            <Skeleton className="h-12 w-3/4 bg-zinc-700" />
            <div className="flex flex-wrap gap-4 mt-4">
              <Skeleton className="h-6 w-32 bg-zinc-700" />
              <Skeleton className="h-6 w-32 bg-zinc-700" />
              <Skeleton className="h-6 w-32 bg-zinc-700" />
            </div>
          </div>
        </div>

        {/* Main Content Skeleton */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Project Content Skeleton */}
              <div className="lg:col-span-2">
                {/* Main Image Skeleton */}
                <Skeleton className="w-full aspect-video rounded-lg mb-8" />

                {/* Project Description Skeleton */}
                <div className="space-y-4">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                </div>

                {/* Content Skeleton */}
                <div className="mt-6 space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>

                {/* Gallery Skeleton */}
                <div className="mt-12">
                  <Skeleton className="h-8 w-48 mb-6" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Skeleton className="w-full aspect-video rounded-lg" />
                    <Skeleton className="w-full aspect-video rounded-lg" />
                    <Skeleton className="w-full aspect-video rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Sidebar Skeleton */}
              <div className="space-y-8">
                {/* Project Tags Skeleton */}
                <div className="bg-muted rounded-lg p-6">
                  <Skeleton className="h-6 w-32 mb-4" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                </div>

                {/* Related Projects Skeleton */}
                <div>
                  <Skeleton className="h-6 w-40 mb-4" />
                  <div className="space-y-4">
                    {[1, 2].map((_, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <Skeleton className="w-20 h-20 rounded-md flex-shrink-0" />
                        <div className="space-y-2">
                          <Skeleton className="h-5 w-32" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Skeleton */}
                <div className="bg-[#00330a] dark:bg-[#001a05] rounded-lg p-6">
                  <Skeleton className="h-6 w-48 mb-2 bg-zinc-700" />
                  <Skeleton className="h-4 w-full mb-4 bg-zinc-700" />
                  <Skeleton className="h-10 w-full bg-zinc-700" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
