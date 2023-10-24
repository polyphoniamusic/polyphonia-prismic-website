//'use client';
import {useState} from 'react'
import Burger from './Burger';
import Stairs from './Stairs';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from './Menu/link';

// Import Priscmic Data Client
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage  } from '@prismicio/next';

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
        title: "Spotify",
        link: 'https://open.spotify.com/user/315n6x5keqsyp2xw7yqlqdoirwzm',
        alt: 'Spotify Icon',
        Icon: SpotifyIcon,
    },
    {
        title: "Instagram",
        link: 'https://www.instagram.com/polyphoniamusic',
        alt: 'Instagram Icon',
        Icon: InstagramIcon,
    },
    {
        title: "LinkedIn",
        link: 'https://www.linkedin.com/company/polyphoniamusic',
        alt: 'LinkedIn Icon',
        Icon: LinkedinIcon,
    },
]

export default function Header2() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <header id="home">
            <div className="header-container">
                {/* Navigation Logo */}
                <div className="header-logo-block">
                    <a href="/">
                        <Image src={SiteIcon} className="site-logo"/>
                    </a>
                </div>

                {/* Navigation Menu */}
                <nav className="header-nav">
                    <ul className="header-nav-menu">
                        {menuButton.map( (el, index) => {
                            return  <li className="header-nav-button">
                                        <Link data={el} index={index} key={index}/>
                                    </li>
                        })}
                    </ul>
                    <ul className="header-nav-socials">
                        {menuSocials.map( (el, index) => {
                            return  <li className="header-nav-link">
                                        <Link data={el} index={index} key={index}/>
                                    </li>
                        })}
                    </ul>
                </nav>
            </div>
            <div className="header-container-mobile">
                {/* Mobile Navigation Menu */}
                <nav className="header-nav-mobile">
                    <a href="/">
                        <Image src={SiteIcon} className="site-logo"/>
                    </a>
                </nav>
                <div>
                    <Burger openMenu={() => {setMenuIsOpen(true)}}/>
                    <AnimatePresence mode="wait">
                        {
                            menuIsOpen && <>
                            <Stairs />
                            <Menu closeMenu={() => {setMenuIsOpen(false)}}/>
                            </>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </header>
    )
}
