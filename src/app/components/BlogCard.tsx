import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

type BlogCardProps = {
    id: number;
    href: string;
    image: string;
    title: string;
    description: string;
    author: string;
    date: string;
    authorAvatar?: string;
};

function BlogCard({
    id,
    href,
    image,
    title,
    description,
    author,
    date,
    authorAvatar,
}: BlogCardProps) {
    return (
        <article
            key={id}
            className='blogCard'
            role='article'
            aria-label={title}
        >
            <Link href={href} className='blogCard_link' aria-label={title}>
                <div className='blogCard_media'>
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={420}
                        sizes='(max-width: 768px) 100vw, 33vw'
                        priority={false}
                    />

                    <Icon
                        icon='streamline-logos:elastic-x-pack-logo-solid'
                        className='logo'
                    />
                </div>

                <div className='blogCard_header'>
                    <h3 className='blogCard_title'>{title}</h3>
                    <p className='blogCard_desc'>{description}</p>
                </div>

                <div className='blogCard_meta'>
                    <div className='blogCard_author'>
                        {authorAvatar ? (
                            <Image
                                src={authorAvatar}
                                alt={author}
                                width={30}
                                height={30}
                                className='blogCard_avatar'
                            />
                        ) : (
                            <span
                                className='blogCard_avatarFallback'
                                aria-hidden
                            >
                                {author.charAt(0).toUpperCase()}
                            </span>
                        )}
                        <span className='blogCard_authorName'>{author}</span>
                    </div>
                    <time
                        className='blogCard_date'
                        dateTime={new Date(date).toISOString()}
                    >
                        {date}
                    </time>
                </div>
            </Link>
        </article>
    );
}

export default BlogCard;
