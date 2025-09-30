import React from 'react';
import '../styles/introduction.scss';
import { Icon } from '@iconify/react';

function Introduction() {
    return (
        <section className='introduction_section'>
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

                <div className='test-card'>
                    <p className='logo'>Xyntium</p>
                    <p className='owner'>Johnny Herman</p>
                    <Icon icon='ri:visa-line' className='icon' />

                    <Icon
                        icon='streamline-logos:elastic-x-pack-logo-solid'
                        className='logo_icon'
                    />
                </div>
            </main>
        </section>
    );
}

export default Introduction;
