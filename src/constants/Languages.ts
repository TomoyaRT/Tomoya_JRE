import {
  Icon_EN,
  Icon_TW,
  Icon_JP,
  Resume_JP,
  Resume_TW,
  Resume_EN,
} from '@/constants/Public'

const LanguageIcon = {}
Reflect.set(LanguageIcon, 'en', Icon_EN)
Reflect.set(LanguageIcon, 'tw', Icon_TW)
Reflect.set(LanguageIcon, 'jp', Icon_JP)

const LanguageName = {}
Reflect.set(LanguageName, 'en', 'English')
Reflect.set(LanguageName, 'tw', 'Chinese')
Reflect.set(LanguageName, 'jp', 'Japanese')

const LanguageResume = {}
Reflect.set(LanguageResume, 'en', Resume_EN)
Reflect.set(LanguageResume, 'tw', Resume_TW)
Reflect.set(LanguageResume, 'jp', Resume_JP)

const LanguageList = [
  {
    key: 'en',
    name: 'English',
    icon: Icon_EN,
  },
  {
    key: 'tw',
    name: 'Chinese',
    icon: Icon_TW,
  },
  {
    key: 'jp',
    name: 'Japanese',
    icon: Icon_JP,
  },
]

export { LanguageList, LanguageIcon, LanguageName, LanguageResume }
