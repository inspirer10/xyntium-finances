import React from 'react';
import '../styles/navbar.scss';
import { Icon } from '@iconify/react';

function Navbar() {
    return (
        <nav>
            <p className='logo'>
                <Icon
                    icon='streamline-logos:elastic-x-pack-logo-solid'
                    className='icon'
                />
                XYNTIUM
            </p>

            <ul>
                <li>Home</li>
                <li>Why Xyntium?</li>
                <li>How it works</li>
                <li>Testimonials</li>
                <li>FAQ</li>
            </ul>

            <button>Get Started!</button>
        </nav>
    );
}

export default Navbar;
