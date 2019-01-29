import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

const propTypes = {
    data: PropTypes.shape({
        allContentfulPost: PropTypes.shape({
            edges: PropTypes.array
        })
    }).isRequired
};

const Page = React.memo(props => {
    const posts = props.data.allContentfulPost.edges;
    const pageTitle = 'Blogg';

    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <h1>{pageTitle}</h1>
            {posts.map(post => (
                <div>
                    <Link to={`/blogg/${post.node.slug}`}>{post.node.title}</Link>
                    <div>{post.node.description.description}</div>
                </div>
            ))}
        </div>
    );
});

Page.propTypes = propTypes;

export default Page;

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allContentfulPost(skip: $skip, limit: $limit) {
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
                        description
                    }
                }
            }
        }
    }
`;
