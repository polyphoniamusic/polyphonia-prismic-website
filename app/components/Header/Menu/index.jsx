import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '@/app/components/Header/anim';
import styles from './style.module.scss';
import Link from './link';
import { useState } from 'react';

import SiteIcon from '@/public/assets/images/icons/polyphonia-icon-white.svg';
import SpotifyIcon from '@/public/assets/images/icons/socials/spotify-icon-white.svg';
import InstagramIcon from '@/public/assets/images/icons/socials/instagram-icon-white.svg';
import LinkedinIcon from '@/public/assets/images/icons/socials/linkedin-icon-white.svg';

const menuButton = [
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

const menuSocials = [
  {
      //title: "Spotify",
      link: 'https://open.spotify.com/user/315n6x5keqsyp2xw7yqlqdoirwzm',
      alt: 'Spotify Icon',
      icon: SpotifyIcon,
  },
  {
      //title: "Instagram",
      link: 'https://www.instagram.com/polyphoniamusic',
      alt: 'Instagram Icon',
      icon: InstagramIcon,
  },
  {
      //title: "LinkedIn",
      link: 'https://www.linkedin.com/company/polyphoniamusic',
      alt: 'LinkedIn Icon',
      icon: LinkedinIcon,
  },
]

export default function index({closeMenu}) {

  return (
    <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">
        <div className={styles.header}>
          <button onClick={() => {closeMenu()}}>CLOSE</button>
        </div>
        <div className={styles.body}>
          {
            menuButton.map( (el, index) => {
              return  <button className="header-line" onClick={() => {closeMenu()}}>
                        <Link data={el} index={index} key={index}/>
                      </button>
            })
          }
          {/*{
            menuSocials.map( (el, index) => {
              return  <button className="header-line" onClick={() => {closeMenu()}}>
                        <Link data={el} index={index} key={index}/>
                      </button>
            })
          }*/}
        </div>
    </motion.div>
  )
}
