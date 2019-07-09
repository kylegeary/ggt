import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import '../css/post.css';

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                author
                date
                type
                featuredImage
                featuredImageAlt
            }
            code {
                body
            }
        }
    }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
    <Layout>
        <div className="post">
            <section className="post__info">
                <span className="post__info-date">{post.frontmatter.date}</span>
                <h1 className="post__info-title">{post.frontmatter.title}</h1>
                <span className="post__info-author">
                    By: {post.frontmatter.author}
                </span>
                <span className="post__info-type">{post.frontmatter.type}</span>
            </section>
            <main className="post__body">
                <img
                    className="post__body-featured-image"
                    src={post.frontmatter.featuredImage}
                    alt={post.frontmatter.featuredImageAlt}
                />
                <MDXRenderer>{post.code.body}</MDXRenderer>
            </main>
        </div>
        <div className="post__cta">
            <Link to="/" className="post__cta-link">
                &larr; back to all posts
            </Link>
        </div>
    </Layout>
);

export default PostTemplate;
