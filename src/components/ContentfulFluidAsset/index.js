import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// Gatsby adds 'c' to entity id if it starts with a number.
const fixId = id => {
    if (id.length === 23 && id.startsWith('c')) {
        return id.slice(1);
    }

    return id;
};

const ContentfulFluidAsset = ({ id, title, crop }) => {
    let image;
    const data = useStaticQuery(graphql`
        query {
            allContentfulAsset {
                edges {
                    node {
                        contentful_id
                        fluid(maxWidth: 838) {
                            ...GatsbyContentfulFluid_withWebp_noBase64
                        }
                    }
                }
            }

            croppedAssets: allContentfulAsset {
                edges {
                    node {
                        contentful_id
                        fluid(maxWidth: 838, maxHeight: 472) {
                            ...GatsbyContentfulFluid_withWebp_noBase64
                        }
                    }
                }
            }
        }
    `);

    if (crop) {
        image = data.croppedAssets.edges.find(edge => edge.node.contentful_id === fixId(id));
    } else {
        image = data.allContentfulAsset.edges.find(edge => edge.node.contentful_id === fixId(id));
    }

    return <Img fluid={image.node.fluid} alt={title} />;
};

ContentfulFluidAsset.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    crop: PropTypes.bool
};

ContentfulFluidAsset.defaultProps = {
    title: undefined,
    crop: false
};

export default ContentfulFluidAsset;
