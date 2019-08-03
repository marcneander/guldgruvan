import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import Footer from '../Footer';
import { Desktop as DesktopHeader, Mobile as MobileHeader } from '../Header';

const Main = ({ children }) => {
    return (
        <Container className="main-container">
            <div className="main">{children}</div>
        </Container>
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
