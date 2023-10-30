//'use client';

import { Key, useState } from 'react'
import Burger from './Burger';
import Stairs from './Stairs';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from './Menu/link';

// Import Priscmic Data Client
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage  } from '@prismicio/next';

export default function Header({settings} : { settings: any}) {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <header id="home">
            <div className="header-container">
                {/* Navigation Logo */}
                <a className="header-logo-block" href="/">
                    <PrismicNextImage field={settings.data.site_logo} className="site-logo"/>
                </a>

                {/* Navigation Menu */}
                <nav className="header-nav">
                    <ul className="header-nav-menu">
                        {settings.data.navigation.map((item: { label: Key | null | undefined; }, index: Key | null | undefined) => (
                            <li className="header-nav-button" key={item.label}>
                                <Link data={item} index={index} key={index} />
                            </li>
                        ))}
                    </ul>
                    <ul className="header-nav-socials">
                        {settings.data.social_navigation.map((item: { label: Key | null | undefined; }, index: Key | null | undefined) => (
                            <li className="header-nav-link" key={item.label}>
                                <Link data={item} index={index} key={index} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="header-container-mobile">
                {/* Mobile Navigation Menu */}
                    <nav className="header-nav-mobile">
                        <a href="/">
                            <PrismicNextImage field={settings.data.site_logo} className="site-logo"/>
                        </a>
                    </nav>
                    <Burger openMenu={() => {setMenuIsOpen(true)}}/>
                    <AnimatePresence mode="wait">
                        {
                            menuIsOpen && <>
                            <Stairs />
                            <Menu closeMenu={() => { setMenuIsOpen(false); } } settings={settings}/>
                            </>
                        }
                    </AnimatePresence>
            </div>
        </header>
    )
}