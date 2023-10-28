//import Link from 'next/link';
import Image from 'next/image';
import Link from 'next/link';

// Import Priscmic Data Client
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage  } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import ArrowIcon from '../../public/assets/images/icons/arrow-icon-white.svg';

export default async function Footer() {

    const client = createClient();
  
    const settings = await client.getSingle("settings");

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-block">

                    <div className="footer-block-child">
                        {/* MENU */}
                        <div className="footer-column">
                            {settings.data.navigation.map(({label, link}) => (
                                <li className="footer-nav-link" key={label}>
                                    <PrismicNextLink field={link}>{label}</PrismicNextLink>
                                </li>
                            ))}
                        </div>

                        {/* MORE */}
                        <div className="footer-column">
                            {settings.data.footer_navigation_more.map(({label, link}) => (
                                <li className="footer-nav-link" key={label}>
                                    <PrismicNextLink field={link}>{label}</PrismicNextLink>
                                </li>
                            ))}
                        </div>
                    </div>

                    <div className="footer-block-child">
                        <div className="footer-column">
                            <Link href="#home" className="footer-icon">
                                <Image src={ArrowIcon} alt="Arrow Icon"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="footer-block">

                    {/* SOCIALS */}
                    <div className="footer-column-inline">
                        {settings.data.footer_navigation_socials.map(({label, link}) => (
                            <li className="button-cta button-cta-white button-cta-small-padding" key={label}>
                                <PrismicNextLink field={link}>{label}</PrismicNextLink>
                            </li>
                        ))}
                    </div>
                </div>

                <div className="footer-block">

                    <div className="footer-column-reverse">
                        <PrismicRichText field={settings.data.copyright} components={{
                            paragraph: ({children}) =>(
                                <p className="footer-nav-legal">{children}</p>
                            )
                        }}/>
                        {settings.data.legal.map(({label, link}) => (
                            <li className="footer-nav-legal" key={label}>
                                <PrismicNextLink field={link}>{label}</PrismicNextLink>
                            </li>
                        ))}
                    </div>
                    <div className="footer-column-reverse">
                        <a href="/">
                            <PrismicNextImage field={settings.data.site_logo} className="site-logo footer-logo"/>
                        </a>
                    </div>
                </div>
                
                
                
                
                {/*<div className="footer-column">
                    <Link href="/">
                        <PrismicNextImage field={settings.data.site_logo} className="site-logo"/>
                    </Link>
                    <p>© {new Date().getFullYear()} {settings.data.site_title}</p>
                </div>
                <div className="footer-column">
                    <h4 className="footer-category">Socials</h4>
                    <ul className="footer-links-block">
                        {settings.data.footer_navigation.map(({link, label, icon}) => (
                            <li key={label} className="footer-link">
                                <PrismicNextImage field={icon}/>
                                <PrismicNextLink field={link}>{label}</PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                        </div>*/}
            </div>
        </footer>
    )
}