import PostCard from '@/components/blog/PostCard'
import { posts } from '@/constants/blog'
import Stagger from '@/components/animation/Stagger'

// 首頁 -> Blog -> Post 3篇文章
// Blog -> Post 全部文章 (可以考慮做個假Loading無線滾動與視圖內Dom渲染)
// 將 PostCard.tsx 寫成一個共用 Card -> Home, Blog使用

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

export default Blog
