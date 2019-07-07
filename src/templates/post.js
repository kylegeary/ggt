import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { MDXRenderer } from 'gatsby-mdx';

const Post = () => (
    <Layout>
        <SEO title="Post" />
        <h1>Post</h1>
        <p>Lorem Ispum</p>
        <p>Dolor Sit Amet.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
    </Layout>
);


export default Post;