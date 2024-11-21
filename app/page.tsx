import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="pt-20 sm:pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Master BJJ Techniques
          </h1>
          <p className="text-2xl mb-8 text-muted-foreground">
            Explore and perfect your Brazilian Jiu-Jitsu skills
          </p>
          <Button asChild size="lg">
            <Link href="/techniques">
              Explore Techniques
            </Link>
          </Button>
        </div>
      </section>
      <hr className="border-slate-200 dark:border-slate-800"/>
      <section className="py-20 mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4">About This Library</h2>
        <p className="text-lg text-muted-foreground">
          Dive into our comprehensive collection of Brazilian Jiu-Jitsu techniques. 
          Whether you&apos;re just starting out or refining advanced moves, you&apos;ll find 
          detailed explanations and video demonstrations to support your BJJ journey.
        </p>
      </section>
    </div>
  )
}

