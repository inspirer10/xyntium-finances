import React from 'react';
import '../styles/header.scss';
import Image from 'next/image';

function Header() {
    return (
        <header className='introduction'>
            <article>
                <div className='text-wrapper'>
                    <h1>
                        Track & Manage your finaces with <span>ease</span>
                    </h1>
                    <p className='subheading'>
                        Transfer money globally in multiple curriencies - fast,
                        simple and transparent
                    </p>

                    <div className='buttons-wrapper'>
                        <button>Try Xyntium for free</button>
                        <button>Book a demo</button>
                    </div>
                </div>

                <Image src={'/globe.svg'} height={200} width={200} alt='xd' />
            </article>

            <p className='we-work'>We work with:</p>
            <div></div>
        </header>
    );
}

export default Header;
