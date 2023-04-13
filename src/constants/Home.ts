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
const About = {
  title: 'About.Title',
  subTitle: 'About.SubTitle',
  description: 'About.Description',
}
const AboutCards = [
  {
    title: 'AboutCards.FrontEnd',
    icon: web,
    description: ['Vue', 'Vuex', 'React', 'Redux', 'Next.js', 'TypeScript'],
  },
  {
    title: 'AboutCards.Animation',
    icon: mobile,
    description: ['Framer Motion', 'GSAP', 'Anime.js', 'Canvas', 'Three.js'],
  },
  {
    title: 'AboutCards.BackEnd',
    icon: backend,
    description: ['Node.js', 'Express', 'Mongo DB'],
  },
  {
    title: 'AboutCards.Other',
    icon: creator,
    description: [
      'Jest',
      'Cypress',
      'Git',
      'Docker',
      'SOLID',
      'Design Patterns',
    ],
  },
]
const Portfolio = {
  title: 'Portfolio.Title',
  subTitle: 'Portfolio.SubTitle',
  data: [
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
  ],
}
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
        'Journey.SelfTaught.Points.0',
        'Journey.SelfTaught.Points.1',
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
        'Journey.FrontEndDeveloper.Points.0',
        'Journey.FrontEndDeveloper.Points.1',
        'Journey.FrontEndDeveloper.Points.2',
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
        'Journey.Relearning.Points.0',
        'Journey.Relearning.Points.1',
        'Journey.Relearning.Points.2',
        'Journey.Relearning.Points.3',
      ],
    },
  ],
}
const WorkExperience = {
  title: 'WorkExperience.Title',
  subTitle: 'WorkExperience.SubTitle',
  data: {
    images: [
      './work/menu_page.png',
      './work/qrcode_page.png',
      './work/wallet_page.png',
      './work/menu_page.png',
      './work/menu_page.png',
    ],
    description: [
      'WorkExperience.Description.0',
      'WorkExperience.Description.1',
      'WorkExperience.Description.2',
      'WorkExperience.Description.3',
      'WorkExperience.Description.4',
      'WorkExperience.Description.5',
    ],
  },
}
const BookClub = {
  title: 'BookClub.Title',
  subTitle: 'BookClub.SubTitle',
  thoughts: [
    {
      testimonial: 'BookClub.Roger.Testimonial',
      name: 'BookClub.Roger.Name',
      designation: 'BookClub.Roger.Designation',
      company: 'BookClub.Roger.Company',
      image: damaiLogo,
    },
    {
      testimonial: 'BookClub.Jim.Testimonial',
      name: 'BookClub.Jim.Name',
      designation: 'BookClub.Jim.Designation',
      company: 'BookClub.Jim.Company',
      image: damaiLogo,
    },
    {
      testimonial: 'BookClub.Karol.Testimonial',
      name: 'BookClub.Karol.Name',
      designation: 'BookClub.Karol.Designation',
      company: 'BookClub.Karol.Company',
      image: damaiLogo,
    },
  ],
}
const Contact = {
  title: 'Contact.Title',
  subTitle: 'Contact.SubTitle',
  form: {
    name: {
      title: 'Contact.Name.Title',
      placeholder: 'Contact.Name.Placeholder',
    },
    email: {
      title: 'Contact.Email.Title',
      placeholder: 'Contact.Email.Placeholder',
    },
    message: {
      title: 'Contact.Message.Title',
      placeholder: 'Contact.Message.Placeholder',
    },
    button: ['Contact.Button.0', 'Contact.Button.1'],
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
  Portfolio,
  AboutCards,
  Journey,
  WorkExperience,
  BookClub,
  Contact,
  posts,
}
