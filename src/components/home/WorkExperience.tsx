import SectionWrapper from '@/hoc/SectionWrapper'
import CardsStack from '@/components/home/CardsStack'
import SectionHead from '@/components/home/SectionHead'
import WorkDescription from '@/components/home/WorkDescription'

const itemData = [
  '第一點哦 聽清楚了1',
  '第一點哦 聽清楚了2',
  '第一點哦 聽清楚了3',
  '第一點哦 聽清楚了4',
  '第一點哦 聽清楚了5',
]

const cards = [
  './work/menu_page.png',
  './work/qrcode_page.png',
  './work/wallet_page.png',
  './work/menu_page.png',
  './work/menu_page.png',
]

const WorkExperience = () => {
  return (
    <div className="flex flex-col">
      <SectionHead
        title={'工作經歷'}
        subTitle={'我在工作中產生的價值'}
        styleType="hero"
      />
      <div className="w-full mt-10 flex flex-col md:flex-row  justify-between  items-center">
        <div className="w-[55vw] h-[45vh] min-w-[375px] min-h-[375px] mb-10 md:min-w-0 md:min-h-0 md:mb-0 md:w-[45vw] md:h-[55vh] lg:w-[35vw] lg:h-[55vh]">
          <WorkDescription data={itemData} />
        </div>
        <div className="w-[55vw] h-[45vh] min-w-[375px] min-h-[375px] md:min-w-0 md:min-h-0 md:w-[45vw] md:h-[55vh] lg:w-[35vw] lg:h-[55vh]">
          <CardsStack data={cards} />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(WorkExperience, '')
