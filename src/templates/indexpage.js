import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import richTextRenderer from '../utils/richTextRenderer';
import Sidebar from '../components/Sidebar';
import Container from '../components/Container';
import Main from '../components/Main';

const propTypes = {
    data: PropTypes.shape({
        contentfulPage: PropTypes.object,
        allContentfulPost: PropTypes.object
    }).isRequired
};

const Page = React.memo(props => {
    const page = props.data.contentfulPage;

    return (
        <Container>
            <Main>{richTextRenderer(page.body.json)}</Main>
            <Sidebar
                data={{
                    title: page.menuitem[0].contentfulparent
                        ? page.menuitem[0].contentfulparent.page.title
                        : page.title,
                    menuData: page.menuitem ? page.menuitem[0] : []
                }}
            />
        </Container>
    );
});

Page.propTypes = propTypes;

export default Page;

export const pageQuery = graphql`
    query($id: String!) {
        contentfulPage(id: { eq: $id }) {
            title
            body {
                json
            }
            menuitem {
                title
                menuitem {
                    url {
                        url
                    }
                    id
                    title
                }
                contentfulparent {
                    menuitem {
                        url {
                            url
                        }
                        id
                        title
                    }
                    page {
                        title
                    }
                }
            }
        }
    }
`;
