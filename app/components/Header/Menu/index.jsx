'use client';

import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../anim';
import styles from './style.module.scss';
import Link from './link';
import { useState } from 'react';

import { LanguageSwitcher } from '@/app/components/LanguageSwitcher';

export default function index({ closeMenu, settings, locales }) {

  return (
    <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">
        <div className="header-container-mobile">
          <div className="header-container-mobile-socials">
            {settings.data.social_navigation.map((item, index) => (
                <button onClick={() => {closeMenu()}}>
                  <Link data={item} index={index} key={index}/>
                </button>
            ))}
            <LanguageSwitcher locales={locales} />
          </div>
          <button onClick={() => {closeMenu()}}>
            <motion.svg 
              variants={slideLeft} 
              {...mountAnim}
              width="68" 
              height="68" 
              viewBox="0 0 68 68" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5,1.5L67,67" stroke="white" stroke-width="4px"/>
                <path d="M66.5,1L1,66.5" stroke="white" stroke-width="4px"/>
            </motion.svg>
          </button>
        </div>
        <div className={styles.body}>
          {settings.data.navigation.map((item, index) => (
              <button className="header-line" onClick={() => {closeMenu()}}>
                <Link data={item} index={index} key={index}/>
              </button>
          ))}
        </div>
    </motion.div>
  )
}