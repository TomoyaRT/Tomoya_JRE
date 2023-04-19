import { cond, constant } from '@/plugins/Lodash'

const computer = {
  scale: cond([
    [(width: number) => width > 1280, constant(0.75)],
    [(width: number) => width > 1000, constant(0.7)],
    [(width: number) => width > 900, constant(0.65)],
    [(width: number) => width > 800, constant(0.6)],
    [(width: number) => width > 700, constant(0.55)],
    [(width: number) => width > 600, constant(0.475)],
    [(width: number) => width > 500, constant(0.4)],
    [(width: number) => width > 400, constant(0.35)],
    [(width: number) => width > 300, constant(0.3)],
    [() => true, constant(0.25)],
  ]) as (width: number) => number,
  position: cond([
    [(width: number) => width > 1280, constant([0, -3.25, -1.5])],
    [(width: number) => width > 1000, constant([0, -3.25, -1])],
    [(width: number) => width > 900, constant([0, -3.25, -1])],
    [(width: number) => width > 800, constant([0, -3.25, -1])],
    [(width: number) => width > 700, constant([0, -3, -0.75])],
    [(width: number) => width > 600, constant([0, -2.5, -0.65])],
    [(width: number) => width > 500, constant([0, -2.5, -0.5])],
    [() => true, constant([0, -2, -0.45])],
  ]) as (width: number) => number[],
  lightPosition: cond([
    [(width: number) => width > 1280, constant([-20, 50, 10])],
    [(width: number) => width > 1000, constant([10, 50, 50])],
    [(width: number) => width > 900, constant([20, 50, 50])],
    [(width: number) => width > 800, constant([20, 20, 15])],
    [(width: number) => width > 700, constant([10, 30, 20])],
    [(width: number) => width > 600, constant([5, 40, 10])],
    [(width: number) => width > 500, constant([5, 40, 10])],
    [(width: number) => width > 400, constant([20, 50, 30])],
    [(width: number) => width > 300, constant([40, 30, 20])],
    [() => true, constant([40, 30, 20])],
  ]) as (width: number) => [x: number, y: number, z: number],
}

export { computer }
