import React from 'react';
import '../styles/introduction.scss';
import { Icon } from '@iconify/react';

interface CryptoFeature {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const cardsData: CryptoFeature[] = [
    {
        id: 1,
        icon: 'solar:chat-round-money-broken',
        title: 'Buy & sell crypto currency',
        description:
            'Xyntium already supports multiple chains and cryptocurrencies',
    },
    {
        id: 2,
        icon: 'solar:graph-new-up-outline',
        title: 'Easy transations',
        description:
            'Send & receive money with your Xyntium wallets in a matter of seconds',
    },
    {
        id: 3,
        icon: 'solar:safe-square-broken',
        title: 'Safe storage',
        description:
            'Protect your assets with Xyntium innovative wallet technology',
    },
];

function Introduction() {
    return (
        <section className='introduction_section' id='whyXyntium'>
            <h2>Maximum security,</h2>
            <h3>zero hidden fees.</h3>

            <main className='cards_container'>
                <div className='card'>
                    <p className='logo'>Xyntium</p>
                    <p className='owner'>Amy Castro</p>
                    <Icon icon='ri:visa-line' className='icon' />

                    <Icon
                        icon='streamline-logos:elastic-x-pack-logo-solid'
                        className='logo_icon'
                    />
                </div>

                <div className='second-card'>
                    <p className='logo'>Xyntium</p>
                    <p className='owner'>Johnny Herman</p>
                    <Icon icon='ri:visa-line' className='icon' />

                    <Icon
                        icon='streamline-logos:elastic-x-pack-logo-solid'
                        className='logo_icon'
                    />
                </div>
            </main>

            <div className='cards_wrapper'>
                {cardsData.map(({ id, title, description, icon }) => (
                    <div className='card_item' key={id}>
                        <div className='icon_wrapper'>
                            <Icon icon={icon} className='icon' />
                        </div>
                        <h5 className='title'>{title}</h5>
                        <p className='description'>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Introduction;
