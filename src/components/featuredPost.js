import React from 'react';
import '../css/featured-post.css';
import { Link } from 'gatsby';

const FeaturedPost = ({ post }) => (
    <div
        className="featured-post"
        style={{
            backgroundImage: `url(${post.featuredImage})`,
        }}
    >
        <div className="featured-post__overlay"></div>
        <div className="featured-post__content">
            <div className="featured-post__text">
                <h1 className="featured-post__text-title">
                    <Link to={post.slug}>{post.title}</Link>
                </h1>
                <p className="featured-post__text-body">{post.excerpt}</p>
            </div>
            <div className="button-link button-link--large">
                <Link to={post.slug}>
                    <span className="button-link__label button-link__label--large">
                        Read &rarr;
                    </span>
                </Link>
            </div>
        </div>
    </div>
);

export default FeaturedPost;
