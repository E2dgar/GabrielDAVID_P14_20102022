import { fireEvent, render, screen } from '@testing-library/react';
import { Datatable } from '../Datatable';
import React from 'react';

const headers = [
    { key: 'firstName', label: 'First name' },
    { key: 'lastName', label: 'Last name' }
];

const employees = {
    data: [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jack', lastName: 'Black' },
        { firstName: 'Peter', lastName: 'Parker' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jack', lastName: 'Black' },
        { firstName: 'Peter', lastName: 'Parker' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jack', lastName: 'Black' },
        { firstName: 'Peter', lastName: 'Parker' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jack', lastName: 'Black' },
        { firstName: 'Peter', lastName: 'Parker' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jack', lastName: 'Black' },
        { firstName: 'Peter', lastName: 'Parker' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jack', lastName: 'Black' },
        { firstName: 'Peter', lastName: 'Parker' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jack', lastName: 'Black' },
        { firstName: 'Peter', lastName: 'Parker' },
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jack', lastName: 'Black' },
        { firstName: 'Peter', lastName: 'Parker' }
    ],
    isLoading: false,
    error: false
};

const options = [
    { value: 10, text: '10' },
    { value: 20, text: '20' },
    { value: 50, text: '50' }
];

describe('Select', () => {
    render(
        <Datatable
            headers={headers}
            employees={employees.data}
            paginate={true}
            options={options}
        />
    );

    const select: HTMLSelectElement = screen.getByTestId('select');
    const buttons = screen.getAllByTestId('pagination-button');
    const rows = screen.getAllByTestId('row');

    test('has 3 options', () => {
        const optionsElt = screen.getAllByTestId('select-option');
        expect(optionsElt.length).toBe(3);
    });

    test('has 10 entries by default', () => {
        expect(select.value).toBe('10');
    });

    test('right value is selected on change', () => {
        fireEvent.change(select, { target: { value: '50' } });

        expect(select.value).toBe('50');
    });

    test('Pagination has 3 button', () => {
        expect(buttons.length).toBe(3);
    });

    test('Datatable has 10 rows', () => {
        expect(rows.length).toBe(10);
    });
});
