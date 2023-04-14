import dynamic from 'next/dynamic'
import GradientLine from '@/components/home/GradientLine'
import HeroText from '@/components/home/HeroText'
import ScrollDownButton from '@/components/home/ScrollDownButton'

const ComputersCanvas = dynamic(() => import('@/components/canvas/Computer'), {
  ssr: false,
})

const Hero: React.FC = () => {
  return (
    <div className="bg-home-pattern bg-cover bg-no-repeat bg-center">
      <section className="relative w-full h-screen mx-auto">
        <GradientLine />
        <HeroText />
        <ComputersCanvas />
        <ScrollDownButton />
      </section>
    </div>
  )
}

export default Hero
