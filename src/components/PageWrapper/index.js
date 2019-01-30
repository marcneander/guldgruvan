import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';

const propTypes = {
    children: PropTypes.node.isRequired
};

const PageWrapper = props => {
    const { children } = props;

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 col-xl-3 py-3">
                    <Menu />
                </div>
                <div className="col-12 col-md-8 col-xl-9 py-3 pl-md-5">{children}</div>
            </div>
        </div>
    );
};

PageWrapper.propTypes = propTypes;

export default PageWrapper;
