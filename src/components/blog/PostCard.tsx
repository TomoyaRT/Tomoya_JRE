import { motion } from '@/plugins/FramerMotion'

import { PostCardProps } from '@/types/blog'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'
import TiltImgCard from '@/components/TiltImgCard'

const PostCard = (props: PostCardProps) => {
  const { index, name, description, tags, image } = props
  const tiltImgCardProps = { name, description, tags, image }

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
      <TiltImgCard {...tiltImgCardProps} />
    </motion.div>
  )
}

export default PostCard
