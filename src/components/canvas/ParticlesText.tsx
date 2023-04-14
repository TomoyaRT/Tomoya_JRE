import React, { useRef, useEffect } from 'react'

const ParticlesText = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Setting
    const Size = {
      width: 500,
      height: 200,
    }
    const Text = {
      fillStyle: 'white',
      font: '20px Arial',
      fillText: {
        text: "I'm Roger",
        x: 0,
        y: 20,
      },
    }
    const Mouse = {
      x: null,
      y: null,
      radius: 65,
    }
    const particleArray = []

    // Canvas | Context
    const canvas = canvasRef.current
    canvas.width = Size.width
    canvas.height = Size.height
    const context = canvas.getContext('2d', { willReadFrequently: true })
    context.fillStyle = Text.fillStyle
    context.font = Text.font
    context.fillText(Text.fillText.text, Text.fillText.x, Text.fillText.y)

    const textCoordinates = context.getImageData(0, 0, 100, 30)
    let animationFrameId

    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 2
        this.baseX = this.x
        this.baseY = this.y
        this.density = Math.random() * 30 + 15
      }

      draw() {
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
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
            particleArray.push(new Particle(x * 5, y * 5))
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
  }, [])

  return (
    <canvas className="absolute top-0 left-0 z-20" ref={canvasRef} {...props} />
  )
}

export default ParticlesText
