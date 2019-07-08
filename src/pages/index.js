import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import usePosts from '../hooks/use-posts';
import '../css/card.css';

export default () => {
    const posts = usePosts();
    return (
        <>
            <Layout>
                <SEO title="Home" />
                <div className="cards-wrapper">
                    <div className="cards">
                        {posts.map(post => (
                            <Card key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
};
