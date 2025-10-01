import React from 'react';
import '../styles/about.scss';
import Image from 'next/image';

interface CardProperties {
    value: number;
    label: string;
    description: string;
}

const keyStats: CardProperties[] = [
    {
        value: 12000,
        label: '+',
        description:
            'Individuals and businesses trust Xyntium to manage their finances globally',
    },
    {
        value: 35,
        label: '+',
        description: 'Countries served through seamless cross-border payments',
    },
    {
        value: 98,
        label: '%',
        description: 'Client satisfaction based on recent customer surveys',
    },
    {
        value: 40,
        label: '%',
        description:
            'Average transaction cost savings using digital Xyntium Cards',
    },
];

function About() {
    return (
        <section className='about_section' id='about'>
            <header>
                <Image
                    src='/about2.jpg'
                    width={425}
                    height={350}
                    quality={90}
                    alt=''
                />
                {/*   <p className='about_paragraph'>
                    At <span className='company'>Xyntium</span> we belive that
                    financial technology should empower everyone to transform
                    their financial lives with confidence and ease.{' '}
                    <span>
                        We are committed to breaking down barriers in the
                        traditional financial system by providing innovative
                        digital payment solutions that are transparent, secure,
                        and accessible to all.
                    </span>
                </p> */}

                <p className='about_paragraph'>
                    At <span className='company'>Xyntium</span> we belive in the
                    power of technology to create meaningful change in
                    people&apos;s lives. By offering virtual and physical
                    payment cards with advanced features like real-time expense
                    tracking, customizable spending limits, and instant global
                    transfers.{' '}
                    <span>
                        We&apos;re making it easier for individuals and
                        businesses to take control of their financial future.
                    </span>
                </p>
            </header>

            <main>
                <p className='overHeading'>Key Stats</p>

                <div className='stats_container'>
                    <Image
                        src='/about-stats.jpg'
                        width={425}
                        height={350}
                        quality={90}
                        alt=''
                    />

                    <div className='cards_wrapper'>
                        {keyStats.map(({ value, label, description }, id) => (
                            <div key={id} className='card'>
                                <p className='number'>[{id + 1}]</p>
                                <h3>
                                    {value}
                                    <span>{label}</span>
                                </h3>

                                <p className='description'>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
}

export default About;
