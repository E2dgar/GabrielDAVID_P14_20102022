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
        { firstName: 'Peter', lastName: 'Parker' },
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

describe('Select', () => {
    render(
        <Datatable
            headers={headers}
            employees={employees.data}
            paginate={true}
        />
    );

    const select: HTMLSelectElement = screen.getByTestId('select');
    const buttons = screen.getAllByTestId('pagination-button');
    const rows = screen.getAllByTestId('row');

    test('has 10 entries by default', () => {
        expect(select.value).toBe('10');
    });

    test('right value is selected on change', () => {
        fireEvent.change(select, { target: { value: '25' } });

        expect(select.value).toBe('25');
    });

    test('Pagination has 3 button', () => {
        expect(buttons.length).toBe(4);
    });

    test('Datatable has 10 rows', () => {
        expect(rows.length).toBe(10);
    });
});
