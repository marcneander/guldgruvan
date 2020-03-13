/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'gatsby';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import ContentfulFluidAsset from '../components/ContentfulFluidAsset';
import Person from '../components/Person';
import Map from '../components/Map';

const renderEmbeddedAsset = node => {
    console.log(node);

    return <ContentfulFluidAsset id={node.data.target.sys.id} title={node.data.target.fields.title.sv} />;
};

const renderEntryHyperlink = node => {
    let to;

    const contentType = node.data.target.sys.contentType.sys.id;
    const { fields } = node.data.target;

    switch (contentType) {
        case 'page':
            to = fields.url.sv.fields.url.sv;
            break;
        default:
            to = '/404';
            break;
    }

    return <Link to={to}>{node.content}</Link>;
};

const renderEmbeddedEntry = node => {
    switch (node.data.target.sys.contentType.sys.id) {
        case 'person':
            return <Person data={node.data.target.fields} />;

        case 'map':
            return (
                <Map
                    lng={node.data.target.fields.location.sv.lon}
                    lat={node.data.target.fields.location.sv.lat}
                    name={node.data.target.fields.name.sv}
                />
            );

        default:
            return null;
    }
};

const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => renderEmbeddedAsset(node),
        [BLOCKS.EMBEDDED_ENTRY]: node => renderEmbeddedEntry(node),
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="c-li">{children}</li>,
        [INLINES.ENTRY_HYPERLINK]: node => renderEntryHyperlink(node),
        [INLINES.HYPERLINK]: (node, children) => (
            <a href={node.data.uri} title={children}>
                {children}
            </a>
        )
    },
    renderMark: {
        [MARKS.BOLD]: text => <strong>{text}</strong>
    },
    renderText: text => {
        const hasBackslashN = text.includes('\n');

        if (!hasBackslashN) {
            return text;
        }

        return text.split('\n').map(item => {
            if (!item) {
                return null;
            }

            return (
                <React.Fragment key={`${item}-key`}>
                    {item}
                    <br />
                </React.Fragment>
            );
        });
    }
};

const richTextRenderer = data => {
    return documentToReactComponents(data, options);
};

export default richTextRenderer;
