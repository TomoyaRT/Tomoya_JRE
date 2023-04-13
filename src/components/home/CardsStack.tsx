import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`

type CardsStackProps = {
  data: string[]
}
const CardsStack = ({ data }: CardsStackProps) => {
  const [gone] = useState(() => new Set())
  const [springs, api] = useSprings(data.length, (i) => ({
    ...to(i),
    from: from(),
  }))

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.1
      if (!active && trigger) gone.add(index)
      api.start((i) => {
        if (index !== i) return
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0)
        const scale = active ? 1.1 : 1
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        }
      })
      if (!active && gone.size === data.length)
        setTimeout(() => {
          gone.clear()
          api.start((i) => to(i))
        }, 800)
    }
  )

  return (
    <div className="w-full h-full flex justify-center items-center relative overflow-x-hidden cursor-cards-stack">
      {springs.map(({ x, y, rot, scale }, i) => (
        <animated.div
          className="w-full h-full absolute will-change-transform flex items-center justify-center touch-none"
          key={i}
          style={{ x, y }}
        >
          <animated.div
            {...bind(i)}
            className="bg-white bg-[auto_100%] bg-no-repeat bg-[center_center] touch-none w-[calc(100%/1.75)] h-full rounded-[10px] will-change-transform shadow-cards-stack"
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${data[i]})`,
            }}
          />
        </animated.div>
      ))}
    </div>
  )
}

export default CardsStack
