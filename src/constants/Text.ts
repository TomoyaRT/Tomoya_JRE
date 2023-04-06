import { mobile, backend, creator, web, damaiLogo } from '@/utils/public'

const hero = [
  'Hi, I`m',
  'Roger',
  'I am a front-end engineer, who',
  'enjoys web interaction effects.',
]

const about = [
  'Introduction',
  'Overview',
  'This is my first personal website, and I hope that through it, people can get to know me in a short amount of time. Here is what I expect the website to include.',
]

const aboutCards = [
  {
    title: 'Home Page',
    icon: web,
  },
  {
    title: 'Portfolio',
    icon: mobile,
  },
  {
    title: 'Blog',
    icon: backend,
  },
  {
    title: 'Resume',
    icon: creator,
  },
]

const journey = {
  title: 'Learning Journey',
  subTitle: 'My experience in the software industry.',
  data: [
    {
      title: 'Self-Taught Programming',
      company_name: 'Home',
      icon: web,
      iconBg: '#ffffff',
      date: 'January 2021 - November 2021',
      points: [
        // 購買 hexschool 的課程自學前端技能
        "Purchase Hexschool's courses to learn front-end skills through self-study.",
        // 購買 tenlong 書局的書籍學習 JavaScript 與 Vue
        'Buy books from Tenlong Bookstore to learn JavaScript and Vue.',
        // 看 Youtuber Amos 的教學影片學習 HTML 與 CSS
        "Learn HTML and CSS by watching Amos's tutorial videos on YouTube.",
      ],
    },
    {
      title: 'Front-end Developer',
      company_name: 'DAMAI Internet',
      icon: damaiLogo,
      iconBg: '#ffffff',
      date: 'November 2021 - February 2023',
      points: [
        // 負責開發與維護訂餐網站的前後台專案
        'Responsible for developing and maintaining the front-end and back-end of a food ordering website project.',
        // 開發訂位服務，並串接Line LIFF與行事曆功能，提供使用者更方便地使用訂位服務。
        'Develop a reservation service and integrate Line LIFF and calendar functions to provide users with a more convenient booking experience.',
        // 串接 JKO Pay 金流與 JKO APP 的服務，提供更多元的支付方式。
        'Integrate JKO Pay payment system with JKO APP service to provide a more diverse payment method.',
        // 串接 Bank SinoPac 金流，開發儲值金服務，包括 QR Code 掃碼，儲值金方案等服務。
        "Integrate Bank SinoPac's payment system and develop a stored value service that includes QR code scanning, stored value plans, and other related services.",
      ],
    },
    {
      title: 'After Resignation',
      company_name: 'Home',
      icon: web,
      iconBg: '#ffffff',
      date: 'February 2023 - May 2023',
      points: [
        // 購買 Udemy 平台的 Next.js 課程學習 SSR, SSG, ISR 與 API Routes 的相關知識
        'Purchase the Next.js course on Udemy to learn about SSR, SSG, ISR, and API Routes related knowledge.',
        // 購買 HiSKIO 的 React 課程學習 React, React Router, Redux 的相關知識
        'Purchase the React course on HiSKIO to learn about React, React Router, and Redux related knowledge.',
        // 購買 Three.js Journey 的 Three.js 課程學習 3D 網站製作的基礎知識
        'Purchase the Three.js course on Three.js Journey to learn the basics of creating 3D websites.',
        // 透過 Youtube 與 官方文件學習使用 Framer Motion 與 Anime.js 建構動畫
        'Learn how to create animations using Framer Motion and Anime.js by watching tutorial videos on YouTube and reading the official documentation.',
      ],
    },
  ],
}

export { hero, about, aboutCards, journey }
