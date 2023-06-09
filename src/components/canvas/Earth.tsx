import { Suspense } from 'react'
import { Canvas } from '@/plugins/Three'
import { OrbitControls, Preload, useGLTF } from '@/plugins/Three'
import CanvasLoader from '@/components/canvas/Loader'
import { Planet_Model } from '@/constants/Public'

const Earth = () => {
  const earth = useGLTF(Planet_Model)

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    ></primitive>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      className="cursor-pointer"
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
