import { constant as _constant, cond as _cond } from 'lodash-es'

const computer = {
  scale: _cond([
    [(width: number) => width > 1280, _constant(0.75)],
    [(width: number) => width > 1000, _constant(0.7)],
    [(width: number) => width > 900, _constant(0.65)],
    [(width: number) => width > 800, _constant(0.6)],
    [(width: number) => width > 700, _constant(0.55)],
    [(width: number) => width > 600, _constant(0.475)],
    [(width: number) => width > 500, _constant(0.4)],
    [(width: number) => width > 400, _constant(0.35)],
    [(width: number) => width > 300, _constant(0.3)],
    [() => true, _constant(0.25)],
  ]),
  position: _cond([
    [(width: number) => width > 1280, _constant([0, -3.25, -1.5])],
    [(width: number) => width > 1000, _constant([0, -3.25, -1])],
    [(width: number) => width > 900, _constant([0, -3.25, -1])],
    [(width: number) => width > 800, _constant([0, -3.25, -1])],
    [(width: number) => width > 700, _constant([0, -3, -0.75])],
    [(width: number) => width > 600, _constant([0, -2.5, -0.65])],
    [(width: number) => width > 500, _constant([0, -2, -0.5])],
    [(width: number) => width > 400, _constant([0, -1, -0.45])],
    [(width: number) => width > 300, _constant([0, -1, -0.45])],
    [() => true, _constant([0, -1, -0.45])],
  ]),
  lightPosition: _cond([
    [(width: number) => width > 1280, _constant([-20, 50, 10])],
    [(width: number) => width > 1000, _constant([10, 50, 50])],
    [(width: number) => width > 900, _constant([20, 50, 50])],
    [(width: number) => width > 800, _constant([20, 20, 15])],
    [(width: number) => width > 700, _constant([10, 30, 20])],
    [(width: number) => width > 600, _constant([5, 40, 10])],
    [(width: number) => width > 500, _constant([5, 40, 10])],
    [(width: number) => width > 400, _constant([20, 50, 30])],
    [(width: number) => width > 300, _constant([40, 30, 20])],
    [() => true, _constant([40, 30, 20])],
  ]),
}

export { computer }
