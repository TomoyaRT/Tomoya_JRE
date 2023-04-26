// 接收 Main Thread 的資料
self.addEventListener('message', (event) => {
  const textCoordinates = event.data
  try {
    const particles: Particle[] = createParticles(textCoordinates)
    // 傳遞資料給 Main Thread
    self.postMessage(particles)
  } catch (error) {
    console.log('[Web Worker Error]:', error)
  }
})

// 粒子類別
class Particle {
  x: number
  y: number
  size: number
  baseX: number
  baseY: number
  density: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.size = 2
    this.baseX = this.x
    this.baseY = this.y
    this.density = Math.random() * 30 + 10
  }
}

type TextCoordinates = {
  height: number
  width: number
  data: Uint8ClampedArray
}
// 創建所有的粒子
function createParticles(textCoordinates: TextCoordinates) {
  const particles: Particle[] = []

  for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
    for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
      if (
        textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128
      ) {
        particles.push(new Particle(x * 2, y * 2))
      }
    }
  }

  return particles
}
