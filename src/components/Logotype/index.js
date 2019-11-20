import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Logotype = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logotype.png" }) {
                childImageSharp {
                    fixed(height: 80, quality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return <Img fixed={data.file.childImageSharp.fixed} fadeIn={false} className="d-block my-1" />;
};

export default Logotype;
