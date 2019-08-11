import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Logotype = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width: 160, quality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return <Img fixed={data.file.childImageSharp.fixed} fadeIn={false} />;
};

export default Logotype;
