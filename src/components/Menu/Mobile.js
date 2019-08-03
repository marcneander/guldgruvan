/* eslint-disable react/no-multi-comp */
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

import { transformContentfulData } from './utils';

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

const MenuItem = ({ to, title, onClick }) => (
    <Nav.Item>
        <Nav.Link
            as={to !== '/' ? PartlyActiveLink : Link}
            to={to}
            title={title}
            onClick={onClick}
            activeClassName="active"
            className="text-uppercase text-white text-center"
        >
            {title}
        </Nav.Link>
    </Nav.Item>
);

MenuItem.propTypes = {
    ...itemPropType
};

const Menu = ({ onMenuItemClick }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulMenuItem(sort: { fields: sort }) {
                edges {
                    node {
                        id
                        url {
                            url
                        }
                        title
                        menuitem {
                            id
                        }
                        contentfulparent {
                            id
                        }
                    }
                }
            }
        }
    `);

    const menuItems = transformContentfulData(data.allContentfulMenuItem.edges);

    return (
        <Nav className="flex-column mobile-menu">
            {menuItems.map(menuItem => (
                <MenuItem onClick={onMenuItemClick} {...menuItem} key={`mobile_${menuItem.id}`} />
            ))}
        </Nav>
    );
};

Menu.propTypes = {
    onMenuItemClick: PropTypes.func.isRequired
};

export default Menu;
