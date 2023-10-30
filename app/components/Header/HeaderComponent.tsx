//'use client';

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

gsap.registerPlugin(ScrollTrigger);

export default function Header({settings} : { settings: any}) {

    useEffect(() => {
        // Create your GSAP animation
        const showAnim = gsap.from('.header-nav-block, .header-nav-mobile', {
            yPercent: -200,
            paused: true,
            duration: 0.35
        }).progress(1);

        ScrollTrigger.create({
            start: 'top top',
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            }
        });
    }, []); 

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <header id="home">
            <div className="header-container">

                <div className="header-nav-block">
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
            </div>
            <div className="header-container-mobile">
                {/* Mobile Navigation Menu */}
                    <nav className="header-nav-mobile">
                        <a href="/">
                            <PrismicNextImage field={settings.data.site_logo} className="site-logo"/>
                        </a>
                        <Burger openMenu={() => {setMenuIsOpen(true)}}/>
                    </nav>
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