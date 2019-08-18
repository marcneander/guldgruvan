import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';

import Tree from '../Tree';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            huddinge: file(relativePath: { eq: "huddinge.png" }) {
                childImageSharp {
                    fixed(width: 160) {
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                }
            }

            ur_och_skur: file(relativePath: { eq: "ur-och-skur.png" }) {
                childImageSharp {
                    fixed(width: 120) {
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                }
            }

            allContentfulMenuItem(
                sort: { fields: sort }
                filter: { menu: { elemMatch: { menuId: { eq: "footer-menu" } } } }
            ) {
                edges {
                    node {
                        id
                        url {
                            url
                        }
                        title
                    }
                }
            }
        }
    `);

    return (
        <div className="footer text-white text-center text-md-left">
            <div className="footer-trees">
                <div className="d-none d-md-block">
                    <Tree width={58} height={75} className="mr-4" />
                    <Tree width={30} height={50} className="mr-3 mt-3" />
                    <Tree width={60} height={90} />
                    <Tree width={30} height={50} className="mr-5" />
                    <Tree width={60} height={90} className="mr-2 mt-3" />
                    <Tree width={50} height={65} />
                    <Tree width={30} height={50} className="mr-5" />
                </div>
                <Tree width={60} height={90} className="mb-4" />
                <Tree width={50} height={65} className="mr-4 mb-3" />
                <Tree width={30} height={50} className="mt-3" />
                <Tree width={60} height={90} className="mt-4" />
                <Tree width={50} height={65} className="mt-3" />
            </div>
            <Container>
                <Row>
                    <Col xs={12} md={3} className="mb-3">
                        <h4>Meny</h4>
                        <ul className="list-unstyled">
                            {data.allContentfulMenuItem.edges.map(menuItem => (
                                <li key={`footer${menuItem.node.id}`}>
                                    <Link to={menuItem.node.url.url} className="text-white">
                                        {menuItem.node.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col xs={12} md={3} className="mb-3">
                        <h4>Kontakt</h4>
                        <p>Tingsvägen 3, 141 62 Huddinge</p>
                        <p>
                            Telefon:
                            <br />
                            <a href="tel:086080807" className="text-white">
                                08-608 08 07
                            </a>
                        </p>
                        <p>
                            E-post:
                            <br />
                            <a href="mailto:personal@guldgruvan.nu" className="text-white">
                                personal@guldgruvan.nu
                            </a>
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Länkar</h4>
                        <Row className="mt-3 mt-md-4">
                            <Col
                                md={5}
                                xs={12}
                                className="mb-3 d-flex justify-content-center justify-content-md-start align-items-center"
                            >
                                <a
                                    href="https://www.friluftsframjandet.se/iurochskur"
                                    target="_blank"
                                    className="footer-image-link"
                                    rel="noopener noreferrer"
                                >
                                    <Img fixed={data.ur_och_skur.childImageSharp.fixed} />
                                </a>
                            </Col>
                            <Col
                                md={7}
                                xs={12}
                                className="mb-3 d-flex justify-content-center justify-content-md-start align-items-center"
                            >
                                <a
                                    href="https://www.huddinge.se/forskola-och-skola/forskola/"
                                    target="_blank"
                                    className="footer-image-link"
                                    rel="noopener noreferrer"
                                >
                                    <Img fixed={data.huddinge.childImageSharp.fixed} />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
