import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './Logotype.module.scss';
import { useOffcanvas } from '../OffcanvasProvider';

const Logotype = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logotype.png" }) {
                childImageSharp {
                    fixed(height: 50, quality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    const { hideOffcanvas } = useOffcanvas();

    return (
        <Link to="/" className={styles.logotype} onClick={hideOffcanvas}>
            <img src={data.file.childImageSharp.fixed.src} alt="Guldgruvan logotyp" />
        </Link>
    );
};

export default Logotype;
