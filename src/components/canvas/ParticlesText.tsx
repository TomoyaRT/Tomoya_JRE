import React, { useRef, useEffect } from 'react'

type Props = {
  text: string
  color: string
  font: string
}

const ParticlesText = (props: Props) => {
  const { text, color, font } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Setting
    const Size = {
      width: 190,
      height: 100,
    }
    const Text = {
      fillStyle: color,
      font: `30px ${font}`,
      fillText: {
        text,
        x: 5,
        y: 35,
      },
    }
    const Mouse = {
      x: 0,
      y: 0,
      radius: 30,
    }
    const particleArray: Particle[] = []

    // Canvas | Context
    const canvas = canvasRef.current as HTMLCanvasElement
    canvas.width = Size.width
    canvas.height = Size.height
    const context = canvas.getContext('2d', {
      willReadFrequently: true,
    }) as CanvasRenderingContext2D
    context.fillStyle = Text.fillStyle
    context.font = Text.font
    context.fillText(Text.fillText.text, Text.fillText.x, Text.fillText.y)

    const textCoordinates = context.getImageData(0, 0, 100, 100)
    let animationFrameId: number

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
        this.size = 3.5
        this.baseX = this.x
        this.baseY = this.y
        this.density = Math.random() * 30 + 10
      }

      draw() {
        context.beginPath()
        context.rect(this.x, this.y, this.size, this.size)
        // context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.closePath()
        context.fill()
      }
      update() {
        const dx = Mouse.x - this.x
        const dy = Mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const maxDistance = Mouse.radius
        const force = (maxDistance - distance) / maxDistance
        const directionX = forceDirectionX * force * this.density
        const directionY = forceDirectionY * force * this.density

        if (distance < Mouse.radius) {
          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 10
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 10
          }
        }
      }
    }

    // 生成粒子
    function init() {
      for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
          if (
            textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] >
            128
          ) {
            particleArray.push(new Particle(x * 2, y * 2))
          }
        }
      }
    }
    // 更新粒子的繪製
    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw()
        particleArray[i].update()
      }
    }

    init()
    const render = () => {
      animate()
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    window.addEventListener('mousemove', (e) => {
      const canvasRect = canvas.getBoundingClientRect()
      Mouse.x = e.clientX - canvasRect.left
      Mouse.y = e.clientY - canvasRect.top
    })

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [text])

  return <canvas ref={canvasRef} />
}

export default ParticlesText
