import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button';

import styles from './OffcanvasToggle.module.scss';

const propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
};

const defaultProps = {
    className: '',
    isOpen: false
};

const Toggle = props => {
    const { className, isOpen, onClick } = props;
    const classNames = classnames(className, styles.toggleButton, isOpen && styles.toggleButtonActive);

    const buttonOnClick = e => {
        e.preventDefault();

        onClick(e);
    };

    return (
        <Button type="button" onClick={buttonOnClick} className={classNames} data-cy="offcanvas-btn">
            <span className="sr-only">Toggle navigation</span>
            <div className={styles.iconBar} />
            <div className={styles.iconBar} />
            <div className={styles.iconBar} />
        </Button>
    );
};

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
