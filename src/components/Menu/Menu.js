import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            to: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

const Menu = React.memo(props => (
    <ul className="list-unstyled ml-3">
        {props.menuItems.map(menuItem => (
            <MenuItem {...menuItem} key={menuItem.id} />
        ))}
    </ul>
));

Menu.propTypes = propTypes;

export default Menu;
