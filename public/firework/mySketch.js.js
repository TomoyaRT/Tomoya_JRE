let particles = []
let particle
let audioInput
let lastFrameCount = 0
let isMousePressed = false
let soundFirework

function createFirework({ p, fireworkR, particleR }) {
  soundFirework.play()
  soundFirework.setVolume(random(0.3) * random())

  push()
  colorMode(HSB)
  const baseHue = random(300)
  const particleCount = random(100, 200)
  for (let i = 0; i < particleCount; i++) {
    const hue = (baseHue + random(120)) % 360
    const endHue = (100 + baseHue + random(120)) % 360
    const config = {
      p: p ? p.copy() : createVector(width / 2, height / 2),
      v: p5.Vector.random2D().mult(random(1, fireworkR ?? 5)),
      a: createVector(0, 0.05),
      r: particleR ? random(particleR) : random(40),
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
  createFirework({})
  audioInput = new p5.AudioIn()
  audioInput.start()
}

function draw() {
  const audioVolume = audioInput.getLevel()
  const isSpeaking = audioVolume > 0.1

  fill(5, 8, 22, 15)
  rect(0, 0, width, height)

  push()
  blendMode(SCREEN)
  for (let particle of particles) {
    particle.update()
    particle.draw()
  }
  pop()

  if (frameCount % 100 === 0) {
    const config = {
      p: createVector(random(width), random(height)),
    }
    createFirework(config)
  }

  if (isSpeaking && frameCount - lastFrameCount > 5) {
    lastFrameCount = frameCount
    const config = {
      p: createVector(random(width), random(height)),
      fireworkR: random(1, 10),
      particleR: random(1, 15),
    }
    createFirework(config)
  }

  particles = particles.filter(
    (particle) => particle.p.y < height || particle.r > 0.5
  )
}

function mousePressed() {
  isMousePressed = true
  const config = {
    p: createVector(mouseX, mouseY),
    fireworkR: random(0.2, 15),
    particleR: random(5, 15),
  }
  createFirework(config)
}
