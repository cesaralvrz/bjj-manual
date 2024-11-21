export const techniques = [
  {
    category: "Guard Techniques",
    items: [
        {
            id: 'hitbump-triangle',
            title: {
                en: 'Hip Bump Sweep to Triangle Choke',
                es: 'Hip Bump Sweep a Triángulo'
            },
            description: {
                en: 'The Hip Bump Sweep to Triangle Choke involves using a powerful hip bump to destabilize your opponent from guard, transitioning into a triangle choke if they resist or post their arm.',
                es: 'El Hip Bump Sweep to Triangle Choke consiste en usar un fuerte impulso de cadera para desequilibrar al oponente desde la guardia, transicionando a un triángulo si resisten o apoyan su brazo.'
            },
            videoUrl: 'https://www.youtube.com/embed/3LBG8NutL1U?si=FON5JnjUxoai211E'
        },
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
          en: 'Top-Lock to Armbar from Guard',
          es: 'Top-Lock a Llave de Brazo desde Guardia Cerrada'
        },
        description: {
          en: 'Top Lock is a guard control where you trap your opponents head and one arm with your legs. The armbar from guard is a joint lock that hyperextends the elbow.',
          es: 'El Top Lock es un control desde la guardia donde atrapas la cabeza y un brazo del oponente (la clave es que no se vea el hombro). La palanca al brazo desde la guardia es un bloqueo articular que hiperextiende el codo.'
        },
        videoUrl: 'https://www.youtube.com/embed/3jPFNnKfA80'
      },
      {
        id: 'armbar-from-guard-stacked',
        title: {
          en: 'Stacked Armbar',
          es: 'Llave de Brazo cuando hay defensa'
        },
        description: {
          en: 'Top Lock is a guard control where you trap your opponents head and one arm with your legs. The armbar from guard is a joint lock that hyperextends the elbow.',
          es: 'El Top Lock es un control desde la guardia donde atrapas la cabeza y un brazo del oponente (la clave es que no se vea el hombro). La palanca al brazo desde la guardia es un bloqueo articular que hiperextiende el codo.'
        },
        videoUrl: 'https://www.youtube.com/embed/P5wWnMrihCU?si=OKn0AhSW6VH8j4lm'
      },
    ]
  },
  {
    category: "Defense Techniques",
    items: [
      {
        id: 'escape-guard',
        title: {
          en: 'Escape Close Guard (Gi)',
          es: 'Salir de guardia cerrada (gi)'
        },
        description: {
          en: 'To open closed guard with a gi, grip your opponent’s sleeve, plant one foot on the ground, stand up while controlling their arm, and use your knee to press down on their leg, forcing the guard to open.',
          es: 'Para abrir la guardia cerrada con gi, sujeta la manga de tu oponente, apoya un pie en el suelo, ponte de pie mientras controlas su brazo y utiliza tu rodilla para presionar sobre su pierna, forzando la apertura de la guardia.'
        },
        videoUrl: 'https://www.youtube.com/embed/Bn7WId-nl0A?si=Hcs5FIg80v_wBelp'
      },
    ]
  },
] as const

export type Language = 'en' | 'es'

export type Technique = {
  id: string
  title: string
  description: string
  videoUrl: string
} 