import React from 'react';
import '../styles/blog.scss';
import BlogCard from './BlogCard';

interface BlogPost {
    id: number;
    href: string;
    image: string;
    title: string;
    description: string;
    author: string;
    date: string;
    authorAvatar: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        href: '/blog/web3-business',
        image: '/blogPosts/blog1.jpg',
        title: 'How Web3 Is Changing Business',
        description:
            'Explore how decentralization is reshaping how digital businesses are built and operated.',
        author: 'Jordan Valez',
        date: 'January 14, 2025',
        authorAvatar: '/image1.jpg',
    },
    {
        id: 2,
        href: '/blog/accepting-crypto-payments',
        image: '/blogPosts/blog7.jpg',
        title: 'Accepting Crypto Payments',
        description:
            'Why crypto is becoming a real option for businesses – and how to get started.',
        author: 'Tiffany Young',
        date: 'March 3, 2025',
        authorAvatar: '/image2.jpg',
    },
    {
        id: 3,
        href: '/blog/web3-digital-identity',
        image: '/blogPosts/blog3.jpg',
        title: 'Web3 and Digital Identity',
        description:
            'How wallets and decentralized IDs are changing how users log in and own their data.',
        author: 'Sophia Mason',
        date: 'February 22, 2025',
        authorAvatar: '/image3.jpg',
    },
    {
        id: 4,
        href: '/blog/fintech-replacing-banks',
        image: '/blogPosts/blog4.jpg',
        title: 'Why Fintech Is Replacing Banks',
        description:
            'Apps like Ledgerfy offer faster, simpler ways to manage money – no bank needed.',
        author: 'Alejandro Corja',
        date: 'April 7, 2025',
        authorAvatar: '/person4.jpg',
    },
    {
        id: 5,
        href: '/blog/what-are-daos-and-tokens',
        image: '/blogPosts/blog5.jpg',
        title: 'What Are DAOs and Tokens?',
        description:
            'Learn how communities are building and owning projects together with Web3 tools.',
        author: 'Henrik Schmidt',
        date: 'May 18, 2025',
        authorAvatar: '/person5.jpg',
    },
    {
        id: 6,
        href: '/blog/crypto-nomad-economy',
        image: '/blogPosts/blog6.jpg',
        title: 'Crypto and the Nomad Economy',
        description:
            'How freelancers and global workers are using crypto to build borderless careers.',
        author: 'Hank Reirden',
        date: 'December 9, 2024',
        authorAvatar: '/person6.jpg',
    },
];

function Blog() {
    return (
        <section className='blog_section'>
            <h2>Blog</h2>
            <p className='subHeading'>
                Find the best news in Tech, finance and digital business
            </p>

            <main className='articles_container'>
                {blogPosts.map((post) => (
                    <BlogCard key={post.id} {...post} />
                ))}
            </main>
        </section>
    );
}

export default Blog;
