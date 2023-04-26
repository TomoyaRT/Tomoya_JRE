import React, { useRef, useEffect } from 'react'

type ParticlesTextProps = {
  setting: {
    width: number
    height: number
    font: string
    text: string[]
    textX: number[]
    textY: number[]
    color: string
    mouseR: number
  }
}
type Mouse = {
  x: number
  y: number
  radius: number
}

function draw(particle: Particle, context: CanvasRenderingContext2D) {
  context.beginPath()
  context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
  context.closePath()
  context.fill()
}
function update(particle: Particle, mouse: Mouse) {
  const dx = mouse.x - particle.x
  const dy = mouse.y - particle.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  const forceDirectionX = dx / distance
  const forceDirectionY = dy / distance
  const maxDistance = mouse.radius
  const force = (maxDistance - distance) / maxDistance
  const directionX = forceDirectionX * force * particle.density
  const directionY = forceDirectionY * force * particle.density

  if (distance < mouse.radius) {
    particle.x -= directionX
    particle.y -= directionY
  } else {
    if (particle.x !== particle.baseX) {
      const dx = particle.x - particle.baseX
      particle.x -= dx / 10
    }
    if (particle.y !== particle.baseY) {
      const dy = particle.y - particle.baseY
      particle.y -= dy / 10
    }
  }
}

const ParticlesText = ({ setting }: ParticlesTextProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { width, height, color, font, text, textX, textY, mouseR } = setting

  useEffect(() => {
    // Variables
    const mouse = {
      x: 0,
      y: 0,
      radius: mouseR,
    }
    let particles: Particle[] = []
    let animationFrameId: number

    // Canvas
    const canvas = canvasRef.current as HTMLCanvasElement
    canvas.width = width
    canvas.height = height

    // Context
    const context = canvas.getContext('2d', {
      willReadFrequently: true,
    }) as CanvasRenderingContext2D
    context.fillStyle = color
    context.font = font
    context.fillText(text[0], textX[0], textY[0])
    text[1] && context.fillText(text[1], textX[1], textY[1])
    const textCoordinates = context.getImageData(0, 0, width, height)

    // Web Worker
    const worker = new Worker(
      new URL('@/webWorker/ParticlesText', import.meta.url)
    )
    worker.postMessage(textCoordinates)
    worker.addEventListener('message', (e) => {
      particles = e.data
    })

    // 更新粒子的繪製
    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]
        draw(particle, context)
        update(particle, mouse)
      }
    }

    const render = () => {
      animate()
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    // PC
    window.addEventListener('mousemove', (e) => {
      const canvasRect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - canvasRect.left
      mouse.y = e.clientY - canvasRect.top
    })

    // Mobile
    window.addEventListener('touchmove', (e) => {
      const canvasRect = canvas.getBoundingClientRect()
      const touch = e.touches[0] as Touch
      mouse.x = touch.clientX - canvasRect.left
      mouse.y = touch.clientY - canvasRect.top
    })

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [setting.text])

  return <canvas ref={canvasRef} />
}

export default ParticlesText
