import Link from 'next/link';
import { useState, useEffect } from 'react';

import ArrowIcon from '../../app/content/images/icons/arrow-icon-white.svg';

// Import Priscmic Data Client
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage  } from '@prismicio/next';

export default async function Header() {
    
    const client = createClient();
  
    const settings = await client.getSingle("settings");

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
                </div>
            </header>
    )
}