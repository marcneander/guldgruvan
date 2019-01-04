import React from 'react';
import { graphql } from 'gatsby';

const Page = React.memo(props => {
    const page = props.data.contentfulPage;

    return (
        <div>
            <h1>{page.title}</h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: page.body.childMarkdownRemark.html
                }}
            />
        </div>
    );
});

export default Page;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulPage(id: { eq: $id }) {
            title
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;
