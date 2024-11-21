"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from 'lucide-react'

// This would typically come from a database or API
const techniques = [
  {
    category: "Guard Techniques",
    items: [
      {
        id: 'triangle',
        title: 'Triangle Choke',
        description: 'The triangle choke is a chokehold that strangles the opponent using their own shoulder and your legs.',
        videoUrl: 'https://www.youtube.com/embed/LDE0fkzZT6I'
      },
      {
        id: 'armbar-from-guard',
        title: 'Armbar from Guard',
        description: 'The armbar from guard is a joint lock that hyperextends the elbow.',
        videoUrl: 'https://www.youtube.com/embed/pQ43Oy5k9yQ'
      },
    ]
  },
  {
    category: "Mount Techniques",
    items: [
      {
        id: 'armbar-from-mount',
        title: 'Armbar from Mount',
        description: 'The armbar from mount is a powerful submission that isolates the opponents arm from a dominant position.',
        videoUrl: 'https://www.youtube.com/embed/pQ43Oy5k9yQ'
      },
      {
        id: 'ezekiel-choke',
        title: 'Ezekiel Choke',
        description: 'The Ezekiel choke is a powerful chokehold that can be applied from various positions, including mount.',
        videoUrl: 'https://www.youtube.com/embed/pQ43Oy5k9yQ'
      },
    ]
  },
  {
    category: "Back Control Techniques",
    items: [
      {
        id: 'rear-naked-choke',
        title: 'Rear Naked Choke',
        description: 'The rear naked choke is a blood choke applied from behind the opponent.',
        videoUrl: 'https://www.youtube.com/embed/pQ43Oy5k9yQ'
      },
      {
        id: 'bow-and-arrow-choke',
        title: 'Bow and Arrow Choke',
        description: 'The bow and arrow choke is a variation of the collar choke applied from the back control position.',
        videoUrl: 'https://www.youtube.com/embed/pQ43Oy5k9yQ'
      },
    ]
  },
]

export default function Techniques() {
  const [activeTechnique, setActiveTechnique] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">BJJ Techniques</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="lg:w-1/4">
          <CardHeader>
            <CardTitle>Technique Index</CardTitle>
            <CardDescription>Click a technique to view details</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[60vh]">
              <div className="space-y-4">
                {techniques.map((category) => (
                  <Collapsible key={category.category}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
                      {category.category}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 pl-4">
                      {category.items.map((technique) => (
                        <Button
                          key={technique.id}
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => {
                            setActiveTechnique(technique.id)
                            document.getElementById(technique.id)?.scrollIntoView({ behavior: 'smooth' })
                          }}
                        >
                          {technique.title}
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
        
        <div className="lg:w-3/4 space-y-8">
          {techniques.flatMap(category => category.items).map((technique) => (
            <Card 
              key={technique.id} 
              id={technique.id}
              className={`${activeTechnique === technique.id ? 'ring-2 ring-primary' : ''}`}
            >
              <CardHeader>
                <CardTitle>{technique.title}</CardTitle>
                <CardDescription>{technique.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={technique.videoUrl} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full rounded-md"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
