import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import styles from './Logotype.module.scss';
import { useOffcanvas } from '../OffcanvasProvider';

const Logotype = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logotype.png" }) {
                childImageSharp {
                    fixed(height: 50, quality: 100) {
                        ...GatsbyImageSharpFixed_noBase64
                    }
                }
            }
        }
    `);

    const { hideOffcanvas } = useOffcanvas();

    return (
        <Link to="/" className={styles.logotype} onClick={hideOffcanvas}>
            <Img fixed={data.file.childImageSharp.fixed} alt="Guldgruvan logotyp" loading="eager" fadeIn={false} />
        </Link>
    );
};

export default Logotype;
