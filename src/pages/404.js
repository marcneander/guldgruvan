import React from 'react';
import { Helmet } from 'react-helmet';

const FouroFour = () => (
    <React.Fragment>
        <Helmet>
            <title>404</title>
        </Helmet>
        <p>
            Oh noes!
            <br />
            Page not found.
        </p>
    </React.Fragment>
);

export default FouroFour;
