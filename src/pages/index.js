import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import FeaturedPost from '../components/featuredPost';
import usePosts from '../hooks/use-posts';

export default () => {
    const posts = usePosts();
    return (
        <>
            <Layout>
                <SEO title="Home" />
                <div className="hero-wrapper"></div>
                {posts.map((post, index) =>
                    index === 0 ? (
                        <FeaturedPost key={post.slug} post={post} />
                    ) : null
                )}
                <div className="cards-wrapper">
                    <div className="cards">
                        {posts.map((post, index) =>
                            index === 0 ? null : (
                                <Card key={post.slug} post={post} />
                            )
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
};
