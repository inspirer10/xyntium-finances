import { Icon } from '@iconify/react';
import '../styles/chooseCard.scss';
import React from 'react';

function ChooseYourCard() {
    return (
        <section className='chooseCard_section'>
            <h2>
                Join, Choose Your <span>Unique Card</span>
            </h2>
            <div className='cards_carousel'>
                <div className='group'>
                    <div className='card'>
                        <p className='company_name'>Xyntium</p>
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                        <Icon icon='ri:visa-line' className='visa_icon' />
                    </div>
                    <div className='card'>
                        <p className='company_name'>Xyntium</p>
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                        <Icon icon='ri:visa-line' className='visa_icon' />
                    </div>
                    <div className='card'>
                        <p className='company_name'>Xyntium</p>
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                        <Icon icon='ri:visa-line' className='visa_icon' />
                    </div>
                    <div className='card'>
                        <p className='company_name'>Xyntium</p>
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                        <Icon icon='ri:visa-line' className='visa_icon' />
                    </div>
                    <div className='card'>
                        <p className='company_name'>Xyntium</p>
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                        <Icon icon='ri:visa-line' className='visa_icon' />
                    </div>
                </div>
                <div className='group' aria-hidden='true'>
                    <div className='card'>
                        <p className='company_name'>Xyntium</p>
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                        <Icon icon='ri:visa-line' className='visa_icon' />
                    </div>
                    <div className='card'>
                        <p className='company_name'>Xyntium</p>
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                        <Icon icon='ri:visa-line' className='visa_icon' />
                    </div>
                    <div className='card'>
                        <p className='company_name'>Xyntium</p>
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                        <Icon icon='ri:visa-line' className='visa_icon' />
                    </div>
                    <div className='card'>
                        <p className='company_name'>Xyntium</p>
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                        <Icon icon='ri:visa-line' className='visa_icon' />
                    </div>
                    <div className='card'>
                        <p className='company_name'>Xyntium</p>
                        <Icon
                            icon='streamline-logos:elastic-x-pack-logo-solid'
                            className='logo_icon'
                        />
                        <Icon icon='ri:visa-line' className='visa_icon' />
                    </div>
                </div>
            </div>
            <h3>and Transform Your Life.</h3>

            <button>
                <Icon icon='mdi:apple' className='icon' /> Download from App
                Store
            </button>
        </section>
    );
}

export default ChooseYourCard;
