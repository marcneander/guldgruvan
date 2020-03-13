import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classnames from 'classnames';

import styles from './NavLink.module.scss';

const NavLink = ({ to, title, onClick, className }) => {
    const navLinkClassName = classnames(className, styles.navLink);

    const isPartiallyActive = useCallback(
        ({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: classnames(navLinkClassName, styles.navLinkActive) } : null,
        [navLinkClassName]
    );

    return (
        <Link
            activeClassName={styles.navLinkActive}
            onClick={onClick}
            getProps={to === '/' ? undefined : isPartiallyActive}
            className={navLinkClassName}
            to={to}
            title={title}
        >
            {title}
        </Link>
    );
};

NavLink.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

NavLink.defaultProps = {
    className: undefined,
    onClick: () => {}
};

export default NavLink;
