import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PointMaterial, Points, Preload } from '@react-three/drei'
import { random } from 'maath'

type elType = {
  rotation: {
    x: number
    y: number
  }
}

const Stars = (props: any) => {
  const ref = useRef()
  const sphere = random.inSphere(new Float32Array(4500), { radius: 1.2 })

  useFrame((state, delta) => {
    if (ref.current) {
      const el: elType = ref.current
      el.rotation.x -= delta / 10
      el.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{
          position: [0, 0, 1],
        }}
      >
        <Suspense fallback={null}>
          <Stars />
          <Preload />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarsCanvas
