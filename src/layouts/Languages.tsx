import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { LanguageList, LanguageIcon, LanguageName } from '@/constants/Languages'

const Languages = () => {
  const router = useRouter()
  const [language, setLanguage] = useState('en')
  const [isActive, setIsActive] = useState(false)

  function languageButtonHandler(language: string) {
    setLanguage(language)
    router.push(router.pathname, router.asPath, { locale: language })
  }

  return (
    <div className="relative mr-2">
      <button
        type="button"
        className={`cursor-pointer relative w-full rounded-md bg-white py-1.5 pl-3 ${
          isActive ? 'pr-[45px]' : 'pr-3'
        } text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6`}
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        onClick={() => setIsActive(!isActive)}
      >
        <span className="flex items-center">
          <Image
            width={50}
            height={50}
            alt=""
            src={Reflect.get(LanguageIcon, language)}
            className="h-5 w-5 flex-shrink-0 rounded-full"
          />
          {isActive && (
            <span className="ml-3 block truncate">
              {Reflect.get(LanguageName, language)}
            </span>
          )}
        </span>
      </button>

      <ul
        className={`${
          isActive ? 'block' : 'hidden'
        } absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        {LanguageList.map((item) => {
          return (
            <li
              key={item.key}
              className="cursor-pointer text-gray-900 relative select-none py-2 pl-3 pr-9"
              id="listbox-option-0"
              role="option"
              onClick={() => languageButtonHandler(item.key)}
            >
              <div className="flex items-center">
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src={item.icon}
                  className="h-5 w-5 flex-shrink-0"
                />
                <span className="font-normal ml-3 block truncate">
                  {item.name}
                </span>
              </div>

              {language === item.key && (
                <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Languages
