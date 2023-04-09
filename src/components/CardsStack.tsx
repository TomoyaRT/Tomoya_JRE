import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import cardsStack from '@/styles/home/cardsStack.module.css'

const cards = [
  './work/menu_page.png',
  './work/qrcode_page.png',
  './work/wallet_page.png',
  './work/menu_page.png',
  './work/menu_page.png',
]

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

function Deck() {
  const [gone] = useState(() => new Set())
  const [props, api] = useSprings(cards.length, (i) => ({
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
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear()
          api.start((i) => to(i))
        }, 800)
    }
  )

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={cardsStack.deck} key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  )
}

function CardsStack() {
  return (
    <div className={cardsStack.container}>
      <Deck />
    </div>
  )
}

export default CardsStack
