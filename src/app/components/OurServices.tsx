import React from 'react';
import '../styles/ourServices.scss';
import { Icon } from '@iconify/react';

interface CardData {
    icon: string;
    heading: string;
    text: string;
    id: number;
}

const cardsData: CardData[] = [
    {
        icon: 'mingcute:briefcase-line',
        heading: 'Your own business',
        text: 'We help you create a company.',
        id: 1,
    },
    {
        icon: 'solar:dollar-minimalistic-linear',
        heading: 'Investments',
        text: 'Invest & grow your money.',
        id: 2,
    },
    {
        icon: 'solar:calculator-minimalistic-linear',
        heading: 'Accounting',
        text: 'We take care of your taxes.',
        id: 3,
    },
    {
        icon: 'solar:wallet-linear',
        heading: 'Wallets',
        text: 'Make payments & receive money.',
        id: 4,
    },
    {
        icon: 'solar:card-linear',
        heading: 'Cards',
        text: 'Create & use digital cards.',
        id: 5,
    },
    {
        icon: 'solar:document-text-linear',
        heading: 'Invoicing',
        text: 'Collect payments from clients.',
        id: 6,
    },
    {
        icon: 'solar:folder-linear',
        heading: 'Documentation',
        text: 'Organize your documents.',
        id: 7,
    },
    {
        icon: 'solar:users-group-rounded-linear',
        heading: 'Payroll',
        text: 'Pay your team and manage the business.',
        id: 8,
    },
];

function OurServices() {
    return (
        <section className='ourServices_section'>
            <h2>Our Services:</h2>

            <main className='cards_wrapper'>
                {cardsData.map(({ text, heading, icon, id }) => (
                    <div className='card' key={id}>
                        <div className='icon_wrapper'>
                            <Icon icon={icon} className='icon' />
                            <div className='icon_background' />
                        </div>

                        <h5 className='heading'>{heading}</h5>
                        <p className='description'>{text}</p>
                    </div>
                ))}
            </main>
        </section>
    );
}

export default OurServices;
