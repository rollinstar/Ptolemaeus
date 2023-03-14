import React from 'react';
import { Button } from '../../../src/components/Button';
import { render } from '../../test-util';
import 'jest-styled-components';

describe('<App /> test', () => {
    it('matches snapshot', () => {
        const app = render(<Button />);
        expect(app).toMatchSnapshot();
    });
});
