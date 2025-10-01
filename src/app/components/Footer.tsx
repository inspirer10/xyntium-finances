import React from 'react';
import '../styles/footer.scss';
import { Icon } from '@iconify/react';

function Footer() {
    return (
        <footer className='footer'>
            <h2>Xyntium</h2>

            <main className='footer-container'>
                <div className='wrapper'>
                    <p className='logo-wrapper'>
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo-icon'
                        />
                        <span>XYNTIUM</span>
                    </p>

                    <p className='address'>
                        Level 8, 12 Sample St <br />
                        Portland nsw 300, NY
                    </p>

                    <button>Get Started</button>
                </div>

                <div className='wrapper'>
                    <h5>Company</h5>
                    <p className='footer-link'>Home</p>
                    <p className='footer-link'>About</p>
                    <p className='footer-link'>Services</p>
                    <p className='footer-link'>Contact</p>
                </div>
                <div className='wrapper'>
                    <h5>Services</h5>
                    <p className='footer-link'>Paid Ads</p>
                    <p className='footer-link'>Brand Strategy</p>
                    <p className='footer-link'>Card Design</p>
                    <p className='footer-link'>Help</p>
                </div>
                <div className='wrapper'>
                    <div className='media-wrapper'>
                        <Icon icon='mdi:instagram' className='icon' />
                        Instagram
                    </div>
                    <div className='media-wrapper'>
                        <Icon icon='mdi:linkedin' className='icon' />
                        LinkedIn
                    </div>
                    <div className='media-wrapper'>
                        <Icon icon='mdi:youtube' className='icon' />
                        YouTube
                    </div>
                </div>
            </main>
        </footer>
    );
}

export default Footer;
