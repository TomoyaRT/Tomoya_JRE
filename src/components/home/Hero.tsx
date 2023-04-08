import dynamic from 'next/dynamic'

import GradientLine from '@/components/home/GradientLine'
import HeroText from '@/components/home/HeroText'
import ScrollDownButton from '@/components/home/ScrollDownButton'

const ComputersCanvas = dynamic(() => import('@/components/canvas/Computer'), {
  ssr: false,
})

// TODO 先給一張圖片 等他 Loading 再換 3D modal

const Hero: React.FC = () => {
  return (
    <div className="bg-home-pattern bg-cover bg-no-repeat bg-center">
      <section className="relative w-full h-screen mx-auto">
        <div
          className={
            'padding-x absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'
          }
        >
          <GradientLine />
          <HeroText />
        </div>
        <ComputersCanvas />
        <ScrollDownButton />
      </section>
    </div>
  )
}

export default Hero
