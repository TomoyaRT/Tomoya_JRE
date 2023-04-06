import { constant as _constant, cond as _cond } from 'lodash-es'
import { Direction, Ease, Type } from '@/types'

const getAxisValue = (value = 0) => {
  return _cond([
    [
      (direction: Direction) => direction === Direction.Left,
      _constant({ x: value, y: 0 }),
    ],
    [
      (direction: Direction) => direction === Direction.Right,
      _constant({ x: -value, y: 0 }),
    ],
    [
      (direction: Direction) => direction === Direction.Up,
      _constant({ x: 0, y: value }),
    ],
    [
      (direction: Direction) => direction === Direction.Down,
      _constant({ x: 0, y: -value }),
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
