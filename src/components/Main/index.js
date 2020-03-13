import React from 'react';
import PropTypes from 'prop-types';

import styles from './Main.module.scss';

const propTypes = {
    children: PropTypes.node.isRequired
};

const Main = props => {
    const { children } = props;

    return <div className={styles.main}>{children}</div>;
};

Main.propTypes = propTypes;

export default Main;
