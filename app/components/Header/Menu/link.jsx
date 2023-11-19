import styles from './style.module.scss'
import { motion } from 'framer-motion';
import { mountAnim, rotateX } from '../anim';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';

//import { useMatchMedia } from "@/app/components/useMatchMedia";
import { PrismicNextLink, PrismicNextImage  } from '@prismicio/next';

export default function link({data, index }) {

    //const isDesktopResolution = useMatchMedia("(min-width:1050px)", true);

    const { label, link, monogram, icon } = data;
    const outer = useRef(null);
    const inner = useRef(null);

    const manageMouseEnter = (e) => {
        const bounds = e.target.getBoundingClientRect();
        if(e.clientY < bounds.top + (bounds.height / 2)){
            gsap.set(outer.current, {top: "-100%"})
            gsap.set(inner.current, {top: "100%"})
        }
        else{
            gsap.set(outer.current, {top: "100%"})
            gsap.set(inner.current, {top: "-100%"})
        }
        gsap.to(outer.current, {top: "0%", duration: 0.3})
        gsap.to(inner.current, {top: "0%",  duration: 0.3})
    }

    const manageMouseLeave = (e) => {
        const bounds = e.target.getBoundingClientRect();
        if(e.clientY < bounds.top + (bounds.height / 2)){
            gsap.to(outer.current, {top: "-100%", duration: 0.3})
            gsap.to(inner.current, {top: "100%",  duration: 0.3})
        }
        else{
            gsap.to(outer.current, {top: "100%", duration: 0.3})
            gsap.to(inner.current, {top: "-100%",  duration: 0.3})
        }
    }

    return (
        <motion.div 
            onMouseEnter={ (e) => {manageMouseEnter(e)}} 
            onMouseLeave={(e) => {manageMouseLeave(e)}} 
            variants={rotateX} 
            {...mountAnim}
            custom={index} 
            className={styles.el}>
            {icon ? 
                (
                    <PrismicNextLink field={link} >
                            <PrismicNextImage width="30" height="30" field={icon} className="minWidth1050"/>
                            <div className="button-cta button-cta-white button-cta-small-padding maxWidth1050">{monogram}</div>
                    </PrismicNextLink>
                ) : (
                    <PrismicNextLink field={link}>
                        <div>
                            {label}
                            <Image width="30" height="30" className="arrow" alt="Arrow White Icon" src="/assets/images/icons/arrow-icon-white.svg"/>
                        </div>
                    </PrismicNextLink>  
                )
            }
            <div ref={outer} className={styles.outer}>
                <div ref={inner} className={styles.inner}>
                    {/*{
                        [...Array(2)].map( (_, index) => {
                        return <div key={index} className={styles.container}>
                            <p>{description}</p>
                            <p>{description}</p>
                        </div>
                        })
                    }*/}
                </div>
            </div>

        </motion.div>
        
    )
}
