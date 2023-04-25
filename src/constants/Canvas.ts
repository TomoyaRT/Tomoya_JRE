import { cond, constant } from '@/plugins/Lodash'

const computer = {
  scale: cond([
    [(width: number) => width > 1280, constant(0.7)],
    [(width: number) => width > 1000, constant(1)],
    [(width: number) => width > 900, constant(0.8)],
    [(width: number) => width > 800, constant(0.7)],
    [(width: number) => width > 700, constant(0.65)],
    [(width: number) => width > 600, constant(0.6)],
    [(width: number) => width > 500, constant(0.6)],
    [() => true, constant(0.5)],
  ]) as (width: number) => number,
  position: cond([
    [(width: number) => width > 1280, constant([0, -1.5, -1.5])],
    [(width: number) => width > 1000, constant([0, -2.5, -1.5])],
    [(width: number) => width > 900, constant([0, -2.5, -1])],
    [(width: number) => width > 800, constant([0, -2, -1])],
    [(width: number) => width > 700, constant([0, -2, -1])],
    [() => true, constant([0, -1.5, -1])],
  ]) as (width: number) => number[],
  pointLightPosition: cond([
    [(width: number) => width > 1280, constant([0, 1.5, 0.5])],
    [(width: number) => width > 900, constant([0, 1, 1])],
    [(width: number) => width > 800, constant([0, 0.75, 1])],
    [(width: number) => width > 700, constant([0, 0.75, 1])],
    [(width: number) => width > 600, constant([0, 0.85, 0.5])],
    [(width: number) => width > 500, constant([0, 0.85, 0.5])],
    [(width: number) => width > 400, constant([0, 0.6, 0.5])],
    [() => true, constant([0, 0.6, 0.5])],
  ]) as (width: number) => [x: number, y: number, z: number],
  lightPosition: cond([
    [(width: number) => width > 1280, constant([-20, 50, 10])],
    [(width: number) => width > 1000, constant([10, 50, 50])],
    [(width: number) => width > 900, constant([20, 50, 50])],
    [(width: number) => width > 800, constant([20, 50, 15])],
    [(width: number) => width > 700, constant([15, 30, 30])],
    [(width: number) => width > 600, constant([5, 40, 10])],
    [(width: number) => width > 500, constant([5, 40, 10])],
    [(width: number) => width > 400, constant([20, 50, 30])],
    [() => true, constant([30, 50, 20])],
  ]) as (width: number) => [x: number, y: number, z: number],
}

export { computer }
