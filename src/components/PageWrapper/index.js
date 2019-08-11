import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import Footer from '../Footer';
import { Desktop as DesktopHeader, Mobile as MobileHeader } from '../Header';

const Main = ({ children }) => {
    return (
        <div className="main-container">
            <Container>
                <div className="main">{children}</div>
            </Container>
        </div>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired
};

const PageWrapper = props => {
    const { children } = props;

    return (
        <>
            <DesktopHeader />
            <MobileHeader />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

PageWrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default PageWrapper;
