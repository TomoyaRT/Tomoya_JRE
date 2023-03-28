import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

import { PostCardProps } from '@/types/blog'
import FadeIn from '@/components/animation/FadeIn'

const PostCard = (props: PostCardProps) => {
  const { name, description, tags, image } = props
  return (
    <FadeIn>
      <Tilt
        tiltReverse={true}
        className="bg-tertiary p-5 rounded-2xl sm:max-w-[360px] w-full"
      >
        <div className="relative w-full max-h-[260px]">
          <Image
            src={image}
            alt={name}
            width={320}
            height={260}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </FadeIn>
  )
}

export default PostCard
