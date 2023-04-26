import dynamic from 'next/dynamic'
import ParticlesText from '@/components/canvas/ParticlesText'
const Firework = dynamic(() => import('@/p5/Firework'), {
  ssr: false,
})

const Hero: React.FC = () => {
  return (
    <section className="w-full h-screen mx-auto">
      <Firework />
      <div className="relative inline-block inset-1/2 transform -translate-y-1/2 -translate-x-1/2 z-30">
        <ParticlesText text={'Roger'} color={'#7737ff'} font={'Arial'} />
      </div>
    </section>
  )
}

export default Hero
