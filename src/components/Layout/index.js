import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import OffcanvasProvider from '../OffcanvasProvider';
import Offcanvas from '../Offcanvas';
import OffcanvasNav from '../OffcanvasNav';

import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    const description =
        'Guldgruvan är en I Ur och Skur förskola i Huddinge med plats för 24 barn mellan 1-5 år. Vi är ett föräldrakooperativ så föräldrar har full insyn och kan vara med och påverka våra barns vardag, vilket i kombination med personalens pedagogiska kunskap blir en trygg förskola för våra barn.';

    return (
        <React.Fragment>
            <Helmet defaultTitle="Guldgruvan - I Ur och Skur förskola i Huddinge" titleTemplate="%s - Guldgruvan">
                <html lang="en" />
                <meta name="description" content={description} />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#24292e" />
                <meta name="msapplication-TileColor" content="#fae62d" />
                <meta name="theme-color" content="#fae62d" />

                <meta property="og:image:width" content="1333" />
                <meta property="og:image:height" content="2000" />
                <meta property="og:description" content={description} />
                <meta property="og:title" content="Guldgruvan - Föräldrakooperativet i Huddinge" />
                <meta property="og:url" content="https://guldgruvan.nu" />
                <meta property="og:image" content="https://guldgruvan.nu/og-image" />
            </Helmet>
            <OffcanvasProvider>
                <Header />
                <div className={styles.main}>{children}</div>
                <Footer />
                <Offcanvas>
                    <OffcanvasNav />
                </Offcanvas>
            </OffcanvasProvider>
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
