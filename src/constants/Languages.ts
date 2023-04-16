import { EN, TW, JP } from '@/constants/Public'

const LanguageIcon = {}
Reflect.set(LanguageIcon, 'en', EN)
Reflect.set(LanguageIcon, 'tw', TW)
Reflect.set(LanguageIcon, 'jp', JP)

const LanguageName = {}
Reflect.set(LanguageName, 'en', 'English')
Reflect.set(LanguageName, 'tw', 'Chinese')
Reflect.set(LanguageName, 'jp', 'Japanese')

const LanguageList = [
  {
    key: 'en',
    name: 'English',
    icon: EN,
  },
  {
    key: 'tw',
    name: 'Chinese',
    icon: TW,
  },
  {
    key: 'jp',
    name: 'Japanese',
    icon: JP,
  },
]

export { LanguageList, LanguageIcon, LanguageName }
