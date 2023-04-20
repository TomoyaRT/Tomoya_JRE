import styles from '@/styles/modules/Resume.module.css'
import { Resume as ResumePath } from '@/constants/Public'

const Resume = () => {
  return (
    <a href={ResumePath} className={styles.resume} download>
      <span>Resume</span>
      <i></i>
    </a>
  )
}

export default Resume
