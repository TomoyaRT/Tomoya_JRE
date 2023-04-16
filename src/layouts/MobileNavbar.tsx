import { motion, useCycle } from '@/plugins/FramerMotion'
import { mobileNavbar } from '@/constants/Animation'
import { Routes } from '@/constants/Routes'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

interface PathProps {
  variants: {
    [key: string]: object
  }
  d?: string
  transition?: {
    [key: string]: number
  }
}
const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#E6E6E6"
    strokeLinecap="round"
    {...props}
  />
)

type MenuItemProps = { name: string; path: string; toggleOpen: () => void }

const MenuItem = ({ name, path, toggleOpen }: MenuItemProps) => {
  const { t } = useTranslation('Home')
  const router = useRouter()
  const handleClick = () => {
    router.push(path)
    toggleOpen()
  }

  return (
    <motion.li
      className="list-none cursor-pointer text-white text-xl"
      variants={mobileNavbar.liVariants}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.8 }}
      onClick={handleClick}
    >
      {t(name)}
    </motion.li>
  )
}

const MobileNavbar: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const height = '100vh'

  return (
    <motion.nav
      className="fixed top-0 right-0 w-full h-full z-30 overflow-hidden"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
    >
      <motion.div
        className={`${
          isOpen ? 'z-10' : 'z-0'
        } absolute top-0 right-0 w-full h-full bg-indigo-900`}
        variants={mobileNavbar.circleVariants}
      />
      <motion.ul
        variants={mobileNavbar.ulVariants}
        className={`${
          isOpen ? 'z-10' : 'z-0'
        } absolute w-full h-full top-0 left-0 flex flex-col gap-10 justify-center items-center`}
      >
        {Routes.map((i) => (
          <MenuItem {...i} key={i.name} toggleOpen={toggleOpen} />
        ))}
      </motion.ul>
      <button
        onClick={() => toggleOpen()}
        className={`${
          isOpen ? 'z-30' : 'z-20'
        } absolute top-5 right-[25.5px] w-[50px] h-[50px] flex justify-center items-center rounded-full bg-transparent cursor-pointer`}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path variants={mobileNavbar.buttonVariants.topLine} />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={mobileNavbar.buttonVariants.centerLine}
            transition={{ duration: 0.1 }}
          />
          <Path variants={mobileNavbar.buttonVariants.bottomLine} />
        </svg>
      </button>
    </motion.nav>
  )
}

export default MobileNavbar
