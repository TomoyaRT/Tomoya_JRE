import PostCard from '@/components/blog/PostCard'
import { Posts } from '@/constants/Blog'

import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Blog = () => {
  return (
    <div className="mx-auto max-w-[1024px]">
      <div className="fixed left-0 z-20 bg-[#1A1A1A89] w-screen h-screen text-white flex justify-center items-center text-[60px] font-bold">
        努力趕工中...
      </div>
      <div className="pt-24 grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-3 gap-10">
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
  const Home = await serverSideTranslations(locale, ['Home'])

  return {
    props: {
      ...Home,
    },
  }
}

export default Blog
