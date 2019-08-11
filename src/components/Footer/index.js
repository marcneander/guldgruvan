import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            huddinge: file(relativePath: { eq: "huddinge.png" }) {
                childImageSharp {
                    fixed(width: 160) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }

            ur_och_skur: file(relativePath: { eq: "ur-och-skur.png" }) {
                childImageSharp {
                    fixed(width: 120) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <div className="footer text-white text-center text-md-left">
            <Container>
                <Row>
                    <Col xs={12} md={3} className="mb-3">
                        <h6>Meny</h6>
                    </Col>
                    <Col xs={12} md={3} className="mb-3">
                        <h6>Kontakt</h6>
                        <p>
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
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h6>Länkar</h6>
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
