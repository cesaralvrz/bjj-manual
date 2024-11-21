import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/app/contexts/language-context"

export function Navbar() {
  const { toggleLanguage } = useLanguage()

  return (
    <nav className="border-b">
      <div className="container flex items-center justify-between h-16">
        {/* Your other navbar content */}
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full"
          >
            <Globe className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
} 