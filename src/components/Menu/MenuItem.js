import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Menu from './Menu';

const itemPropType = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

const propTypes = {
    ...itemPropType,
    subItems: PropTypes.arrayOf(
        PropTypes.shape({
            ...itemPropType
        })
    )
};

const defaultProps = {
    subItems: undefined
};

const MenuItem = React.memo(props => (
    <li>
        <Link to={props.to}>{props.title}</Link>
        {props.subItems && <Menu menuItems={props.subItems} />}
    </li>
));

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
