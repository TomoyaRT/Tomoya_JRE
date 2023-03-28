type Tag = {
  name: string
  color: string
}

export interface PostCardProps {
  index: number
  name: string
  description: string
  tags: Tag[]
  image: string
}
