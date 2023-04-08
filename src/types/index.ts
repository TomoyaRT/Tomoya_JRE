export interface Route {
  path: string
  name: string
}

export interface ViewportSize {
  width: number
  height: number
}

export interface Transition {
  duration: number
  repeat: number
  repeatType: 'loop' | 'reverse' | 'mirror' | undefined
}

export interface Animate {
  y: number[]
}

export enum Direction {
  Left = 'left',
  Right = 'right',
  Up = 'up',
  Down = 'down',
  None = 'none',
}

export enum Ease {
  Linear = 'linear',
  EaseIn = 'easeIn',
  EaseOut = 'easeOut',
  EaseInOut = 'easeInOut',
  CircIn = 'circIn',
  CircOut = 'circOut',
  CircInOut = 'circInOut',
  BackIn = 'backIn',
  BackOut = 'backOut',
  BackInOut = 'backInOut',
  Anticipate = 'anticipate',
}

export enum Type {
  Spring = 'spring',
  Tween = 'tween',
  Inertia = 'inertia',
}
