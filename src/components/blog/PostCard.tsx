import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { PostCardProps } from '@/types/blog'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'

const PostCard = (props: PostCardProps) => {
  const { index, name, description, tags, image } = props
  return (
    <motion.div
      variants={fadeIn(
        Direction.Down,
        Type.Tween,
        index * 0.2,
        0.75,
        Ease.BackOut
      )}
    >
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
    </motion.div>
  )
}

export default PostCard
