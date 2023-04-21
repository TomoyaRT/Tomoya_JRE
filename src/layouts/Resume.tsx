import styles from '@/styles/modules/Resume.module.css'
import { LanguageResume } from '@/constants/Languages'
import { i18n } from 'next-i18next'

const Resume = () => {
  const lang = i18n?.language
  const resume = lang && Reflect.get(LanguageResume, lang)

  return (
    <a href={resume} className={styles.resume} download>
      <span>Resume</span>
      <i></i>
    </a>
  )
}

export default Resume
