'use client';

import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../anim';
import styles from './style.module.scss';
import Link from './link';
import { useState } from 'react';

//import SiteIcon from '@/public/assets/images/icons/polyphonia-icon-white.svg';
import SpotifyIcon from '@/public/assets/images/icons/socials/spotify-icon-white.svg';
import InstagramIcon from '@/public/assets/images/icons/socials/instagram-icon-white.svg';
import LinkedinIcon from '@/public/assets/images/icons/socials/linkedin-icon-white.svg';

const menuButton = [
  {
    title: "Artists",
    link: '/artists',
    description: 'Discover artists we represent',
  },
  {
    title: "Tour",
    link: '/tour',
    description: 'Get all Polyphonia artists dates',
  },
  {
    title: "Studio",
    link: 'https://airval-studio.com',
    newtab: "_blank",
    description: 'An complete recording studio',
  },
  {
    title: "Blog",
    link: '/blog',
    description: 'Out news, but not only',
  },
  {
    title: "Store",
    link: 'https://store.polyphoniamusic.com',
    newtab: "_blank",
    description: 'Merch from our artists & more',
  },
  {
    title: "Contact",
    link: '/contact',
    description: 'Best way to get in touch',
  }
]

const menuSocials = [
  {
      //title: "Spotify",
      link: 'https://open.spotify.com/user/315n6x5keqsyp2xw7yqlqdoirwzm',
      alt: 'Spotify Icon',
      icon: SpotifyIcon,
      name: 'SF',
      newtab: "_blank",
  },
  {
      //title: "Instagram",
      link: 'https://www.instagram.com/polyphoniamusic',
      alt: 'Instagram Icon',
      icon: InstagramIcon,
      name: 'IG',
      newtab: "_blank",
  },
  {
      //title: "LinkedIn",
      link: 'https://www.linkedin.com/company/polyphoniamusic',
      alt: 'LinkedIn Icon',
      icon: LinkedinIcon,
      name: 'LI',
      newtab: "_blank",
  }
]

export default function index({closeMenu}) {

  return (
    <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">
        <div className="header-container-mobile">
          <div className="header-container-mobile-socials">
            {
              menuSocials.map( (el, index) => {
                return  <button onClick={() => {closeMenu()}}>
                          <Link data={el} index={index} key={index}/>
                        </button>
              })
            }
          </div>
          {/*<button className="header-nav-mobile-button" onClick={() => {closeMenu()}}><span>(</span>CLOSE MENU<span>)</span></button> {/* X */}
          <button onClick={() => {closeMenu()}}>
            <motion.svg 
              variants={slideLeft} 
              {...mountAnim}
              width="68" 
              height="68" 
              viewBox="0 0 68 68" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">
                {/*<path d="M1.5 1.5L67 67" stroke="white"/>
                <path d="M66.5 1L0.999997 66.5" stroke="white"/>*/}

                <path d="M1.5,1.5L67,67" stroke="white" stroke-width="4px"/>
                <path d="M66.5,1L1,66.5" stroke="white" stroke-width="4px"/>
            </motion.svg>
          </button>

          
        </div>
        <div className={styles.body}>
          {
            menuButton.map( (el, index) => {
              return  <button className="header-line" onClick={() => {closeMenu()}}>
                        <Link data={el} index={index} key={index}/>
                      </button>
            })
          }
        </div>
    </motion.div>
  )
}