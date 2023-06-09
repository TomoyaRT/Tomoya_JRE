import { Suspense } from 'react'
import { OrbitControls, Preload, useGLTF, Canvas } from '@/plugins/Three'

import useViewport from '@/hooks/useViewport'
import CanvasLoader from '@/components/canvas/Loader'
import { computer } from '@/constants/Canvas'
import { Computer_Model } from '@/constants/Public'

interface ComputerProps {
  computerScale: number
  computerPosition: number[]
  lightPosition: [x: number, y: number, z: number]
  pointLightPosition: [x: number, y: number, z: number]
}

const Computer = (props: ComputerProps) => {
  const { computerScale, computerPosition, lightPosition, pointLightPosition } =
    props
  const computer = useGLTF(Computer_Model)

  return (
    <>
      <mesh>
        <pointLight intensity={1} position={pointLightPosition} />
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={lightPosition}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={computer.scene}
          scale={computerScale}
          position={computerPosition}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  )
}

const ComputerCanvas = () => {
  const { width } = useViewport()
  const computerScale = computer.scale(width)
  const computerPosition = computer.position(width)
  const lightPosition = computer.lightPosition(width)
  const pointLightPosition = computer.pointLightPosition(width)

  return (
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer
          computerScale={computerScale}
          computerPosition={computerPosition}
          lightPosition={lightPosition}
          pointLightPosition={pointLightPosition}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas
