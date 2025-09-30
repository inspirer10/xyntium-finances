'use client';

import React from 'react';
import '../styles/navbar.scss';
import { Icon } from '@iconify/react';
import { useScrolled } from './hooks/useScrolled';
import Link from 'next/link';

function Navbar() {
    const isScrolled = useScrolled(100);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <p className={`logo ${isScrolled ? 'scrolled' : ''}`}>
                <Icon
                    icon='streamline-logos:elastic-x-pack-logo-solid'
                    className='icon'
                />
                XYNTIUM
            </p>

            <ul>
                <Link className='link' href='#top'>
                    Home
                </Link>
                <Link className='link' href='#top'>
                    Why Xyntium?
                </Link>
                <Link className='link' href='#howWorks'>
                    How it works
                </Link>
                <Link className='link' href='testimonials'>
                    Testimonials
                </Link>
                <Link className='link' href='faq'>
                    FAQ
                </Link>
            </ul>

            <button>Get Started!</button>
        </nav>
    );
}

export default Navbar;
