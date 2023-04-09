import {
  mobile,
  backend,
  creator,
  web,
  damaiLogo,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  carrent,
  jobit,
  tripguide,
} from '@/utils/public'
import { Route } from '@/types'

const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/blog',
    name: 'Blog',
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
  },
]

const head = {
  title: 'My Portfolio Website',
  description: 'Generated by create next app',
  icon: '/favicon.ico',
}

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

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

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
  routes,
  head,
  hero,
  about,
  aboutCards,
  journey,
  bookClub,
  contact,
  technologies,
  posts,
}