import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Sidebar from '../../components/Sidebar';
import Post from '../../components/Post';
import Pagination from '../../components/Pagination';

const propTypes = {
    data: PropTypes.shape({
        allContentfulPost: PropTypes.shape({
            edges: PropTypes.array
        }),
        totalCount: PropTypes.shape({
            totalCount: PropTypes.number
        })
    }).isRequired,
    pageContext: PropTypes.shape({
        limit: PropTypes.number,
        skip: PropTypes.number
    }).isRequired
};

const Page = React.memo(props => {
    const posts = props.data.allContentfulPost.edges;
    const pageTitle = 'Blogg';

    return (
        <React.Fragment>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <Row>
                <Col md={8} className="mb-4 mb-md-0">
                    {posts.length === 0 && <p>Det finns inga blogginlägg just nu.</p>}
                    {posts.map(post => (
                        <Post key={post.node.id} preview post={post.node} />
                    ))}
                    <Pagination
                        total={props.data.totalCount.totalCount}
                        limit={props.pageContext.limit}
                        skip={props.pageContext.skip}
                        baseUrl="/blogg/sida/"
                    />
                </Col>
                <Sidebar
                    data={{
                        menuData: {},
                        blogPosts: []
                    }}
                />
            </Row>
        </React.Fragment>
    );
});

Page.propTypes = propTypes;

export default Page;

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        allContentfulPost(skip: $skip, limit: $limit, sort: { fields: createdAt, order: DESC }) {
            edges {
                node {
                    id
                    title
                    slug
                    description {
                        description
                    }
                    images {
                        contentful_id
                        title
                    }
                    body {
                        json
                    }
                    createdAt(formatString: "D MMMM, YYYY", locale: "sv-SE")
                    author {
                        name
                    }
                }
            }
        }

        totalCount: allContentfulPost {
            totalCount
        }
    }
`;
