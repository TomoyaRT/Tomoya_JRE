import ReactConfetti from 'react-confetti'
import useViewport from '@/hooks/useViewport'

const Confetti = () => {
  const { width, height } = useViewport()
  return (
    <ReactConfetti
      width={width}
      height={height}
      numberOfPieces={1000}
      recycle={false}
      tweenDuration={2000}
    />
  )
}

export default Confetti
