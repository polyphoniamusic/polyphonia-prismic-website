"use client";

import type { Metadata, ResolvingMetadata } from 'next'
import './css/globals.css'
import clsx from 'clsx'
import 'styled-jsx/style';

// Import Priscmic Data Client
import { createClient } from '@/prismicio'

// Import components
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
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
    description: settings.data.meta_description || "The official website of Polyphonia Music, an independant record label based in France empowering artists with comprehensive strategies to develop their career.",    
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}*/

// Route Layout
export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {

  /*useEffect(() => {
    initLocomotiveScroll();
  }, []);*/
  
  // Locomotive Scroll Implementation
  /*useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])*/

  return (
   
      <html lang="en" className={clsx(spaceGrotesk.variable, poppins.variable, n27Regular.variable)}>
        <body data-scroll-container>
          <AnimatePresence mode="wait">
            <motion.div>
              <CustomCursor/>
              <Header/>
              {children}
              <Footer/>
              <motion.div 
                className="slide-in"
                initial={{translateY: 0}}
                animate={{translateY: -100 + 'svh'}}
                exit={{translateY:  0}}
                transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}>
                  <Loader/>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </body>
      </html>
  )
}
