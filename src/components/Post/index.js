import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Carousel } from 'react-bootstrap';
import { ChevronRight, ChevronLeft } from 'react-feather';
import richTextRenderer from '../../utils/richTextRenderer';
import ContentfulFluidAsset from '../ContentfulFluidAsset';

const PostPropTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
        createdAt: PropTypes.string,
        author: PropTypes.shape({
            name: PropTypes.string
        }),
        images: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                contentful_id: PropTypes.string
            })
        ),
        description: PropTypes.shape({
            description: PropTypes.string
        }),
        body: PropTypes.shape({
            json: PropTypes.object
        })
    }).isRequired
};

const FullPost = ({ post }) => {
    return (
        <article className="post">
            <div className="post-title">
                <h1>{post.title}</h1>
            </div>
            <div className="post-info">
                {post.createdAt} av {post.author.name}
            </div>
            <div className="post-images mb-3 mt-2">
                {post.images.length > 1 ? (
                    <Carousel
                        nextIcon={<ChevronRight size="60" />}
                        nextLabel="Nästa bild"
                        prevLabel="Föregående bild"
                        prevIcon={<ChevronLeft size="60" />}
                        interval={null}
                        touch={false}
                    >
                        {post.images.map(image => (
                            <Carousel.Item key={image.contentful_id}>
                                <ContentfulFluidAsset crop id={image.contentful_id} alt={image.title} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                ) : (
                    <ContentfulFluidAsset id={post.images[0].contentful_id} alt={post.images[0].title} />
                )}
            </div>
            <div className="post-body">{richTextRenderer(post.body.json)}</div>
        </article>
    );
};

FullPost.propTypes = PostPropTypes;

const PreviewPost = ({ post }) => {
    return (
        <article className="post">
            <div className="post-title">
                <Link to={`/blogg/${post.slug}`}>
                    <h1>{post.title}</h1>
                </Link>
            </div>
            <div className="post-info">
                {post.createdAt} av {post.author.name}
            </div>
            <div className="post-images mb-3 mt-2">
                <ContentfulFluidAsset crop id={post.images[0].contentful_id} alt={post.images[0].title} />
            </div>
            <div className="post-body">{post.description.description}</div>
            <Link to={`/blogg/${post.slug}`} className="btn btn-outline-primary my-4">
                Läs mer...
            </Link>
        </article>
    );
};

PreviewPost.propTypes = PostPropTypes;

const Post = ({ post, preview }) => {
    if (preview) {
        return <PreviewPost post={post} />;
    }

    return <FullPost post={post} />;
};

Post.propTypes = {
    ...PostPropTypes,
    preview: PropTypes.bool
};

Post.defaultProps = {
    preview: false
};

export default Post;
