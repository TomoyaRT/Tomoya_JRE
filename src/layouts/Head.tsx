import NextHead from 'next/head'

type Props = {
  title: string
  description: string
  icon: string
}

const Head: React.FC<Props> = (props) => {
  const { title, description, icon } = props

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
