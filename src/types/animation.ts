export enum Direction {
  Left = 'left',
  Right = 'right',
  Up = 'up',
  Down = 'down',
}

export enum Type {
  FadeIn = 'fadeIn',
}

export interface Props {
  direction: Direction
  type: Type
  delay: number
  duration: number
}

type DirectionMapping = {
  [key in Direction]: number
}

type TypeMapping = {
  [key in Type]: DirectionMapping
}

const typeMapping: TypeMapping = {
  [Type.FadeIn]: {
    [Direction.Left]: 100,
    [Direction.Right]: -100,
    [Direction.Up]: 100,
    [Direction.Down]: -100,
  },
}

export const directionMapping = (type: Type, direction: Direction) => {
  return typeMapping[type][direction]
}
