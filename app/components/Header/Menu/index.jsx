import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '@/app/components/Header/anim';
import styles from './style.module.scss';
import Link from './link';
import { useState } from 'react';

const menu = [
  {
    title: "Artists",
    link: '/artists',
  },
  {
    title: "Tour",
    link: '/tour',
  },
  {
    title: "Studio",
    link: 'https://airval-studio.com',
    newtab: "_blank",
  },
  {
    title: "Blog",
    link: '/blog',
  },
  {
    title: "Store",
    link: 'https://store.polyphoniamusic.com',
    newtab: "_blank",
  },
  {
    title: "Contact",
    link: '/contact',
  }
]

export default function index({closeMenu}) {

  return (
    <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">
        <div className={styles.header}>
          <button onClick={() => {closeMenu()}}>CLOSE</button>
        </div>
        <div className={styles.body}>
          {
            menu.map( (el, index) => {
              return <button className="header-line" onClick={() => {closeMenu()}}><Link data={el} index={index} key={index}/></button>
            })
          }
        </div>
    </motion.div>
  )
}
