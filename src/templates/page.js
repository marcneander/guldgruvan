import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

const propTypes = {
    data: PropTypes.shape({
        contentfulPage: PropTypes.object
    }).isRequired
};

const Page = React.memo(props => {
    const page = props.data.contentfulPage;

    return (
        <div>
            <Helmet>
                <title>{page.title}</title>
            </Helmet>
            <h1>{page.title}</h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: page.body.childContentfulRichText.html
                }}
            />
        </div>
    );
});

Page.propTypes = propTypes;

export default Page;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulPage(id: { eq: $id }) {
            title
            body {
                childContentfulRichText {
                    html
                }
            }
        }
    }
`;
