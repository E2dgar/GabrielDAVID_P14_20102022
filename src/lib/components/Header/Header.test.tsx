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

describe('Headers', () => {
    render(
        <Datatable
            headers={headers}
            employees={employees.data}
            paginate={true}
        />
    );

    const columns = screen.getAllByTestId('header');

    test('has 2 columns', () => {
        expect(columns.length).toBe(2);
    });

    test('a header have right data-column attr and right text content', () => {
        expect(columns[0].getAttribute('data-column')).toBe('firstName');
        expect(columns[0]).toHaveTextContent('First name');
    });
});

describe('On one header click', () => {
    const header = screen.getAllByTestId('header')[0];
    fireEvent.click(header);
    test("header have data-sort attr 'ASC'", () => {
        expect(header).toHaveAttribute('data-sort', 'ASC');
    });
});
