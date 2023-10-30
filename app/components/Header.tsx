//'use client';

import HeaderComponent from '@/app/components/Header/HeaderComponent'

// Import Priscmic Data Client
import { createClient } from '@/prismicio';

export default async function Header() {    

    const client = createClient();  
    const settings = await client.getSingle("settings");

    return (
        <HeaderComponent settings={settings}/>
    )
}