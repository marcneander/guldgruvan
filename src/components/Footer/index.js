import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import Tree from '../Tree';
import Container from '../Container';
import { transformContentfulData } from '../../utils';

import styles from './Footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            huddinge: file(relativePath: { eq: "huddinge.png" }) {
                childImageSharp {
                    fixed(width: 140) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }

            ur_och_skur: file(relativePath: { eq: "ur-och-skur.png" }) {
                childImageSharp {
                    fixed(width: 110) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }

            allContentfulMenuItem(
                sort: { fields: sort }
                filter: { menu: { elemMatch: { menuId: { eq: "main-menu" } } } }
            ) {
                edges {
                    node {
                        id
                        url {
                            url
                        }
                        title
                        menuitem {
                            id
                        }
                        contentfulparent {
                            id
                        }
                    }
                }
            }
        }
    `);

    const menuItems = transformContentfulData(data.allContentfulMenuItem.edges);

    return (
        <div className={styles.footer}>
            <div className={styles.trees}>
                <Tree width={58} className="mr-4" />
                <Tree width={40} className="mr-3 mt-3" />
                <Tree width={60} />
                <Tree width={32} className="mr-5" />
                <Tree width={55} className="mr-2 mt-3" />
                <Tree width={39} />
                <Tree width={28} className="mr-5" />
                <Tree width={66} className="mb-4" />
                <Tree width={50} className="mr-4 mb-3" />
                <Tree width={36} className="mt-3" />
                <Tree width={60} className="mt-4" />
                <Tree width={44} className="mt-3" />
                <Tree width={50} className="mr-4 mb-3" />
                <Tree width={36} className="mt-3" />
                <Tree width={60} className="mt-4" />
                <Tree width={44} className="mt-3" />
            </div>
            <Container>
                <div className={styles.column}>
                    <h4>Meny</h4>
                    <ul>
                        {menuItems.map(menuItem => (
                            <li key={`footer${menuItem.id}`}>
                                <Link to={menuItem.to}>{menuItem.title}</Link>
                                {menuItem.subItems && (
                                    <ul>
                                        {menuItem.subItems.map(subItem => (
                                            <li>
                                                <Link to={subItem.to}>{subItem.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.column}>
                    <h4>Kontakt</h4>
                    <p>Tingsvägen 3, 141 62 Huddinge</p>
                    <p>
                        Telefon:
                        <br />
                        <a href="tel:086080807">08-608 08 07</a>
                    </p>
                    <p>
                        E-post:
                        <br />
                        <a href="mailto:personal@guldgruvan.nu">personal@guldgruvan.nu</a>
                    </p>
                </div>
                <div className={styles.column}>
                    <h4>Länkar</h4>
                    <div className={styles.linkWrap}>
                        <a
                            href="https://www.friluftsframjandet.se/iurochskur"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Img fixed={data.ur_och_skur.childImageSharp.fixed} />
                        </a>
                        <a
                            href="https://www.huddinge.se/forskola-och-skola/forskola/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Img fixed={data.huddinge.childImageSharp.fixed} />
                        </a>
                    </div>
                </div>
            </Container>
            <p className={styles.webBy}>
                web by{' '}
                <a href="https://marcneander.io" target="_blank" rel="noopener noreferrer">
                    Marc Neander
                </a>
            </p>
        </div>
    );
};

export default Footer;
