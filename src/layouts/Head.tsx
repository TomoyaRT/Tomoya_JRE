import NextHead from 'next/head'
import { useTranslation } from 'next-i18next'
import { Head as HeadText } from '@/constants/Home'

const Head: React.FC = () => {
  const { t } = useTranslation('Home')
  const title = t(HeadText.title)
  const description = t(HeadText.description)
  const icon = HeadText.icon

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={icon} />
    </NextHead>
  )
}

export default Head
