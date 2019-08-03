import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import richTextRenderer from '../../utils/richTextRenderer';

const Post = ({ post, link }) => {
    return (
        <div className="post">
            {link ? (
                <Link to={`/blogg/${post.slug}`}>
                    <h1>{post.title}</h1>
                </Link>
            ) : (
                <h1>{post.title}</h1>
            )}
            {post.createdAt} av {post.author.name}
            <img src={post.heroImage.fluid.src} alt={post.heroImage.title} />
            {richTextRenderer(post.body.json)}
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
        createdAt: PropTypes.string,
        author: PropTypes.shape({
            name: PropTypes.string
        }),
        heroImage: PropTypes.shape({
            title: PropTypes.string,
            fluid: PropTypes.shape({
                src: PropTypes.string
            })
        }),
        body: PropTypes.shape({
            json: PropTypes.object
        })
    }).isRequired,
    link: PropTypes.bool
};

Post.defaultProps = {
    link: false
};

export default Post;
