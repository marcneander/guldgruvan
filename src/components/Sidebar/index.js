import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'gatsby';

const Sidebar = ({ data }) => {
    const menuItems = useMemo(() => {
        if (data.menuData.menuitem) {
            return data.menuData.menuitem;
        }

        if (data.menuData.contentfulparent) {
            return data.menuData.contentfulparent.menuitem;
        }

        return [];
    }, [data.menuData.contentfulparent, data.menuData.menuitem]);

    return (
        <Col md={4}>
            <div className="sidebar">
                {menuItems.length > 0 && (
                    <div className="submenu mb-4">
                        <h5>Meny</h5>
                        <ul className="list-unstyled">
                            {menuItems.map(menuItem => (
                                <li key={menuItem.id}>
                                    <Link to={menuItem.url.url} activeClassName="text-body">
                                        {menuItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="latest-posts">
                    <h5>Senaste blogginläggen</h5>
                    <ul className="list-unstyled">
                        {data.blogPosts.map(post => (
                            <li key={post.node.id}>
                                <Link to={`/blogg/${post.node.slug}`}>{post.node.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Col>
    );
};

const menuitemPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.shape({
            url: PropTypes.string.isRequired
        }),
        id: PropTypes.string.isRequired
    })
);

Sidebar.propTypes = {
    data: PropTypes.shape({
        blogPosts: PropTypes.arrayOf(
            PropTypes.shape({
                node: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    slug: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired
                }).isRequired
            })
        ),
        menuData: PropTypes.shape({
            menuitem: menuitemPropTypes,
            contentfulparent: PropTypes.shape({
                menuitem: menuitemPropTypes
            })
        }).isRequired
    }).isRequired
};

export default Sidebar;
