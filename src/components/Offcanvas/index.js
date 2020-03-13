import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useOffcanvas } from '../OffcanvasProvider';

import styles from './Offcanvas.module.scss';

const Offcanvas = ({ children }) => {
    const { isOpen } = useOffcanvas();
    const className = classnames(styles.offcanvas, isOpen && styles.offcanvasActive);

    return <div className={className}>{children}</div>;
};

Offcanvas.propTypes = {
    children: PropTypes.node.isRequired
};

export default Offcanvas;
