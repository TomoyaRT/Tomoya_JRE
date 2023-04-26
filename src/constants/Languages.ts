import {
  Language_EN,
  Language_TW,
  Language_JP,
  Resume_JP,
  Resume_TW,
  Resume_EN,
} from '@/constants/Public'

const LanguageIcon = {}
Reflect.set(LanguageIcon, 'en', Language_EN)
Reflect.set(LanguageIcon, 'tw', Language_TW)
Reflect.set(LanguageIcon, 'jp', Language_JP)

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
    icon: Language_EN,
  },
  {
    key: 'tw',
    name: 'Chinese',
    icon: Language_TW,
  },
  {
    key: 'jp',
    name: 'Japanese',
    icon: Language_JP,
  },
]

export { LanguageList, LanguageIcon, LanguageName, LanguageResume }
