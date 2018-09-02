import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Counter from '../../src/view/Count';

describe('Counter component', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Counter />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
