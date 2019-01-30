import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

const propTypes = {
    data: PropTypes.shape({
        contentfulPost: PropTypes.object
    }).isRequired
};

const Page = React.memo(props => {
    const post = props.data.contentfulPost;

    return (
        <div>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <Link to="blogg">Tillbaka</Link>
            <h1>{post.title}</h1>
            <img src={post.heroImage.fluid.src} alt={post.heroImage.title} />
            <div
                dangerouslySetInnerHTML={{
                    __html: post.body.childContentfulRichText.html
                }}
            />
        </div>
    );
});

Page.propTypes = propTypes;

export default Page;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulPost(id: { eq: $id }) {
            title
            slug
            body {
                childContentfulRichText {
                    html
                }
            }
            heroImage {
                fluid {
                    src
                }
                title
            }
        }
    }
`;