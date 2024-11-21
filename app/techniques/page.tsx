"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Globe } from 'lucide-react'
import { techniques } from '@/app/data/techniques'
import { uiTranslations } from '@/app/translations/ui'
import type { Language } from '@/app/data/techniques'

export default function Techniques() {
  const [activeTechnique, setActiveTechnique] = useState<string | null>(null)
  const [language, setLanguage] = useState<Language>('en')
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{uiTranslations[language].pageTitle}</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleLanguage}
          className="rounded-full"
        >
          <Globe className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="lg:w-1/4 h-fit">
          <CardHeader>
            <CardTitle>{uiTranslations[language].techniqueIndex}</CardTitle>
            <CardDescription>{uiTranslations[language].clickToView}</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-auto">
              <div className="space-y-4">
                {techniques.map((category) => (
                  <Collapsible 
                    key={category.category}
                    open={openCategories[category.category]}
                    onOpenChange={(isOpen) => {
                      setOpenCategories(prev => ({
                        ...prev,
                        [category.category]: isOpen
                      }))
                    }}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
                      {uiTranslations[language].categories[category.category]}
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openCategories[category.category] ? 'transform rotate-180' : ''
                        }`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 pl-4">
                      {category.items.map((technique) => (
                        <Button
                          key={technique.id}
                          variant="ghost"
                          className="w-full justify-start whitespace-normal h-auto text-left"
                          onClick={() => {
                            setActiveTechnique(technique.id)
                            document.getElementById(technique.id)?.scrollIntoView({ behavior: 'smooth' })
                          }}
                        >
                          {technique.title[language]}
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
          {techniques.flatMap((category) => category.items.map(item => ({
            ...item,
            id: item.id,
            title: item.title,
            description: item.description,
            videoUrl: item.videoUrl
          }))).map((technique) => (
            <Card 
              key={technique.id} 
              id={technique.id}
              className={`${activeTechnique === technique.id ? 'ring-2 ring-primary' : ''}`}
            >
              <CardHeader>
                <CardTitle>{technique.title[language]}</CardTitle>
                <CardDescription>{technique.description[language]}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video">
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
