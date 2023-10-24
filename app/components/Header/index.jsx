//'use client';
import {useState} from 'react'
import Burger from './Burger';
import Stairs from './Stairs';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';

export default function () {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
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
    )
}
