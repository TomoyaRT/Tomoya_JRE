let particles = []
let particle
let soundFirework

function createFirework({ p, fireworkR, particleR }) {
  soundFirework.play()
  soundFirework.setVolume(random(0.3) * random())

  push()
  colorMode(HSB)
  const baseHue = 300
  const particleCount = random(100, 200)
  for (let i = 0; i < particleCount; i++) {
    const hue = baseHue + random(60)
    const endHue = (100 + baseHue + random(120)) % 360
    const config = {
      p: p ? p.copy() : createVector(width / 2, height / 2),
      v: p5.Vector.random2D().mult(random(1, fireworkR ?? 3)),
      a: createVector(0, 0.03),
      r: particleR ? random(particleR) : random(width / 100),
      color: color(hue, 360, 360),
      endColor: color(endHue, 360, 360),
    }
    let particle = new Particle(config)
    particles.push(particle)
  }
  pop()
}

function preload() {
  soundFirework = loadSound('firework.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(color('#050816'))
}

function draw() {
  fill(5, 8, 22, 8)
  rect(0, 0, width, height)

  push()
  blendMode(SCREEN)
  for (let particle of particles) {
    particle.update()
    particle.draw()
  }
  pop()

  if (frameCount % 100 === 0) {
    for (let i = 0; random(2, 5) > i; i++) {
      createFirework({
        p: createVector(random(width), 100 + random(height / 5)),
      })
    }
  }

  particles = particles.filter(
    (particle) => particle.p.y < height || particle.r > 0.5
  )
}
