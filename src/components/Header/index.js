import React from 'react';
import Logotype from '../Logotype';
import Nav from '../Nav';
import OffcanvasToggle from '../OffcanvasToggle';
import { useOffcanvas } from '../OffcanvasProvider';

import styles from './Header.module.scss';

const Header = () => {
    const { isOpen, toggle } = useOffcanvas();

    return (
        <header className={styles.header}>
            <div className={styles.wrap}>
                <Logotype />
                <Nav />
                <OffcanvasToggle isOpen={isOpen} onClick={toggle} />
            </div>
        </header>
    );
};

export default Header;
