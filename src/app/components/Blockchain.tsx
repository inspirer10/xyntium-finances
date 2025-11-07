'use client';

import React, { useState } from 'react';
import '../styles/blockchain.scss';
import { Icon } from '@iconify/react';

interface CurrencyData {
    id: number;
    backgroundColor: string;
    textColor: string;
    icon: string;
}

const currenciesData: CurrencyData[] = [
    {
        id: 1,
        backgroundColor: '#f7931a',
        textColor: '#663300',
        icon: 'token:btc',
    },
    {
        id: 2,
        backgroundColor: '#ba0000',
        textColor: '#ffadad',
        icon: 'token:abstract',
    },
    {
        id: 3,
        backgroundColor: '#429f59',
        textColor: '#a8e6c1',
        icon: 'token:usdt',
    },
    {
        id: 4,
        backgroundColor: '#627eea',
        textColor: '#c5d9ff',
        icon: 'token:eth',
    },
    {
        id: 5,
        backgroundColor: '#8247e5',
        textColor: '#e0c3ff',
        icon: 'token:matic',
    },
    {
        id: 6,
        backgroundColor: '#f0b90b',
        textColor: '#8c6600',
        icon: 'token:bnb',
    },
    {
        id: 7,
        backgroundColor: '#e91e63',
        textColor: '#ff99cc',
        icon: 'token:dot',
    },
    {
        id: 8,
        backgroundColor: '#224681',
        textColor: '#6b9fd9',
        icon: 'token:ltc',
    },
    {
        id: 9,
        backgroundColor: '#66b0a8',
        textColor: '#2d5a52',
        icon: 'token:xtz',
    },
    {
        id: 10,
        backgroundColor: '#5469d4',
        textColor: '#a8c5ff',
        icon: 'token:sol',
    },
    {
        id: 11,
        backgroundColor: '#c89b3c',
        textColor: '#5a4a1a',
        icon: 'token:euroe',
    },
    {
        id: 12,
        backgroundColor: '#2e2e2e',
        textColor: '#808080',
        icon: 'token:stellar',
    },
];

function Blockchain() {
    const [selectedCurrencyId, setSelectedCurrencyId] = useState<number>(1);
    const selectedCurrency = currenciesData.find(
        (currency) => currency.id === selectedCurrencyId
    );

    return (
        <section className='blockchain_section'>
            <div className='icon_wrapper'>
                <Icon icon='eos-icons:blockchain' className='icon' />
            </div>

            <p className='overHeading'>Blockchain technology</p>
            <h2>Lighter than a credit card.</h2>
            <h2>
                <span>Powerful.</span> Your portable bank.
            </h2>

            <main>
                <div className='top_wrapper'>
                    <div
                        className='card'
                        style={{
                            backgroundColor: selectedCurrency?.backgroundColor,
                            color: selectedCurrency?.textColor,
                        }}
                    >
                        <p className='logo'>Xyntium</p>
                        <p className='slogan'>
                            Your crypto. Your money. 100% secure
                        </p>
                        <Icon icon='ri:visa-line' className='visa_icon' />
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />

                        <Icon
                            icon={selectedCurrency?.icon ?? ''}
                            className='currency_icon'
                        />
                    </div>

                    <aside>
                        <p className='number'>[01]</p>
                        <h6 className='label'>
                            Compatible with multiple chains & cryptocurrencies
                        </h6>
                        <div className='currencies_wrapper'>
                            {currenciesData.map(
                                ({ id, backgroundColor, icon }) => (
                                    <div
                                        className={`item ${
                                            selectedCurrencyId === id
                                                ? 'active'
                                                : ''
                                        }`}
                                        key={id}
                                        style={{ backgroundColor }}
                                        onClick={() =>
                                            setSelectedCurrencyId(id)
                                        }
                                    >
                                        <Icon icon={icon} className='icon' />
                                    </div>
                                )
                            )}
                        </div>
                    </aside>
                </div>

                <div className='bottom_wrapper'>
                    <aside>
                        <p className='number'>[02]</p>
                        <h6 className='label'>
                            Buy, invest & store your money
                        </h6>
                        <p className='reason'>
                            <Icon icon='stash:light-bulb' className='icon' />
                            Keep your money secure
                        </p>
                        <p className='reason'>
                            <Icon icon='stash:light-bulb' className='icon' />
                            Send money to your wallet
                        </p>
                        <p className='reason'>
                            <Icon icon='stash:light-bulb' className='icon' />
                            Buy crypto currencies
                        </p>
                    </aside>
                    <div className='card'>
                        <Icon icon='token:pdex' className='logo_icon' />
                        <p className='slogan'>
                            <Icon icon='carbon:iot-connect' className='icon' />
                            Multi-currency wallet
                        </p>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Blockchain;
