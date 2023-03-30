import { Props, directionMapping } from '@/types/animation'

export const fadeIn = ({ direction, type, delay, duration }: Props) => {
  const isXAxis = direction === 'left' || direction === 'right'
  const isYAxis = direction === 'up' || direction === 'down'

  return {
    hidden: {
      x: isXAxis ? directionMapping(type, direction) : 0,
      y: isYAxis ? directionMapping(type, direction) : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  }
}
