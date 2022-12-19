import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

// renderizar o componente na tela
describe('Test Loading component', () => {

    test('renders an Loading', () => {

        render(<Loading size = 'regular' />);

        const arialRole = screen.queryByText('div');
        expect(arialRole).toHaveAccessibleDescription;
        expect(arialRole).toBeInTheDocument;
    });
});
