import PostCard from '@/components/blog/PostCard'
import Stagger from '@/components/animation/Stagger'
import { posts } from '@/constants/Home'

import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Blog = () => {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-[1024px]">
        <Stagger stagger={0.2} delay={0}>
          <div className="pt-24 grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <PostCard key={`post-${index}`} index={index} {...post} />
            ))}
          </div>
        </Stagger>
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
