import dynamic from 'next/dynamic'
import SectionWrapper from '@/hoc/SectionWrapper'
import { Text } from '@/constants'
const { technologies } = Text

const BallCanvas = dynamic(() => import('@/components/canvas/Ball'), {
  ssr: false,
})

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')
