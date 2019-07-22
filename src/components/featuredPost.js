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
            <div className="featured-post__cta">
                <div className="featured-post__cta-link">
                    <Link to={post.slug}>
                        <span className="featured-post__cta-link-label">
                            Read &rarr;
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default FeaturedPost;
