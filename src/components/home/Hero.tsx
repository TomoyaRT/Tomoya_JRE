import dynamic from 'next/dynamic'
import styles from '@/styles/modules/HeroText.module.css'

const Firework = dynamic(() => import('@/p5/Firework'), {
  ssr: false,
})

const Hero = () => {
  return (
    <section className="w-full h-[50vh]">
      <Firework />
      <div className={styles.title}>
        <span>Hi</span>
        <span>I&apos;m</span>
        <h1>Roger</h1>
      </div>
    </section>
  )
}

export default Hero
