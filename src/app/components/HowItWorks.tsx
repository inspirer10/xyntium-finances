'use client';

import React, { useState } from 'react';
import '../styles/howItWorks.scss';
import Image from 'next/image';

const stepsData = [
    {
        id: 0,
        title: 'Explore',
        number: '01',
        image: '/explore.jpg',
        heading: 'Explore Our Services',
        description:
            'Start by exploring our comprehensive range of financial services. From secure digital wallets to advanced blockchain solutions, discover how Xyntium can transform your financial operations with cutting-edge technology.',
    },
    {
        id: 1,
        title: 'Connect',
        number: '02',
        image: '/test.jpg',
        heading: 'Connect Your Accounts',
        description:
            'Seamlessly connect your existing accounts to our platform. Our secure integration process ensures your assets are protected while giving you access to our full suite of financial tools and blockchain capabilities.',
    },
    {
        id: 2,
        title: 'Transact',
        number: '03',
        image: '/about2.jpg',
        heading: 'Start Transacting',
        description:
            "Begin making secure transactions on our platform. Whether it's international transfers, cryptocurrency exchanges, or smart contract deployments, experience the speed and security of next-generation financial technology.",
    },
    {
        id: 3,
        title: 'Grow',
        number: '04',
        image: '/about-stats.jpg',
        heading: 'Grow Your Assets',
        description:
            'Maximize your financial potential with our advanced tools and insights. Access real-time analytics, automated portfolio management, and exclusive investment opportunities to help your assets grow sustainably.',
    },
];

function HowItWorks() {
    const [activeStepId, setActiveStepId] = useState(0);

    const handleMouseEnter = (stepId: number) => {
        setActiveStepId(stepId);
    };

    return (
        <section className='howItWorks_section' id='howWorks'>
            <h2>Everything you need to know</h2>
            <h3>To start your fantastic journey</h3>

            <main>
                <p className='overHeading'>How it Works</p>
                <h4>
                    We handle <span>everything</span> so you don&apos;t have to
                </h4>

                <div className='main_container'>
                    <article>
                        {stepsData.map((step) => (
                            <div
                                key={step.id}
                                className='position'
                                onMouseEnter={() => handleMouseEnter(step.id)}
                            >
                                <p>{step.title}</p>
                                <span>{step.number}</span>
                            </div>
                        ))}
                    </article>

                    <aside>
                        <div className='image_wrapper'>
                            {stepsData.map(({ id, image, heading }) => (
                                <Image
                                    key={id}
                                    src={image}
                                    alt={heading}
                                    height={450}
                                    width={550}
                                    quality={90}
                                    priority={id === 0 ? true : false}
                                    className={
                                        activeStepId === id ? 'active' : ''
                                    }
                                />
                            ))}
                        </div>

                        <div className='info_wrapper'>
                            <h6>{stepsData[activeStepId].heading}</h6>
                            <p>{stepsData[activeStepId].description}</p>
                        </div>
                    </aside>
                </div>
            </main>

            <div className='book_call_wrapper'>
                <div>
                    <h6>Not sure what you need?</h6>
                    <p>
                        Book a free call with our experts to discuss your
                        financial goals and find the perfect solutions just for
                        you.
                    </p>
                </div>

                <button>Book a Free Call</button>
            </div>
        </section>
    );
}

export default HowItWorks;
