import { constant, cond } from '@/plugins/Lodash'
import { Direction, Ease, Type } from '@/types'

const getAxisValue = (value = 0) => {
  return cond([
    [
      (direction: Direction) => direction === Direction.Left,
      constant({ x: value, y: 0 }),
    ],
    [
      (direction: Direction) => direction === Direction.Right,
      constant({ x: -value, y: 0 }),
    ],
    [
      (direction: Direction) => direction === Direction.Up,
      constant({ x: 0, y: value }),
    ],
    [
      (direction: Direction) => direction === Direction.Down,
      constant({ x: 0, y: -value }),
    ],
  ])
}

export const fadeIn = (
  direction: Direction,
  type: Type,
  delay: number,
  duration: number,
  ease: Ease
) => {
  const initialAxis = { x: 0, y: 0 }
  const hiddenAxis = getAxisValue(100)(direction) ?? initialAxis
  const visibleAxis = initialAxis

  return {
    hidden: {
      ...hiddenAxis,
      opacity: 0,
    },
    visible: {
      ...visibleAxis,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: ease,
      },
    },
  }
}
