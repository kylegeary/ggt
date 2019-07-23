import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../components/layout';
import '../css/post.css';

export const query = graphql`
    query($slug: String!) {
        post: mdx(frontmatter: { slug: { eq: $slug } }) {
            id
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

const PostTemplate = ({ data: { post, allPosts } }) => (
    <Layout>
        <div className="post">
            <section className="post__info">
                <span className="post__info-date">{post.frontmatter.date}</span>
                <h1 className="post__info-title">{post.frontmatter.title}</h1>
                <span className="post__info-author">
                    By:{' '}
                    <Link to={'/' + post.frontmatter.author.replace(/ /g, '')}>
                        {post.frontmatter.author}
                    </Link>
                </span>
                <span className="post__info-type">{post.frontmatter.type}</span>
            </section>
            <main className="post__body">
                <img
                    className="post__body-featured-image"
                    src={post.frontmatter.featuredImage}
                    alt={post.frontmatter.featuredImageAlt}
                />
                <div className="post__body-content">
                    <MDXRenderer>{post.code.body}</MDXRenderer>
                </div>
                <div className="post__cta">
                    <Link to="/" className="post__cta-link">
                        &larr; back to all posts
                    </Link>
                </div>
            </main>
        </div>
    </Layout>
);

export default PostTemplate;
