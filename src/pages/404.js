import React from 'react';
import { Helmet } from 'react-helmet';

const FouroFour = () => (
    <React.Fragment>
        <Helmet>
            <title>404</title>
        </Helmet>
        <div className="text-center">
            <h1>404!</h1>
            <p>Sidan har flyttat eller finns inte längre.</p>
        </div>
    </React.Fragment>
);

export default FouroFour;
