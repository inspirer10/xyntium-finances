import React from 'react';
import '../styles/header.scss';
import Image from 'next/image';
import LightRays from './LightRays';

//* https://reactbits.dev/backgrounds/light-rays

function Header() {
    return (
        <header className='introduction'>
            <div
                style={{ width: '100%', height: '100vh', position: 'relative' }}
            >
                <LightRays
                    /* raysOrigin='top-center'
                    raysColor='#9eff9d'
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className='custom-rays' */

                    raysOrigin='top-center'
                    raysColor='#9eff9d'
                    raysSpeed={1}
                    lightSpread={1}
                    rayLength={1.25}
                    followMouse={true}
                    fadeDistance={1}
                    saturation={1}
                    mouseInfluence={0.1}
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
                            height={55}
                            width={55}
                            quality={90}
                            alt=''
                        />
                        <Image
                            src='/image2.jpg'
                            height={50}
                            width={55}
                            quality={90}
                            alt=''
                        />
                        <Image
                            src='/image3.jpg'
                            height={55}
                            width={55}
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

                <Image src={'/globe.svg'} height={350} width={350} alt='xd' />
            </article>

            <p className='we-work'>Partners and collaborations</p>
            <div></div>
        </header>
    );
}

export default Header;
