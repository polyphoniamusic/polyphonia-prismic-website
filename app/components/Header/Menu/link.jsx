import styles from './style.module.scss'
import { motion } from 'framer-motion';
import { mountAnim, rotateX } from '../anim';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function link({data, index}) {
    const { title, link, newtab, icon, name, description } = data;
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
            {title ? 
                (
                    <Link href={link} target={newtab}>
                        <div>
                            {title}
                            <Image width="30" height="30" className="arrow" src="/assets/images/icons/arrow-icon-white.svg"/>
                        </div>
                    </Link>
                ) : (
                    <div>
                    {name ? (
                        <Link href={link} target={newtab}>{name}</Link>
                            ) : (
                            <Link href={link} target={newtab}>
                                <Image width="30" height="30" src={icon}/>
                            </Link>
                        )
                    }
                    </div>
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
