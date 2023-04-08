import { Text } from '@/constants'
const { hero: heroText } = Text

const HeroText: React.FC = () => {
  return (
    <div>
      <h1 className="hero-head-text">
        {heroText[0]} <span className="text-[#915eff]">{heroText[1]}</span>
      </h1>
      <p className="hero-sub-text mt-2 text-white-100">
        {heroText[2]}
        <br className="sm:block hidden" /> {heroText[3]}
      </p>
    </div>
  )
}

export default HeroText
