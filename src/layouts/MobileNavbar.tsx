import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '@/hooks/useDimensions'

// MenuToggle
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#E6E6E6"
    strokeLinecap="round"
    {...props}
  />
)
const MenuToggle = ({ toggle }: any) => (
  <button
    onClick={toggle}
    className="absolute top-5 right-3 w-[50px] h-[50px] rounded-full bg-transparent cursor-pointer"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
)

// MenuItem
const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
type MenuItemProps = { i: string }
const MenuItem = ({ i }: MenuItemProps) => {
  return (
    <motion.li
      className="list-none cursor-pointer text-white text-xl"
      variants={menuItemVariants}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.8 }}
    >
      {i}
    </motion.li>
  )
}

// Navigation
const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
const itemIds = ['Home', 'Blog', 'Portfolio']
const Navigation = () => (
  <motion.ul
    variants={navigationVariants}
    className="absolute w-full h-full top-0 left-0 flex flex-col gap-10 justify-center items-center"
  >
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
)

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 1.3}px at calc(100% - 52px) 42.5px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at calc(100% - 52px) 42.5px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const MobileNavbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      className={`fixed top-0 right-0 w-full h-full ${
        isOpen ? 'z-50' : 'z-10'
      } overflow-hidden`}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 right-0 w-[100vw] h-[100vh] bg-[#8046ff]"
        variants={sidebar}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
    // </div>
  )
}

export default MobileNavbar
