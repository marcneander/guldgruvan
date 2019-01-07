import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

const propTypes = {
    data: PropTypes.shape({
        allContentfulBlogPost: PropTypes.shape({
            edges: PropTypes.array
        })
    }).isRequired
};

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

Page.propTypes = propTypes;

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
