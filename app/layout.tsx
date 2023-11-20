"use client";

import type { Metadata, ResolvingMetadata } from 'next'
import './css/globals.css'
import clsx from 'clsx'
import 'styled-jsx/style';
import { useEffect, useRef, useState } from 'react';

// Import Priscmic Data Client
import { createClient } from '@/prismicio'

// Import components
import Loader from '@/app/components/Loader';

// Import UX Components
import CustomCursor from "@/app/components/CustomCursor";
import { motion, AnimatePresence } from 'framer-motion';

// Importing Custom Fonts
import N27Regular from 'next/font/local'

const n27Regular = N27Regular({
  variable: '--font-n27-regular',
  src: [
    {
      path: './fonts/N27Regular.otf',
      weight: '300',
      style: 'normal',
    }
  ]
})

// Importing Google Fonts
import { Oswald, Space_Grotesk, Poppins } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['200', '400','500', '600', '700'],
})

// Metadata Function
/*export async function generateMetadata(): Promise<Metadata> {

  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "POLYPHONIA MUSIC",
    icon: settings.data.site_icon,
    description: settings.data.meta_description || "The official website of Polyphonia Music, an independant record label based in France empowering artists with comprehensive strategies to develop their career.",    
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}*/

//gsap.registerPlugin(ScrollTrigger);

// Route Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      gsap.to(container, {
        y: -(container.clientHeight - window.innerHeight),
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }
  }, []);*/

  return (
    <html lang="en" className={clsx(spaceGrotesk.variable, poppins.variable, n27Regular.variable)}>
      <body> {/* <div ref={containerRef}> */}
        <AnimatePresence mode="wait">
          <motion.div >
            <CustomCursor />
            {children}
            <motion.div
              className="slide-in"
              initial={{ translateY: 0 }}
              animate={{ translateY: -100 + 'svh' }}
              exit={{ translateY: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <Loader />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}