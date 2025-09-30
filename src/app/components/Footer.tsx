import React from 'react';
import '../styles/footer.scss';
import { Icon } from '@iconify/react';

function Footer() {
    return (
        <footer className='footer'>
            <h2>Xyntium</h2>

            <main className='footer_main'>
                <div className='socials-wrapper'>
                    <Icon icon='mdi:facebook' className='icon' />
                    <Icon icon='mdi:instagram' className='icon' />
                    <Icon icon='mdi:linkedin' className='icon' />
                </div>

                <div className='info-wrapper'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>&copy; 2025 Xyntium Finance</p>
                    <p>All rights reserved</p>
                </div>
            </main>
        </footer>
    );
}

export default Footer;
