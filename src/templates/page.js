import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { Row, Col } from 'react-bootstrap';
import richTextRenderer from '../utils/richTextRenderer';
import Sidebar from '../components/Sidebar';

const propTypes = {
    data: PropTypes.shape({
        contentfulPage: PropTypes.object,
        allContentfulPost: PropTypes.object
    }).isRequired
};

const Page = React.memo(props => {
    const page = props.data.contentfulPage;
    const posts = props.data.allContentfulPost.edges;

    return (
        <Row>
            <Col md={8} className="mb-4 mb-md-0">
                <Helmet>
                    <title>{page.title}</title>
                </Helmet>
                <h1>{page.title}</h1>
                {richTextRenderer(page.body.json)}
            </Col>
            <Sidebar
                data={{
                    menuData: page.menuitem ? page.menuitem[0] : [],
                    blogPosts: posts
                }}
            />
        </Row>
    );
});

Page.propTypes = propTypes;

export default Page;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulPage(id: { eq: $id }) {
            title
            body {
                json
            }
            menuitem {
                title
                menuitem {
                    url {
                        url
                    }
                    id
                    title
                }
                contentfulparent {
                    menuitem {
                        url {
                            url
                        }
                        id
                        title
                    }
                }
            }
        }
        allContentfulPost(skip: 0, limit: 5) {
            edges {
                node {
                    title
                    slug
                    id
                }
            }
        }
    }
`;
