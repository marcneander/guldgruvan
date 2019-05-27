import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer text-white py-3 text-center">
            {/* <svg viewBox="0 0 800 100" className="svg">
                <path id="curve" fill="#50c6d8" d="M 0 50 Q 100 0 200 50 Q 300 100 450 50 C 650 0 650 50 800 100">
                </path>
            </svg> */}
            <Container>
                <h5>Guldgruvan förskola</h5>
                <p>
                    Tingsvägen 3<br />
                    141 62 Huddinge
                    <br />
                    Telefon{' '}
                    <a href="tel:086080807" className="text-body">
                        08-608 08 07
                    </a>
                    <br />
                    <a href="mailto:personal@guldgruvan.nu" className="text-body">
                        personal@guldgruvan.nu
                    </a>
                </p>
            </Container>
        </div>
    );
};

export default Footer;
