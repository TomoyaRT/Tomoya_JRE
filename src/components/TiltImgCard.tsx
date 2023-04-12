import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

interface Tag {
  name: string
  color: string
}

interface TiltImgCardProps {
  name: string
  description: string
  tags: Tag[]
  image: string
}

const TiltImgCard = (props: TiltImgCardProps) => {
  const { name, description, tags, image } = props
  return (
    <Tilt
      tiltReverse={true}
      className="bg-tertiary p-5 rounded-2xl max-w-[360px] w-full"
    >
      <div className="relative w-full max-h-[260px]">
        <Image
          src={image}
          alt={name}
          width={320}
          height={260}
          className="object-cover rounded-2xl"
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
  )
}

export default TiltImgCard
