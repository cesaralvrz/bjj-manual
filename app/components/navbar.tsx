import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, Book, Info } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <span className="size-8 rounded-full bg-primary flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-primary-foreground">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
              <path d="M6.5 7h11" />
              <path d="M6.5 11h5" />
              <path d="M6.5 15h5" />
            </svg>
          </span>
          BJJ Manual
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="/techniques" className="flex items-center gap-2">
                <Book className="w-4 h-4" />
                Techniques
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" asChild>
              <Link href="/about" className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                About
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
