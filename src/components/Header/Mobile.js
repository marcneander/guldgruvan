import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import Logotype from '../Logotype';
import { MobileMenu } from '../Menu';

const OffcanvasButton = props => {
    const { className, isOpen, onClick } = props;
    const classNames = classnames('offcanvas-btn', className, isOpen && 'active');

    return (
        <button
            type="button"
            onClick={e => {
                e.preventDefault();

                onClick();
            }}
            className={classNames}
            data-cy="offcanvas-btn"
        >
            <span className="sr-only">Toggle navigation</span>
            <span className="offcanvas-btn-bar" />
            <span className="offcanvas-btn-bar" />
            <span className="offcanvas-btn-bar" />
        </button>
    );
};

OffcanvasButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
};
OffcanvasButton.defaultProps = {
    className: '',
    isOpen: false
};

const Offcanvas = ({ open, children }) => {
    const className = classnames('offcanvas', open && 'open');

    return <div className={className}>{children}</div>;
};

Offcanvas.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};

const MobileHeader = () => {
    const [showOffcanvas, setOffcanvas] = useState(false);

    return (
        <>
            <div className="mobile-header d-flex justify-content-between d-sm-none">
                <Link to="/">
                    <Logotype />
                </Link>
                <OffcanvasButton
                    isOpen={showOffcanvas}
                    onClick={() => {
                        setOffcanvas(!showOffcanvas);
                    }}
                />
            </div>
            <Offcanvas open={showOffcanvas}>
                <MobileMenu
                    onMenuItemClick={() => {
                        setOffcanvas(false);
                    }}
                />
            </Offcanvas>
        </>
    );
};

export default MobileHeader;
