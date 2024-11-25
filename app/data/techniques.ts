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
          es: 'Estrangulación de Triángulo'
        },
        description: {
          en: 'The triangle choke is a chokehold that strangles the opponent using their own shoulder and your legs.',
          es: 'La estrangulación de triángulo es una técnica que estrangula al oponente usando su propio hombro y tus piernas.'
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
          en: 'Swing Move in Stacked Armbar',
          es: 'Swing Move en Llave de Brazo cuando hay defensa'
        },
        description: {
          en: 'The solution when the opponent is defending the armbar. We weave through the legs and catch the far leg and spin underneath. this off balances him and makes him fall. Then we grab the leg and pull.',
          es: 'La solución cuando el oponente defiende la llave de brazo. Pasamos por las piernas y atrapamos la pierna más alejada y giramos debajo. Esto desequilibra y hace que caiga. Después cogemos la pierna por arriba y estiramos.'
        },
        videoUrl: 'https://www.youtube.com/embed/P5wWnMrihCU?si=OKn0AhSW6VH8j4lm'
      },
      {
        id: 'scissor-sweep ',
        title: {
          en: 'Scissor Sweep',
          es: 'Scissor Sweep'
        },
        description: {
          en: 'Basic sweep from closed or open guard, where you use your leg like scissors to off-balance your opponent while pulling their arm towards you.',
          es: 'Barrido básico desde la guardia cerrada o abierta, donde usas tu pierna como una "tijera" para desequilibrar al oponente mientras tiras de su brazo hacia ti.'
        },
        videoUrl: 'https://www.youtube.com/embed/P5wWnMrihCU?si=OKn0AhSW6VH8j4lm'
      },
      {
        id: 'pendulum-sweep ',
        title: {
          en: 'Pendulum Sweep to Mount',
          es: 'Raspada de Peédulo a Montada'
        },
        description: {
          en: 'The pendulum sweep to mount uses a swinging leg motion to off-balance the opponent and transition directly to mount.',
          es: 'La raspada de péndulo a la montada utiliza un movimiento de pierna de cadera creando un péndulo para desequilibrar al oponente y pasar directamente a la montada.'
        },
        videoUrl: 'https://youtube.com/embed/xVjxhuBQT6c?si=tsFd_iQltiXqJSLv'
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