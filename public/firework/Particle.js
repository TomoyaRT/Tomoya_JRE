class Particle {
  constructor(args) {
    const def = {
      // Position
      p: createVector(0, 0),
      // Velocity
      v: createVector(0, 0),
      // Acceleration
      a: createVector(0, 0),
      // Radius
      r: 10,
      color: color('red'),
      endColor: color('blue'),
      curve: random(5),
      curveFreq: random(2, 40),
    }

    Object.assign(def, args)
    Object.assign(this, def)
  }
  draw() {
    push()
    // 去除軌跡上多餘的線條
    noStroke()
    translate(
      this.p.x + sin(this.p.y / this.curveFreq) * this.curve,
      this.p.y + cos(this.p.x / this.curveFreq) * this.curve
    )
    fill(this.color)
    circle(0, 0, this.r)

    // 煙火的霧氣
    const copyColor = color(this.color.toString())
    copyColor.setAlpha(8)
    for (let i = 0; i < 5; i += 1) {
      fill(copyColor)
      circle(0, 0, (this.r * i) / 2)
    }
    pop()
  }
  update() {
    this.p.add(this.v)
    this.v.add(this.a)
    this.r *= 0.973
    this.color = lerpColor(this.color, this.endColor, 0.02)
  }
}
