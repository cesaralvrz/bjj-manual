import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Master BJJ Techniques
        </h1>
        <p className="text-xl mb-8 text-muted-foreground">
          Explore and perfect your Brazilian Jiu-Jitsu skills
        </p>
        <Button asChild size="lg">
          <Link href="/techniques">
            Explore Techniques
          </Link>
        </Button>
      </section>
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-4">About This Library</h2>
        <p className="text-lg text-muted-foreground">
          Dive into our comprehensive collection of Brazilian Jiu-Jitsu techniques. 
          Whether you're just starting out or refining advanced moves, you'll find 
          detailed explanations and video demonstrations to support your BJJ journey.
        </p>
      </section>
    </div>
  )
}

