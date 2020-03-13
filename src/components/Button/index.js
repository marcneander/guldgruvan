import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Button.module.scss';

const propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    secondary: PropTypes.bool
};

const defaultProps = {
    as: 'button',
    disabled: false,
    onClick: () => {},
    className: undefined,
    secondary: false
};

const Button = props => {
    const { as: Tag, children, onClick, disabled, className, secondary, ...attributes } = props;

    const btnClassName = classnames(styles.button, className, secondary && styles.secondaryButton);

    const handleClick = e => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        if (onClick) {
            onClick(e);
        }
    };

    if (Tag === 'button' && !attributes.type) {
        attributes.type = 'button';
    }

    return (
        <Tag disabled={disabled} className={btnClassName} onClick={handleClick} onTouchStart={() => {}} {...attributes}>
            {children}
        </Tag>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
