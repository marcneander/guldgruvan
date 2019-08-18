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

const Menu = ({ className }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulMenuItem(
                sort: { fields: sort }
                filter: { menu: { elemMatch: { menuId: { eq: "main-menu" } } } }
            ) {
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
        <Nav variant="pills" className={className}>
            {menuItems.map(menuItem => (
                <MenuItem {...menuItem} key={`desktop${menuItem.id}`} />
            ))}
        </Nav>
    );
};

Menu.propTypes = {
    className: PropTypes.string
};

Menu.defaultProps = {
    className: undefined
};

export default Menu;
