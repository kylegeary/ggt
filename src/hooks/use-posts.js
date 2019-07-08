import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx {
                nodes {
                    excerpt(pruneLength: 100)
                    frontmatter {
                        author
                        date
                        slug
                        title
                        type
                    }
                }
            }
        }
    `);

    return data.allMdx.nodes.map(post => ({
        author: post.frontmatter.author,
        date: post.frontmatter.date,
        slug: post.frontmatter.slug,
        title: post.frontmatter.title,
        type: post.frontmatter.type,
        excerpt: post.excerpt,
    }));
};

export default usePosts;
