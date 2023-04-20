import dynamic from 'next/dynamic'
import ScrollDownButton from '@/components/home/ScrollDownButton'
import HeroDescription from '@/components/home/HeroDescription'
const ComputersCanvas = dynamic(() => import('@/components/canvas/Computer'), {
  ssr: false,
})

const Hero: React.FC = () => {
  return (
    <div className="bg-home-pattern bg-cover bg-no-repeat bg-center mb-10">
      <section className="relative w-full h-screen mx-auto">
        <HeroDescription />
        <ComputersCanvas />
        <ScrollDownButton />
      </section>
    </div>
  )
}

export default Hero
