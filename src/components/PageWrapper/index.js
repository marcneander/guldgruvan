import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';
import Menu from '../Menu';

const propTypes = {
    children: PropTypes.node.isRequired
};

const StyledContainer = styled(Container)`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
`;

const Side = styled.div`
    padding: 16px;
    flex: 0 0 220px;
`;

const Main = styled.div`
    padding: 16px;
    flex-grow: 1;
    display: flex;
`;

const PageWrapper = props => {
    const { children } = props;

    return (
        <StyledContainer>
            <Side>
                <Menu />
            </Side>
            <Main>{children}</Main>
        </StyledContainer>
    );
};

PageWrapper.propTypes = propTypes;

export default PageWrapper;
