import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Logotype = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(height: 60, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                }
            }
        }
    `);

    return <Img fixed={data.file.childImageSharp.fixed} fadeIn={false} className="d-block my-1" />;
};

export default Logotype;
