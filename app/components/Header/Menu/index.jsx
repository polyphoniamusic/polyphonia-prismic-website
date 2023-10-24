import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '@/app/components/Header/anim';
import styles from './style.module.scss';
import Link from './link';
import { useState } from 'react';

const menu = [
  {
    title: "Artists",
  },
  {
    title: "Tour",
  },
  {
    title: "Studio",
  },
  {
    title: "Blog",
  },
  {
    title: "Store",
  },
  {
    title: "Contact",
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
              return <Link data={el} index={index} key={index}/>
            })
          }
        </div>
    </motion.div>
  )
}
