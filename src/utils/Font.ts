import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  fallback: ['system-ui', 'Roboto', 'Noto Sans', 'arial'],
})

export { poppins }
