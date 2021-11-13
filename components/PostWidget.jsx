import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {

    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug)
                .then(result => setRelatedPosts(result));
        } else {
            getRecentPosts()
                .then(result => setRelatedPosts(result));
        }
    }, [slug])
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                {slug ? 'Similar Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map((post) => (
                <div key={post.title} className="flex items-center w-full mb-8">
                    <div className="w-16 flex-none">
                        <img
                            src={post.featuredImage.url}
                            alt={post.title}
                            height="60px"
                            width="60px"
                            className="align-middle rounded-full" />
                    </div>
                    <div className="flex-grow ml-4">
                        <p className="text-green-500 font-xs">
                            {moment(post.createdAt).format('MMMM Do YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default PostWidget