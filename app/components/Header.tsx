//'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import Burger from '@/app/components/Header/Burger';
import Stairs from '@/app/components/Header/Stairs';
import Menu from '@/app/components/Header/Menu';
import { AnimatePresence } from 'framer-motion';

import HeaderComponent from '@/app/components/Header/HeaderComponent'

// Import Priscmic Data Client
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage  } from '@prismicio/next';

export default async function Header({}) {
    
    const client = createClient();  
    const settings = await client.getSingle("settings");

    return (
            <HeaderComponent settings={settings}/>
    )
}