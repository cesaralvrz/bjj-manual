export const techniques = [
  {
    category: "Guard Techniques",
    items: [
      {
        id: 'triangle',
        title: {
          en: 'Triangle Choke',
          es: 'Estrangulación Triangular'
        },
        description: {
          en: 'The triangle choke is a chokehold that strangles the opponent using their own shoulder and your legs.',
          es: 'La estrangulación triangular es una técnica que estrangula al oponente usando su propio hombro y tus piernas.'
        },
        videoUrl: 'https://www.youtube.com/embed/LDE0fkzZT6I'
      },
      {
        id: 'armbar-from-guard',
        title: {
          en: 'Armbar from Guard',
          es: 'Palanca al Brazo desde la Guardia'
        },
        description: {
          en: 'The armbar from guard is a joint lock that hyperextends the elbow.',
          es: 'La palanca al brazo desde la guardia es un bloqueo articular que hiperextiende el codo.'
        },
        videoUrl: 'https://www.youtube.com/embed/pQ43Oy5k9yQ'
      },
    ]
  },
  {
    category: "Mount Techniques",
    items: [
      {
        id: 'armbar-from-mount',
        title: {
          en: 'Armbar from Mount',
          es: 'Palanca al Brazo desde la Montada'
        },
        description: {
          en: 'The armbar from mount is a powerful submission that isolates the opponents arm from a dominant position.',
          es: 'La palanca al brazo desde la montada es una sumisión poderosa que aísla el brazo del oponente desde una posición dominante.'
        },
        videoUrl: 'https://www.youtube.com/embed/pQ43Oy5k9yQ'
      },
      // ... other techniques
    ]
  },
  // ... other categories
] as const

export type Language = 'en' | 'es'

export type Technique = {
  id: string
  title: string
  description: string
  videoUrl: string
} 