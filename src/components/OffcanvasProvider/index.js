import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const OffcanvasContext = React.createContext(null);

const OffcanvasProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = e => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };
    const hideOffcanvas = () => {
        setIsOpen(false);
    };

    return <OffcanvasContext.Provider value={{ isOpen, toggle, hideOffcanvas }}>{children}</OffcanvasContext.Provider>;
};

OffcanvasProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useOffcanvas = () => {
    const context = useContext(OffcanvasContext);

    if (!context) {
        throw new Error('useOffcanvas must be used within a OffcanvasProvider');
    }

    return context;
};

export default OffcanvasProvider;
