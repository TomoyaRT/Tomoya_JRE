import dynamic from 'next/dynamic'
import { i18n } from 'next-i18next'

import ParticlesText from '@/components/canvas/ParticlesText'
const Firework = dynamic(() => import('@/p5/Firework'), {
  ssr: false,
})

const English = {
  width: 350,
  height: 100,
  font: '25px Arial',
  text: ["Hi I'm Roger"],
  textX: [17.5],
  textY: [35],
  color: '#7737ff',
  mouseR: 30,
}

const Chinese = {
  width: 350,
  height: 100,
  font: '25px Arial',
  text: ['Hi 我是煒皓'],
  textX: [22],
  textY: [35],
  color: '#7737ff',
  mouseR: 30,
}

const Japanese = {
  width: 380,
  height: 175,
  font: '22.5px Arial',
  text: ['こんにちは', '私はともやです'],
  textX: [35, 16],
  textY: [35, 70],
  color: '#7737ff',
  mouseR: 30,
}

const Hero: React.FC = () => {
  const lang = i18n?.language ?? 'en'

  const LanguageParticlesText = {}
  Reflect.set(LanguageParticlesText, 'en', English)
  Reflect.set(LanguageParticlesText, 'tw', Chinese)
  Reflect.set(LanguageParticlesText, 'jp', Japanese)

  return (
    <section className="w-full h-screen mx-auto">
      <Firework />
      <div className="relative inline-block inset-1/2 transform -translate-y-1/2 -translate-x-1/2 z-30">
        <ParticlesText setting={Reflect.get(LanguageParticlesText, lang)} />
      </div>
    </section>
  )
}

export default Hero
