import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';


describe ('Tests for Navbar component', () => {

    test('renders a title', () => {
        render(< Nav />);

        const title = screen.getByText('controle de produtos');
        expect(title).toBeInTheDocument;

    });

});