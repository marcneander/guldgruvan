import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer py-3 text-center text-white">
            <Container>
                <h5>Guldgruvan förskola</h5>
                <p>
                    Tingsvägen 3<br />
                    141 62 Huddinge
                    <br />
                    Telefon{' '}
                    <a href="tel:086080807" className="text-white">
                        08-608 08 07
                    </a>
                    <br />
                    <a href="mailto:personal@guldgruvan.nu" className="text-white">
                        personal@guldgruvan.nu
                    </a>
                </p>
            </Container>
        </div>
    );
};

export default Footer;
