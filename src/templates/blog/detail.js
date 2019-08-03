import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Post from '../../components/Post';

const propTypes = {
    data: PropTypes.shape({
        contentfulPost: PropTypes.object
    }).isRequired
};

const Page = React.memo(props => {
    const post = props.data.contentfulPost;

    return (
        <>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <Post post={post} />
        </>
    );
});

Page.propTypes = propTypes;

export default Page;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulPost(id: { eq: $id }) {
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
`;
