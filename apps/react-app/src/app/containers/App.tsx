import React from 'react';
import styled from 'styled-components';

import { Button } from 'react-ui';

const AppPage = styled.div`
    font-size: 15px;
    color: 1a202c;
`;

export const App = () => {
    return (
        <AppPage>
            <h1>Ptolemaeus</h1>
            <Button variant='outlined' onClick={() => console.log('Button')}>
                상세보기
            </Button>
        </AppPage>
    );
};
