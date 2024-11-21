'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, Book, Info, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

        <Button 
          variant="ghost" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>

        <ul className="hidden md:flex space-x-4">
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

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <ul className="flex flex-col p-4">
              <li className="mb-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                </Button>
              </li>
              <li className="mb-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/techniques" className="flex items-center gap-2">
                    <Book className="w-4 h-4" />
                    Techniques
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/about" className="flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    About
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
