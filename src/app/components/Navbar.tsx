'use client';

import React from 'react';
import '../styles/navbar.scss';
import { Icon } from '@iconify/react';
import { useScrolled } from './hooks/useScrolled';

function Navbar() {
    const isScrolled = useScrolled(100);

    const handleSectionRouting = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        section: string
    ) => {
        e.preventDefault();

        // Jeśli jesteśmy na stronie głównej, przewiń do sekcji
        document
            .getElementById(`${section}`)
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <a
                className={`logo ${isScrolled ? 'scrolled' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <Icon
                    icon='streamline-logos:elastic-x-pack-logo-solid'
                    className='icon'
                />
                XYNTIUM
            </a>

            <ul className={`${isScrolled ? 'scrolled' : ''}`}>
                <a
                    className='link'
                    href='#about'
                    onClick={(e) => handleSectionRouting(e, 'about')}
                >
                    About
                </a>

                <a
                    className='link'
                    href='#whyXyntium'
                    onClick={(e) => handleSectionRouting(e, 'whyXyntium')}
                >
                    Why Xyntium?
                </a>
                <a
                    className='link'
                    href='#howWorks'
                    onClick={(e) => handleSectionRouting(e, 'howWorks')}
                >
                    How it works
                </a>
                <a
                    className='link'
                    href='#services'
                    onClick={(e) => handleSectionRouting(e, 'services')}
                >
                    Services
                </a>
                <a
                    className='link'
                    href='#faq'
                    onClick={(e) => handleSectionRouting(e, 'faq')}
                >
                    FAQ
                </a>
            </ul>

            <button className={`button ${isScrolled ? 'scrolled' : ''}`}>
                Get Started!
            </button>
        </nav>
    );
}

export default Navbar;
