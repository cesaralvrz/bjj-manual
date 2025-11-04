"use client"

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Globe, Sword, Shield, ArrowUp } from 'lucide-react'
import { techniques } from '@/app/data/techniques'
import { uiTranslations } from '@/app/translations/ui'
import type { Language } from '@/app/data/techniques'

export default function Techniques() {
  const defaultCategory = techniques[0]
  const defaultSubcategory: 'attack' | 'defense' =
    (defaultCategory?.items || []).some(i => i.subcategory === 'attack') ? 'attack' : 'defense'

  const [activeTechnique, setActiveTechnique] = useState<string | null>(
    defaultCategory?.items.find(i => i.subcategory === defaultSubcategory)?.id || null
  )
  const [language, setLanguage] = useState<Language>('en')
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory?.category || '')
  const [selectedSubcategory, setSelectedSubcategory] = useState<'attack' | 'defense'>(defaultSubcategory)
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    defaultCategory?.category ? { [defaultCategory.category]: true } : {}
  )
  const [openSubcategories, setOpenSubcategories] = useState<Record<string, boolean>>(
    defaultCategory?.category
      ? { [`${defaultCategory.category}::${defaultSubcategory}`]: true }
      : {}
  )
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Show back-to-top after scrolling down a bit
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop
      setShowBackToTop(y > 400)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
                      {/* Attack subsection (collapsible) */}
                      {category.items.some((t) => t.subcategory === 'attack') && (
                        <Collapsible
                          open={openSubcategories[`${category.category}::attack`]}
                          onOpenChange={(isOpen) => {
                            setOpenSubcategories(prev => ({
                              ...prev,
                              [`${category.category}::attack`]: isOpen
                            }))
                          }}
                        >
                          <CollapsibleTrigger
                            className="flex w-full items-center justify-between py-1 text-xs font-medium lowercase text-primary"
                            onClick={() => {
                              setSelectedCategory(category.category)
                              setSelectedSubcategory('attack')
                            }}
                          >
                            <span className="flex items-center gap-1">
                              <Sword className="h-3 w-3" />
                              {uiTranslations[language].subcategories.attack}
                            </span>
                            <ChevronDown 
                              className={`h-3 w-3 transition-transform duration-200 ${
                                openSubcategories[`${category.category}::attack`] ? 'transform rotate-180' : ''
                              }`}
                            />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="space-y-1 pl-2">
                            {category.items
                              .filter((t) => t.subcategory === 'attack')
                              .map((technique) => (
                                <Button
                                  key={technique.id}
                                  variant="ghost"
                                  className="w-full justify-start whitespace-normal h-auto text-left"
                                  onClick={() => {
                                    setSelectedCategory(category.category)
                                    setSelectedSubcategory(technique.subcategory)
                                    setOpenCategories(prev => ({
                                      ...prev,
                                      [category.category]: true,
                                    }))
                                    setOpenSubcategories(prev => ({
                                      ...prev,
                                      [`${category.category}::${technique.subcategory}`]: true,
                                    }))
                                    setActiveTechnique(technique.id)
                                    if (typeof window !== 'undefined') {
                                      window.requestAnimationFrame(() => {
                                        document
                                          .getElementById(technique.id)
                                          ?.scrollIntoView({ behavior: 'smooth' })
                                      })
                                    }
                                  }}
                                >
                                  {technique.title[language]}
                                </Button>
                              ))}
                          </CollapsibleContent>
                        </Collapsible>
                      )}

                      {/* Defense subsection (collapsible) */}
                      {category.items.some((t) => t.subcategory === 'defense') && (
                        <Collapsible
                          open={openSubcategories[`${category.category}::defense`]}
                          onOpenChange={(isOpen) => {
                            setOpenSubcategories(prev => ({
                              ...prev,
                              [`${category.category}::defense`]: isOpen
                            }))
                          }}
                        >
                          <CollapsibleTrigger
                            className="flex w-full items-center justify-between py-1 text-xs font-medium lowercase text-primary"
                            onClick={() => {
                              setSelectedCategory(category.category)
                              setSelectedSubcategory('defense')
                            }}
                          >
                            <span className="flex items-center gap-1">
                              <Shield className="h-3 w-3" />
                              {uiTranslations[language].subcategories.defense}
                            </span>
                            <ChevronDown 
                              className={`h-3 w-3 transition-transform duration-200 ${
                                openSubcategories[`${category.category}::defense`] ? 'transform rotate-180' : ''
                              }`}
                            />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="space-y-1 pl-2">
                            {category.items
                              .filter((t) => t.subcategory === 'defense')
                              .map((technique) => (
                                <Button
                                  key={technique.id}
                                  variant="ghost"
                                  className="w-full justify-start whitespace-normal h-auto text-left"
                                  onClick={() => {
                                    setSelectedCategory(category.category)
                                    setSelectedSubcategory(technique.subcategory)
                                    setOpenCategories(prev => ({
                                      ...prev,
                                      [category.category]: true,
                                    }))
                                    setOpenSubcategories(prev => ({
                                      ...prev,
                                      [`${category.category}::${technique.subcategory}`]: true,
                                    }))
                                    setActiveTechnique(technique.id)
                                    if (typeof window !== 'undefined') {
                                      window.requestAnimationFrame(() => {
                                        document
                                          .getElementById(technique.id)
                                          ?.scrollIntoView({ behavior: 'smooth' })
                                      })
                                    }
                                  }}
                                >
                                  {technique.title[language]}
                                </Button>
                              ))}
                          </CollapsibleContent>
                        </Collapsible>
                      )}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
        
        <div className="lg:w-3/4 space-y-8">
          {(techniques.find(c => c.category === selectedCategory)?.items
            .filter(item => item.subcategory === selectedSubcategory) || [])
            .map((technique) => (
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
      {/* Back to top button */}
      {showBackToTop && (
        <Button
          aria-label="Back to top"
          className="fixed bottom-6 right-6 h-10 w-10 rounded-full shadow-lg"
          variant="default"
          size="icon"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
