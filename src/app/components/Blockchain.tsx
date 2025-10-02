import React from 'react';
import '../styles/blockchain.scss';
import { Icon } from '@iconify/react';

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
                <div className=''>
                    <div className='card'></div>
                </div>

                <div className=''></div>
            </main>
        </section>
    );
}

export default Blockchain;
