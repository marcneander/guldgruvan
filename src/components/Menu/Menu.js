import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const List = styled.ul`
    margin: 0;
    padding: 0 0 0 16px;
`;

const Menu = React.memo(props => (
    <List>
        {props.menuItems.map(menuItem => (
            <MenuItem {...menuItem} key={menuItem.id} />
        ))}
    </List>
));

Menu.propTypes = propTypes;

export default Menu;
