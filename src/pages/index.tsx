// TODO mobile navbar 還沒寫好跳轉頁面
// TODO Work Component / Send Email API and Server / 多語系
// TODO 先給一張圖片 等他 Loading 再換 3D modal
// NOTE 在寫 Work Component 前 Home 很順暢
// NOTE 偵測滑鼠 到目標位置提示使用者可以互動 (3D Model, Card, Particles Text...)

import dynamic from 'next/dynamic'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Journey from '@/components/home/Journey'
import BookClub from '@/components/home/BookClub'
import Contact from '@/components/home/Contact'
const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
  ssr: false,
})

const Home: React.FC = () => {
  return (
    <div className="relative z-0">
      <div className="home-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Journey />
      <BookClub />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default Home
