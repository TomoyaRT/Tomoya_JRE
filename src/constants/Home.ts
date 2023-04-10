import {
  mobile,
  backend,
  creator,
  web,
  carrent,
  jobit,
  tripguide,
  damaiLogo,
  appIcon,
} from '@/constants/Public'

const Routes = [
  {
    path: '/',
    name: 'Routes.Home',
  },
  {
    path: '/blog',
    name: 'Routes.Blog',
  },
  {
    path: '/portfolio',
    name: 'Routes.Portfolio',
  },
]
const Head = {
  title: 'Head.Title',
  description: 'Head.Description',
  icon: appIcon,
}
const Hero = ['Hero.0', 'Hero.1', 'Hero.2', 'Hero.3']
const About = ['About.0', 'About.1', 'About.2']
const AboutCards = [
  {
    title: 'AboutCards.Home',
    icon: web,
  },
  {
    title: 'AboutCards.Portfolio',
    icon: mobile,
  },
  {
    title: 'AboutCards.Blog',
    icon: backend,
  },
  {
    title: 'AboutCards.Resume',
    icon: creator,
  },
]
const Journey = {
  title: 'Journey.Title',
  subTitle: 'Journey.SubTitle',
  data: [
    {
      title: 'Journey.SelfTaught.Title',
      company_name: 'Journey.SelfTaught.CompanyName',
      icon: web,
      iconBg: '#ffffff',
      date: 'Journey.SelfTaught.Date',
      points: [
        // 購買 hexschool 的課程自學前端技能
        'Journey.SelfTaught.Points.0',
        // 購買 tenlong 書局的書籍學習 JavaScript 與 Vue
        'Journey.SelfTaught.Points.1',
        // 看 Youtuber Amos 的教學影片學習 HTML 與 CSS
        'Journey.SelfTaught.Points.2',
      ],
    },
    {
      title: 'Journey.FrontEndDeveloper.Title',
      company_name: 'Journey.FrontEndDeveloper.CompanyName',
      icon: damaiLogo,
      iconBg: '#ffffff',
      date: 'Journey.FrontEndDeveloper.Date',
      points: [
        // 負責開發與維護訂餐網站的前後台專案
        'Journey.FrontEndDeveloper.Points.0',
        // 開發訂位服務，並串接Line LIFF與行事曆功能，提供使用者更方便地使用訂位服務。
        'Journey.FrontEndDeveloper.Points.1',
        // 串接 JKO Pay 金流與 JKO APP 的服務，提供更多元的支付方式。
        'Journey.FrontEndDeveloper.Points.2',
        // 串接 Bank SinoPac 金流，開發儲值金服務，包括 QR Code 掃碼，儲值金方案等服務。
        'Journey.FrontEndDeveloper.Points.3',
      ],
    },
    {
      title: 'Journey.Relearning.Title',
      company_name: 'Journey.Relearning.CompanyName',
      icon: web,
      iconBg: '#ffffff',
      date: 'Journey.Relearning.Date',
      points: [
        // 購買 Udemy 平台的 Next.js 課程學習 SSR, SSG, ISR 與 API Routes 的相關知識
        'Journey.Relearning.Points.0',
        // 購買 HiSKIO 的 React 課程學習 React, React Router, Redux 的相關知識
        'Journey.Relearning.Points.1',
        // 購買 Three.js Journey 的 Three.js 課程學習 3D 網站製作的基礎知識
        'Journey.Relearning.Points.2',
        // 透過 Youtube 與 官方文件學習使用 Framer Motion 與 Anime.js 建構動畫
        'Journey.Relearning.Points.3',
      ],
    },
  ],
}

const bookClub = {
  title: 'Book Club',
  subTitle: 'Design Pattern',
  thoughts: [
    {
      testimonial:
        'This book club has allowed me to truly appreciate the power of collective brainstorming. Every time, I am able to hear new ideas and insights. Through this exchange and learning, I am able to accelerate my passion for learning new technologies.',
      name: 'Roger',
      designation: 'Front-End',
      company: 'Damai Internet',
      image: damaiLogo,
    },
    {
      testimonial:
        "Attending book club has made me realize that persistence, even if only a little bit, can lead to remarkable progress over several months. In the process of teaching and learning, it's easier to identify my strengths and weaknesses and feedback is crucial.",
      name: 'Jim',
      designation: 'Front-End',
      company: 'Damai Internet',
      image: damaiLogo,
    },
    {
      testimonial:
        "Attending book club gives me the motivation to understand unfamiliar knowledge. During presentations, I learn how to express ideas in a simple and understandable way. By listening to members' explanations and trying to approach topics from different angles, it becomes a joyful time of growth with my peers.",
      name: 'Karol',
      designation: 'Full-Stack',
      company: 'Damai Internet',
      image: damaiLogo,
    },
  ],
}

const contact = {
  title: 'Book Club',
  subTitle: 'Design Pattern',
  form: {
    name: {
      title: 'Your Name',
      placeholder: "What's your name?",
    },
    email: {
      title: 'Your Email',
      placeholder: "What's your email?",
    },
    message: {
      title: 'Your Message',
      placeholder: 'What do you want to say?',
    },
    button: ['Send', 'Sending...'],
  },
}

const posts = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
  },
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
  },
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
  },
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
  },
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
  },
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
  },
]

export {
  Routes,
  Head,
  Hero,
  About,
  AboutCards,
  Journey,
  bookClub,
  contact,
  posts,
}
