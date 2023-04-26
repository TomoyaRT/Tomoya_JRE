import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from '@/plugins/FramerMotion'
import { LanguageList, LanguageIcon } from '@/constants/Languages'
import { i18n } from 'next-i18next'
import { setLoading } from '@/store/slices/loadingSlice'
import { delay } from '@/plugins/Lodash'
import { useAppDispatch } from '@/hooks/useStore'
import { Type, Ease } from '@/types/Animate'

const staggerConfig = {
  initial: {},
  open: {
    transition: {
      staggerChildren: 0.15,
      ease: Ease.CircIn,
      staggerDirection: -1,
    },
  },
  close: {
    transition: {
      staggerDirection: 1,
      staggerChildren: 0.15,
      ease: Ease.CircOut,
    },
  },
}

const mobileConfig = {
  initial: {
    opacity: 1,
  },
  open: (custom: number) => ({
    x: 0,
    y: `${custom * 20}%`,
    transition: {
      type: Type.Spring,
      duration: 0.65,
    },
  }),
  close: (custom: number) => ({
    x: 0,
    y: `-${custom * 100}%`,
  }),
}

const desktopConfig = {
  initial: {
    opacity: 1,
  },
  open: (custom: number) => ({
    y: 0,
    x: `-${custom * 20}%`,
    transition: {
      type: Type.Spring,
      duration: 0.65,
    },
  }),
  close: (custom: number) => ({
    x: `${custom * 100}%`,
    y: 0,
  }),
}

type LanguagesProps = {
  isMobile: boolean
}
const Languages = ({ isMobile }: LanguagesProps) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const lang = i18n?.language
  const [language, setLanguage] = useState(lang)
  const [isAnimating, setIsAnimating] = useState(false)
  const [animation, setAnimation] = useState('close')
  const activeIcon = language && Reflect.get(LanguageIcon, language)
  const languages = LanguageList.filter((item) => item.key !== language)

  function buttonToggleHandler() {
    if (isAnimating) return
    setAnimation(() => (animation === 'open' ? 'close' : 'open'))
  }

  function handleChildButton(language: string) {
    if (lang === language) return

    dispatch(setLoading({ loading: true, type: 'Page' }))
    delay(() => {
      setLanguage(language)
      setAnimation('close')
      router.push(router.pathname, router.asPath, { locale: language })
    }, 380)
  }

  return (
    <motion.div
      initial="hidden"
      animate={animation}
      variants={staggerConfig}
      custom={isMobile}
      onAnimationStart={() => setIsAnimating(true)}
      onAnimationComplete={() => setIsAnimating(false)}
      className="absolute top-[22.5px] right-[140px] mobile:relative mobile:top-0 mobile:right-0 mobile:mr-5 flex h-[150px] px-1 flex-col mobile:w-[150px] mobile:px-0 mobile:py-1 mobile:h-auto mobile:flex-row-reverse 
    overflow-x-hidden rounded-full"
    >
      <button
        className="relative z-10 rounded-full cursor-pointer flex justify-center items-center"
        onClick={buttonToggleHandler}
      >
        <Image
          width={35}
          height={35}
          alt="Language Icon"
          src={activeIcon}
          className="h-[35px] w-[35px] rounded-full border-2"
        />
      </button>

      {languages.map((item, index) => {
        return (
          <motion.button
            key={item.key}
            variants={isMobile ? mobileConfig : desktopConfig}
            className="relative flex justify-center items-center z-0 box-border cursor-pointer"
            custom={index + 1}
            onClick={() => handleChildButton(item.key)}
          >
            <Image
              width={35}
              height={35}
              alt="Language Icon"
              src={item.icon}
              className="h-[35px] w-[35px] rounded-full hover:scale-110 duration-300 active:scale-90"
            />
          </motion.button>
        )
      })}
    </motion.div>
  )
}

export default Languages
