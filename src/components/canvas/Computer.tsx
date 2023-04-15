import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import useViewport from '@/hooks/useViewport'
import CanvasLoader from '@/components/canvas/Loader'
import { computer } from '@/constants/Canvas'
import { Computer_Model } from '@/constants/Public'

interface ComputerProps {
  computerScale: number
  computerPosition: number[]
  lightPosition: number[] | any
}
const Computer = (props: ComputerProps) => {
  const { computerScale, computerPosition, lightPosition } = props
  const computer = useGLTF(Computer_Model)

  return (
    <>
      <mesh>
        <pointLight intensity={1} />
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
        />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas
