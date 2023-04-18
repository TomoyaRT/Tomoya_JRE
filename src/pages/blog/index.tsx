import { useTranslation } from 'next-i18next'
import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import PostCard from '@/components/blog/PostCard'
import { Posts, UnderDevelopment } from '@/constants/Blog'

const Blog = () => {
  const { t } = useTranslation('Blog')

  return (
    <div className="mx-auto max-w-[1024px]">
      <div className="fixed left-0 z-20 bg-[#1A1A1A89] w-screen h-screen text-white flex justify-center items-center text-[50px] font-bold">
        <span className="max-w-[375px] text-center">{t(UnderDevelopment)}</span>
      </div>
      <div className="pt-24 pb-10 grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-3 gap-10">
        {Posts.map((post, index) => (
          <PostCard key={`post-${index}`} index={index} {...post} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) {
    throw new Error('locale is undefined')
  }
  const Blog = await serverSideTranslations(locale, ['Home', 'Blog'])

  return {
    props: {
      ...Blog,
    },
  }
}

export default Blog
