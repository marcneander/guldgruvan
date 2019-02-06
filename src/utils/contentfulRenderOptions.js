const { BLOCKS, INLINES, MARKS } = require('@contentful/rich-text-types');

const renderAsset = node => {
    try {
        const {
            data: {
                target: {
                    fields: { file, title }
                }
            }
        } = node;

        return `<img src="${file.sv.url}?w=800&q=50" alt="${title}" />`;
    } catch (e) {
        return '';
    }
};

const renderEntry = (node, next) => {
    const contentType = node.data.target.sys.contentType.sys.id;
    const { fields } = node.data.target;

    switch (contentType) {
        case 'person':
            return `
                <div class="person">
                    <div class="person--image-wrap">
                        <img class="person--image" src="${
                            fields.portrait.sv.fields.file.sv.url
                        }?w=200&h=200&q=50&fit=fill" alt="${fields.portrait.sv.fields.title.sv}" />
                    </div>
                    <div class="person--info">
                        <h4 class="person--header">${fields.name.sv}</h4>
                        <p class="person--title">${fields.title.sv}</p>
                        <p class="person--year">Anställd ${fields.startYear.sv}</p>
                        <p class="person--quote">${fields.quote.sv}</p>
                    </div>
                </div>
            `;
        case 'map':
            return '';
        default:
            return next(node.content);
    }
};

const renderEntryHyperlink = (node, next) => {
    let url;
    const contentType = node.data.target.sys.contentType.sys.id;
    const { fields } = node.data.target;

    switch (contentType) {
        case 'page':
            url = fields.url.sv.fields.url.sv;
            break;
        case 'post':
            url = `/blogg/${fields.slug.sv}`;
            break;
        default:
            url = '/404';
            break;
    }

    return `<a href="${url}">${next(node.content)}</a>`;
};

module.exports = {
    renderOptions: {
        renderNode: {
            [INLINES.ENTRY_HYPERLINK]: (node, next) => renderEntryHyperlink(node, next),
            [INLINES.HYPERLINK]: (node, next) => `<a href="${node.data.uri}">${next(node.content)}</a>`,
            [BLOCKS.EMBEDDED_ASSET]: (node, next) => renderAsset(node, next),
            [BLOCKS.EMBEDDED_ENTRY]: (node, next) => renderEntry(node, next),
            [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content).replace(/\n/g, '<br>')}</p>`
        },
        renderMark: {
            [MARKS.BOLD]: text => `<strong>${text}</strong>`
        }
    }
};
