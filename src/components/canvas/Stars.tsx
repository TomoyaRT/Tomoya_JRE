import { useRef, Suspense } from 'react'
import { BufferGeometry, Material, Points } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  PointMaterial,
  Points as PointsComponent,
  Preload,
} from '@react-three/drei'
import { random } from 'maath'

type elType = {
  rotation: {
    x: number
    y: number
  }
}

const Stars = () => {
  const ref = useRef<Points<BufferGeometry, Material | Material[]>>(null)

  const sphere: Float32Array = new Float32Array(
    random.inSphere(new Float64Array(4500), { radius: 1.2 })
  )

  useFrame((state, delta) => {
    if (ref.current) {
      const el: elType = ref.current
      el.rotation.x -= delta / 10
      el.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <PointsComponent ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </PointsComponent>
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
