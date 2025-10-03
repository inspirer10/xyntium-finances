'use client';

import React, { useState } from 'react';
import '../styles/faq.scss';
import { Icon } from '@iconify/react';

interface FAQ {
    id: number;
    question: string;
    answer: string;
}

const faqData: FAQ[] = [
    {
        id: 1,
        question: 'What is a Xyntium digital card?',
        answer: 'A Xyntium digital card is a virtual payment card that exists only in electronic form. It has all the features of a traditional card including a 16-digit number, expiration date, and CVV security code, but provides enhanced security by masking your real account details during transactions.',
    },
    {
        id: 2,
        question: 'How secure are Xyntium cards?',
        answer: 'Xyntium cards offer maximum security through advanced encryption, unique card numbers for each transaction, and real-time fraud monitoring. Your actual account information is never shared with merchants, significantly reducing the risk of data breaches and unauthorized transactions.',
    },
    {
        id: 3,
        question: 'Are there any hidden fees?',
        answer: 'No, Xyntium operates with complete transparency and zero hidden fees. All costs are clearly disclosed upfront, and we believe in honest, straightforward pricing for all our financial services.',
    },
    {
        id: 4,
        question: 'Can I use my card internationally?',
        answer: 'Yes, Xyntium cards work globally in over 35 countries. You can make seamless cross-border payments and transactions in multiple currencies without worrying about compatibility issues or excessive foreign transaction fees.',
    },
    {
        id: 5,
        question: 'How do I create a virtual card?',
        answer: 'Creating a virtual card is instant and easy. Simply log into your Xyntium app or website, navigate to the cards section, and generate a new virtual card. You can set spending limits, expiration dates, and even create single-use cards for specific purchases.',
    },
    {
        id: 6,
        question: 'Can I track my spending?',
        answer: 'Absolutely. Xyntium provides real-time expense tracking, detailed transaction history, and spending analytics. You can categorize purchases, set budgets, and receive notifications for all card activities through our intuitive dashboard.',
    },
    {
        id: 7,
        question: 'Do I need a traditional bank account?',
        answer: "No, you don't need a traditional bank account. Xyntium functions as a complete digital wallet solution where you can load funds, manage multiple currencies, and make payments globally using just our platform.",
    },
];

function Faq() {
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section className='faq_section' id='faq'>
            <h2>Frequently Asked Questions</h2>

            <aside>
                {faqData.map(({ id, question, answer }) => {
                    const isOpen = openId === id;
                    return (
                        <article
                            key={id}
                            className={`item ${isOpen ? 'active' : ''}`}
                        >
                            <h6
                                className='question'
                                onClick={() => setOpenId(isOpen ? null : id)}
                            >
                                <span className='q-text'>{question}</span>
                                <Icon
                                    icon={isOpen ? 'mdi:minus' : 'mdi:plus'}
                                    className='icon'
                                />
                            </h6>

                            <div className='answer'>
                                <p>{answer}</p>
                            </div>
                        </article>
                    );
                })}
            </aside>
        </section>
    );
}

export default Faq;
