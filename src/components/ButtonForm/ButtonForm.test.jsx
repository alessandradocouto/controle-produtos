import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonForm from './ButtonForm';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import userEvent from '@testing-library/user-event';

describe('Test for ButtonForm component', () => {

    // render all an Button
    test('render an Button Form', () => {

        const allButton = screen.queryAllByRole('button');
        allButton.forEach((b) => {
            userEvent.click(b);
            expect(b).toHaveLength(2);
            expect(b).toHaveClass('btn-form');
            expect(b).toBeInTheDocument();
        })
    });

    test('render an Add Button Form', () => {
        render(<ButtonForm 
            text={<AiOutlinePlus/>}
            type='submit' 
            value='adicionar'
            classButton='btn-form'></ButtonForm>);

        const btnAdd = screen.getByRole('button', {name: 'adicionar'});
        expect(btnAdd).toBeInTheDocument;
    });
    test('render an Search Button Form', () => {
        render(<ButtonForm 
            text ={<AiOutlineSearch/>}
            type='submit'
            value='buscar'
            classButton='btn-form'></ButtonForm>);

        const btnDel = screen.getByRole('button', {
            name: 'buscar'
        });
        expect(btnDel).toBeInTheDocument;
    });
}); 