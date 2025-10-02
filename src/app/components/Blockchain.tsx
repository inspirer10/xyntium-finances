import React from 'react';
import '../styles/blockchain.scss';
import { Icon } from '@iconify/react';

interface CurrencyData {
    id: number;
    backgroundColor: string;
    icon: string;
}

const currenciesData: CurrencyData[] = [
    {
        id: 1,
        backgroundColor: '#f7931a',
        icon: 'token:btc',
    },
    {
        id: 2,
        backgroundColor: '#ba0000',
        icon: 'token:abstract',
    },
    {
        id: 3,
        backgroundColor: '#429f59',
        icon: 'token:usdt',
    },
    {
        id: 4,
        backgroundColor: '#627eea',
        icon: 'token:eth',
    },
    {
        id: 5,
        backgroundColor: '#8247e5',
        icon: 'token:matic',
    },
    {
        id: 6,
        backgroundColor: '#f0b90b',
        icon: 'token:bnb',
    },
    {
        id: 7,
        backgroundColor: '#e91e63',
        icon: 'token:dot',
    },
    {
        id: 8,
        backgroundColor: '#224681',
        icon: 'token:ltc',
    },
    {
        id: 9,
        backgroundColor: '#66b0a8',
        icon: 'token:xtz',
    },
    {
        id: 10,
        backgroundColor: '#5469d4',
        icon: 'token:sol',
    },
    {
        id: 11,
        backgroundColor: '#c89b3c',
        icon: 'token:euroe',
    },
    {
        id: 12,
        backgroundColor: '#2e2e2e',
        icon: 'token:stellar',
    },
];

function Blockchain() {
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
                    <div className='card'>
                        <p className='logo'>Xyntium</p>
                        <p className='slogan'>
                            Your crypto. Your money. 100% secure
                        </p>
                        <Icon icon='ri:visa-line' className='visa_icon' />
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
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
                                        className='item'
                                        key={id}
                                        style={{ backgroundColor }}
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
                        <p>
                            <Icon icon='stash:light-bulb' className='icon' />
                            Keep your money secure
                        </p>
                        <p>
                            <Icon icon='stash:light-bulb' className='icon' />
                            Send money to your wallet
                        </p>
                        <p>
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
