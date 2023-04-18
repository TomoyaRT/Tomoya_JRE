import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { motion } from '@/plugins/FramerMotion'
import { LanguageList, LanguageIcon } from '@/constants/Languages'
import { i18n } from 'next-i18next'
import { setLoading } from '@/store/slices/loadingSlice'
import { delay } from '@/plugins/Lodash'
import { useAppDispatch } from '@/hooks/useStore'
import { EN, TW } from '@/constants/Public'
import { Type, Ease } from '@/types'

const staggerConfig = {
  initial: {},
  open: {
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.15,
      ease: Ease.CircIn,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.15,
      ease: Ease.CircOut,
    },
  },
}

const variantsConfig = {
  initial: {
    opacity: 1,
  },
  close: (custom: number) => ({
    x: `${custom * 100}%`,
    y: 0,
  }),
  open: {
    x: 0,
    y: 0,
    transition: {
      type: Type.Spring,
      duration: 0.65,
    },
  },
}

const Languages = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const lang = i18n?.language
  const [language, setLanguage] = useState('en')
  const [animation, setAnimation] = useState(false)
  const activeIcon = Reflect.get(LanguageIcon, language)
  const languages = LanguageList.filter((item) => item.key !== language)

  function handleParentButton() {
    setAnimation(!animation)
  }

  function handleChildButton(language: string) {
    if (lang === language) return
    handleParentButton()
    dispatch(setLoading({ loading: true, type: 'Page' }))
    delay(() => {
      setLanguage(language)
      router.push(router.pathname, router.asPath, { locale: language })
    }, 850)
  }

  return (
    <motion.div
      initial="hidden"
      animate={`${animation ? 'open' : 'close'}`}
      variants={staggerConfig}
      className="relative flex flex-row-reverse overflow-x-hidden mr-6 rounded-full"
    >
      <button
        className="relative z-10 border-2 rounded-full cursor-pointer"
        onClick={handleParentButton}
      >
        <Image
          width={35}
          height={35}
          alt="Language Icon"
          src={activeIcon}
          className="h-[35px] w-[35px] rounded-full"
        />
      </button>

      {languages.map((item, index) => {
        return (
          <motion.div
            key={item.key}
            variants={variantsConfig}
            className="relative flex flex-row-reverse z-0 box-border"
            custom={index + 1}
          >
            <button
              className="rounded-full mr-3 cursor-pointer hover:scale-110 duration-300 active:scale-90"
              onClick={() => handleChildButton(item.key)}
            >
              <Image
                width={35}
                height={35}
                alt="Language Icon"
                src={item.icon}
                className="h-[35px] w-[35px] rounded-full"
              />
            </button>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Languages
