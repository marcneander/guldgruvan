import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';

const FouroFour = () => (
    <React.Fragment>
        <Helmet>
            <title>404</title>
        </Helmet>
        <Container>
            <h1>404!</h1>
            <p>Sidan har flyttat eller finns inte längre.</p>
        </Container>
    </React.Fragment>
);

export default FouroFour;
