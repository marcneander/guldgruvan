import React from 'react';
import { Link, graphql } from 'gatsby';

const Page = React.memo(props => {
    const blogPosts = props.data.allContentfulBlogPost.edges;

    return (
        <div>
            <h1>Blogg</h1>
            {blogPosts.map(post => (
                <div>
                    <Link to={`/blogg/${post.node.slug}`}>{post.node.title}</Link>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.node.description.childMarkdownRemark.html
                        }}
                    />
                </div>
            ))}
        </div>
    );
});

export default Page;

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allContentfulBlogPost(skip: $skip, limit: $limit, sort: { fields: publishDate, order: DESC }) {
            edges {
                node {
                    title
                    slug
                    heroImage {
                        fluid {
                            src
                        }
                        title
                    }
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    }
`;
