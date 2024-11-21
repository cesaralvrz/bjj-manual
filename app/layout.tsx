import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/navbar'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BJJ Techniques Library',
  description: 'A collection of Brazilian Jiu-Jitsu techniques',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
            <div className="fixed bottom-4 right-4">
              <ModeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

