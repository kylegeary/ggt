import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import '../css/card.css';

export const PostsQuery = graphql`
    query {
        allMdx(
            sort: { order: DESC, fields: frontmatter___date }
            filter: { frontmatter: { type: { eq: "recipe" } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 10)
                    code {
                        body
                    }
                }
            }
        }
    }
`;

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <div className="cards-wrapper">
            <div className="cards">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
