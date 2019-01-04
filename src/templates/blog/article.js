import React from 'react';
import { graphql } from 'gatsby';

const Page = React.memo(props => {
    const post = props.data.contentfulBlogPost;

    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.heroImage.fluid.src} alt={post.heroImage.title} />
            <div
                dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html
                }}
            />
        </div>
    );
});

export default Page;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulBlogPost(id: { eq: $id }) {
            title
            slug
            body {
                childMarkdownRemark {
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
