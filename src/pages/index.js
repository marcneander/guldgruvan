import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

import { media } from '../utils/cssVariables';

const Section = styled.section`
    text-align: center;
    padding-top: 120px;
    padding-bottom: 80px;

    ${media.lg`
        padding-top: 160px;
    `};
`;

const Title = styled.h1`
    font-size: 48px;
    letter-spacing: -3px;

    ${media.lg`
        font-size: 80px;
    `};
`;

const Home = React.memo(() => (
    <Section>
        <Container>
            <Title>Guldgruvan</Title>
        </Container>
    </Section>
));

export default Home;
