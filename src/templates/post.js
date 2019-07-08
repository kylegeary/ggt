import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                title
                author
                date
                type
            }
            code {
                body
            }
        }
    }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
    <Layout>
        <h1>{post.frontmatter.title}</h1>
        <p>By:{post.frontmatter.author}</p>
        <p>{post.frontmatter.date}</p>
        <MDXRenderer>{post.code.body}</MDXRenderer>
        <Link to="/">&larr; back to all posts</Link>
    </Layout>
);

export default PostTemplate;
