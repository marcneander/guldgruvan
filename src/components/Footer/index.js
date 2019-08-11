import React from 'react';
import { Container } from 'react-bootstrap';
import { Phone, Mail, Home } from 'react-feather';

const Footer = () => {
    return (
        <div className="footer py-3 text-white text-center">
            <Container>
                <p>
                    <Home size="16" className="mr-2" />
                    Tingsvägen 3, 141 62 Huddinge
                    <br />
                    <Phone size="16" className="mr-2" />
                    <a href="tel:086080807" className="text-white">
                        08-608 08 07
                    </a>
                    <br />
                    <Mail size="16" className="mr-2" />
                    <a href="mailto:personal@guldgruvan.nu" className="text-white">
                        personal@guldgruvan.nu
                    </a>
                </p>
            </Container>
        </div>
    );
};

export default Footer;
