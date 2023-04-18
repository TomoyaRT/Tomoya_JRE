import {
  Front_End,
  Animation,
  Back_End,
  Other,
  Damai_Logo,
  Damai_Menu_Page,
  Damai_QR_Code_Page,
  Damai_Wallet_Page,
  App_Icon,
  Easy_Eat,
  Mask_Map,
  Tomoya_JRE,
} from '@/constants/Public'

const Colors = {
  white: '#FFFFFF',
  blue: 'blue-text-gradient',
  green: 'green-text-gradient',
  pink: 'pink-text-gradient',
}

const Head = {
  title: 'Head.Title',
  description: 'Head.Description',
  icon: App_Icon,
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
    icon: Front_End,
    description: ['TypeScript', 'Vue', 'Vuex', 'React', 'Redux', 'Next.js'],
  },
  {
    title: 'AboutCards.Animation',
    icon: Animation,
    description: ['Framer Motion', 'GSAP', 'Anime.js', 'Canvas', 'Three.js'],
  },
  {
    title: 'AboutCards.BackEnd',
    icon: Back_End,
    description: ['Node.js', 'Express', 'Mongo DB'],
  },
  {
    title: 'AboutCards.Other',
    icon: Other,
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
      name: 'Tomoya-JRE',
      description: 'Portfolio.TomoyaJRE',
      tags: [
        {
          name: 'Next.js',
          color: Colors.blue,
        },
        {
          name: 'TypeScript',
          color: Colors.blue,
        },
        {
          name: 'Redux',
          color: Colors.blue,
        },
        {
          name: 'Tailwind CSS',
          color: Colors.green,
        },
        {
          name: 'Framer Motion',
          color: Colors.green,
        },
        {
          name: 'Canvas',
          color: Colors.green,
        },
        {
          name: 'Three.js',
          color: Colors.green,
        },
        {
          name: 'i18n',
          color: Colors.pink,
        },
      ],
      image: Tomoya_JRE,
    },
    {
      name: 'Mask-Map',
      description: 'Portfolio.MaskMap',
      tags: [
        {
          name: 'JavaScript',
          color: Colors.blue,
        },
        {
          name: 'Vue2',
          color: Colors.blue,
        },
        {
          name: 'Vuex',
          color: Colors.blue,
        },
        {
          name: 'SCSS',
          color: Colors.green,
        },
        {
          name: 'Bootstrap',
          color: Colors.green,
        },
        {
          name: 'Leaflet',
          color: Colors.pink,
        },
      ],
      image: Mask_Map,
    },
    {
      name: 'Easy-Eat',
      description: 'Portfolio.EasyEat',
      tags: [
        {
          name: 'JavaScript',
          color: Colors.blue,
        },
        {
          name: 'Vue2',
          color: Colors.blue,
        },
        {
          name: 'Vue Router',
          color: Colors.blue,
        },
        {
          name: 'SCSS',
          color: Colors.green,
        },
        {
          name: 'Chart',
          color: Colors.green,
        },
        {
          name: 'Vee-Validate',
          color: Colors.pink,
        },
        {
          name: 'Axios',
          color: Colors.pink,
        },
      ],
      image: Easy_Eat,
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
      icon: Damai_Logo,
      iconBg: Colors.white,
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
      icon: Damai_Logo,
      iconBg: Colors.white,
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
      icon: Damai_Logo,
      iconBg: Colors.white,
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
      Damai_Menu_Page,
      Damai_QR_Code_Page,
      Damai_Wallet_Page,
      Damai_QR_Code_Page,
      Damai_Wallet_Page,
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
      image: Damai_Logo,
    },
    {
      testimonial: 'BookClub.Jim.Testimonial',
      name: 'BookClub.Jim.Name',
      designation: 'BookClub.Jim.Designation',
      company: 'BookClub.Jim.Company',
      image: Damai_Logo,
    },
    {
      testimonial: 'BookClub.Karol.Testimonial',
      name: 'BookClub.Karol.Name',
      designation: 'BookClub.Karol.Designation',
      company: 'BookClub.Karol.Company',
      image: Damai_Logo,
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

export {
  Head,
  Hero,
  About,
  Portfolio,
  AboutCards,
  Journey,
  WorkExperience,
  BookClub,
  Contact,
}
