import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.module.scss';

const propTypes = {
    children: PropTypes.node.isRequired
};

const Container = props => {
    const { children } = props;

    return <div className={styles.container}>{children}</div>;
};

Container.propTypes = propTypes;

export default Container;
