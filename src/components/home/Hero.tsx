import dynamic from 'next/dynamic'

const Firework = dynamic(() => import('@/p5/Firework'), {
  ssr: false,
})

const Hero = () => {
  return (
    <section className="w-full h-screen">
      <Firework />
    </section>
  )
}

export default Hero
