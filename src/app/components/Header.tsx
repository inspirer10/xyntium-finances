import React from 'react';
import '../styles/header.scss';
import Image from 'next/image';
import LightRays from './LightRays';
import { Icon } from '@iconify/react';

//* https://reactbits.dev/backgrounds/light-rays

function Header() {
    return (
        <header className='introduction'>
            <div
                style={{ width: '100%', height: '100vh', position: 'relative' }}
            >
                <LightRays
                    /*
                    raysSpeed={1.5}
                    lightSpread={0.75}
                    rayLength={1.25}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}*/

                    raysOrigin='top-center'
                    raysColor='#53a253'
                    raysSpeed={0.75}
                    lightSpread={0.75}
                    rayLength={1}
                    followMouse={true}
                    fadeDistance={1}
                    saturation={0}
                    mouseInfluence={0.075}
                    noiseAmount={0}
                    distortion={0}
                    className='custom-rays'
                />
            </div>
            <article>
                <div className='text-wrapper'>
                    <div className='overHeading'>
                        <Image
                            src='/image1.jpg'
                            height={50}
                            width={50}
                            quality={90}
                            alt=''
                        />
                        <Image
                            src='/image2.jpg'
                            height={50}
                            width={50}
                            quality={90}
                            alt=''
                        />
                        <Image
                            src='/image3.jpg'
                            height={50}
                            width={50}
                            quality={90}
                            alt=''
                        />
                        <p>Trusted by over 12k users</p>
                    </div>
                    <h1>
                        Track & Manage your finances with <span>ease</span>
                    </h1>
                    <p className='subheading'>
                        Transfer money globally in multiple curriencies - fast,
                        simple and transparent
                    </p>

                    <div className='buttons-wrapper'>
                        <button>Try Xyntium for free</button>
                        <button>Book a Demo</button>
                    </div>
                </div>

                <div className='cards_wrapper'>
                    <div className='card'>
                        <p className='logo'>Xyntium</p>
                        <p className='owner'>Tedd Herman</p>
                        <Icon icon='ri:visa-line' className='visa_icon' />
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                    </div>

                    <div className='card'>
                        <p className='logo'>Xyntium</p>
                        <p className='owner'>Ammy Klorix</p>
                        <Icon icon='ri:visa-line' className='visa_icon' />
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                    </div>

                    <div className='card'>
                        <p className='logo'>Xyntium</p>
                        <p className='owner'>John Random</p>
                        <Icon icon='ri:visa-line' className='visa_icon' />
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                    </div>
                </div>
            </article>

            <p className='we-work'>Partners and collaborations</p>
            <div className='logos_container'>
                <div className='group'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
