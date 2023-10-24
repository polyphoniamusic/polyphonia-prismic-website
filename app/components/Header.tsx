//'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import Burger from '@/app/components/Header/Burger';
import Stairs from '@/app/components/Header/Stairs';
import Menu from '@/app/components/Header/Menu';
import { AnimatePresence } from 'framer-motion';

// Import Priscmic Data Client
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage  } from '@prismicio/next';

export default async function Header({}) {
    
    const client = createClient();
  
    const settings = await client.getSingle("settings");
    
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
            <header id="home">
                <div className="header-container">
                    {/* Navigation Logo */}
                    <div className="header-logo-block">
                        <a href="/">
                            <PrismicNextImage field={settings.data.site_logo} className="site-logo"/>
                        </a>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="header-nav">
                        <ul className="header-nav-menu">
                            {settings.data.navigation.map(({label, link}) => (
                                <li className="header-nav-button" key={label}>
                                    <PrismicNextLink field={link}>{label}<img className="arrow" src="/assets/images/icons/arrow-icon-white.svg"/></PrismicNextLink>
                                </li>
                            ))}
                        </ul>
                        <ul className="header-nav-socials">
                            {settings.data.social_navigation.map(({label, link, icon}) => (
                                <li className="header-nav-link" key={label}>
                                    <PrismicNextLink field={link}>
                                        <PrismicNextImage field={icon}/>
                                    </PrismicNextLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Navigation Menu */}
                    <nav className="header-nav-mobile">
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
                    </nav>
                    
                </div>
            </header>
    )
}