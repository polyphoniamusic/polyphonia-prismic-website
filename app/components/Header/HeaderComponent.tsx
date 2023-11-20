"use client"

import { Key, useState, useEffect } from 'react'
import Burger from './Burger';
import Stairs from './Stairs';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from './Menu/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Import Priscmic Data Client
import { PrismicNextImage  } from '@prismicio/next';
import { PrismicNextLink } from '@prismicio/next';
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher';

gsap.registerPlugin(ScrollTrigger);

export default function HeaderComponent({ settings, locales }: { settings: any; locales: any; }) {

    useEffect(() => {
        // Create your GSAP animation
        const showAnim = gsap.from('.header-nav-block, .header-nav-mobile', {
          //"background-color": "black !important",
          yPercent: -200,
          paused: true,
          duration: 0.35,
        }).progress(1);
      
        ScrollTrigger.create({
          start: '50 top',
          end: '99999999',
          scrub: 0.5,
          onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
          },
          toggleClass: {targets: ".header-nav-block, .header-nav-mobile", className: "header-nav-scrolled"},  // Remplacez 'your-class-name' par le nom de la classe que vous souhaitez ajouter
        });
      }, []);
  
    const [menuIsOpen, setMenuIsOpen] = useState(false);  

    return (
        <header id="home">
              <div className="header-container">
                  <div className="header-nav-block">
                      {/* Navigation Logo */}
                      <PrismicNextLink className="header-logo-block" field={settings.data.site_home_url}>
                          <PrismicNextImage field={settings.data.site_logo} className="site-logo"/>
                      </PrismicNextLink>
  
                      {/* Navigation Menu */}
                      <nav className="header-nav">
                          <ul className="header-nav-menu">
                              {settings.data.navigation.map((item: { label: Key | null | undefined; }, index: Key | null | undefined) => (
                                  <li className="header-nav-button" key={item.label}>
                                      <Link data={item} index={index} key={index} locales={locales}/>
                                  </li>
                              ))}
                          </ul>
                          <LanguageSwitcher locales={locales}/>
                          {/*<ul className="header-nav-socials">
                              {settings.data.social_navigation.map((item: { label: Key | null | undefined; }, index: Key | null | undefined) => (
                                  <li className="header-nav-link" key={item.label}>
                                      <Link data={item} index={index} key={index} />
                                  </li>
                              ))}
                              <LanguageSwitcher locales={locales} />
                          </ul>*/}
                      </nav>
                  </div>
              </div>
              <div className="header-container-mobile">
                  {/* Mobile Navigation Menu */}
                      <nav className="header-nav-mobile">
                        <PrismicNextLink className="header-logo-block" field={settings.data.site_home_url}>
                            <PrismicNextImage field={settings.data.site_logo} className="site-logo"/>
                        </PrismicNextLink>
                          <Burger openMenu={() => {setMenuIsOpen(true)}}/>
                      </nav>
                      <AnimatePresence mode="wait">
                          {
                              menuIsOpen && <>
                              <Stairs />
                              <Menu closeMenu={() => { setMenuIsOpen(false); } } settings={settings} locales={locales}/>
                              </>
                          }
                      </AnimatePresence>
              </div>
          </header>
      )
  }
