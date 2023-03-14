import React from 'react';
import { App } from '../../../src/app/containers/App';
import { render } from '../../test-util';
import 'jest-styled-components';

describe('<App /> test', () => {
    it('matches snapshot', () => {
        const app = render(<App />);
        expect(app).toMatchSnapshot();
    });
});
