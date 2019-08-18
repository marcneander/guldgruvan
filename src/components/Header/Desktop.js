import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import LogoType from '../Logotype';
import { DesktopMenu } from '../Menu';

const DesktopHeader = () => {
    return (
        <div className="desktop-header d-none d-sm-block position-relative">
            <Container>
                <div className="d-flex flex-column align-items-center pt-3 pb-2">
                    <Link to="/">
                        <LogoType />
                    </Link>
                    <DesktopMenu className="mt-3" />
                </div>
            </Container>
        </div>
    );
};

export default DesktopHeader;
