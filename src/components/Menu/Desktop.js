/* eslint-disable react/no-multi-comp */
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const itemPropType = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

const partlyActive = className => ({ isPartiallyCurrent, location }) => ({
    className: className + (isPartiallyCurrent && location.pathname !== '/' ? ` active` : ``)
});

const PartlyActiveLink = ({ className, ...rest }) => <Link getProps={partlyActive(className)} {...rest} />;
PartlyActiveLink.propTypes = {
    className: PropTypes.string.isRequired
};

const MenuItem = React.memo(props => (
    <Nav.Item>
        <Nav.Link
            as={props.to !== '/' ? PartlyActiveLink : Link}
            to={props.to}
            title={props.title}
            activeClassName="active"
            className="text-uppercase"
        >
            {props.title}
        </Nav.Link>
    </Nav.Item>
));

MenuItem.propTypes = {
    ...itemPropType
};

const Menu = React.memo(props => (
    <Nav variant="pills" className={props.className}>
        {props.menuItems.map(menuItem => (
            <MenuItem {...menuItem} key={menuItem.id} />
        ))}
    </Nav>
));

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            to: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    className: PropTypes.string
};

Menu.defaultProps = {
    className: undefined
};

export default Menu;
