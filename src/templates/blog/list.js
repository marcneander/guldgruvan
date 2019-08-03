import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Sidebar from '../../components/Sidebar';
import Post from '../../components/Post';

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
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <Row>
                <Col md={8} className="mb-4">
                    {posts.map(post => (
                        <Post key={post.node.id} link post={post.node} />
                    ))}
                </Col>
                <Sidebar
                    data={{
                        menuData: {},
                        blogPosts: posts
                    }}
                />
            </Row>
        </>
    );
});

Page.propTypes = propTypes;

export default Page;

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allContentfulPost(skip: $skip, limit: $limit) {
            edges {
                node {
                    id
                    title
                    slug
                    heroImage {
                        fluid {
                            src
                        }
                        title
                    }
                    body {
                        json
                    }
                    createdAt(formatString: "D MMMM YYYY", locale: "sv-SE")
                    author {
                        name
                    }
                }
            }
        }
    }
`;
