/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'gatsby';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const renderEntryHyperlink = node => {
    let to;
    const contentType = node.data.target.sys.contentType.sys.id;
    const { fields } = node.data.target;

    switch (contentType) {
        case 'page':
            to = fields.url.sv.fields.url.sv;
            break;
        case 'post':
            to = `/blogg/${fields.slug.sv}`;
            break;
        default:
            to = '/404';
            break;
    }

    return <Link to={to}>{node.content}</Link>;
};

const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
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
