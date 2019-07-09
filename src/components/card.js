import React from 'react';
import '../css/card.css';
import { Link } from 'gatsby';

const Card = ({ post }) => (
    <div className="card-wrapper">
        <div className="card">
            <div
                className="card__media"
                style={{
                    backgroundImage: `url(${post.featuredImage})`,
                }}
            >
                <div className="card__overlay"></div>
            </div>
            <div className="card__content">
                <div className="card__content-metadata">
                    <span className="card__content-category">{post.type}</span>
                    <span className="card__content-date">{post.date}</span>
                </div>
                <h2 className="card__content-title">
                    <Link to={post.slug}>{post.title}</Link>
                </h2>
                <p className="card__content-body">{post.excerpt}</p>
                <div className="card__content-cta">
                    <div className="card__content-cta-link">
                        <Link to={post.slug}>
                            <span className="card__content-cta-link-label">
                                Read More
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Card;
