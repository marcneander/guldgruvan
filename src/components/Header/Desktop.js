import React from 'react';
import { Container } from 'react-bootstrap';
import LogoType from '../Logotype';
import { DesktopMenu } from '../Menu';

const DesktopHeader = () => {
    return (
        <div className="desktop-header">
            <Container>
                <div className="d-flex flex-column align-items-center pt-3 pb-2">
                    <LogoType />
                    <DesktopMenu className="mt-3" />
                </div>
            </Container>
        </div>
    );
};

export default DesktopHeader;
