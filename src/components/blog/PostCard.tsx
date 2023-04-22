import { motion } from '@/plugins/FramerMotion'

import { PostCardProps } from '@/types/Blog'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'
import TiltImgCard from '@/components/TiltImgCard'

const PostCard = (props: PostCardProps) => {
  const { index, name, description, tags, image } = props
  const tiltImgCardProps = { name, description, tags, image }

  return (
    <motion.div
      className="mx-auto"
      initial="hidden"
      whileInView="visible"
      variants={fadeIn(
        Direction.Down,
        Type.Tween,
        index * 0.1,
        0.65,
        Ease.BackOut
      )}
    >
      <TiltImgCard {...tiltImgCardProps} />
    </motion.div>
  )
}

export default PostCard
