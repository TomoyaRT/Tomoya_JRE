import styles from '@/styles/modules/Resume.module.css'

const Resume = () => {
  return (
    <a href="/resume/Roger.pdf" className={styles.resume} download>
      <span>Resume</span>
      <i></i>
    </a>
  )
}

export default Resume
