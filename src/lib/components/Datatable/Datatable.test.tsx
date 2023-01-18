import { render, screen } from '@testing-library/react';
import { Datatable } from './Datatable';
import React from 'react';

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

describe('Datatable', () => {
    test('Component is rendered correctly', async () => {
        render(<Datatable employees={employees.data} />);

        const datatableElement = screen.getByTestId('datatable');
        const select = screen.getByTestId('select');
        const pagination = screen.getByTestId('pagination');
        const location = screen.getByTestId('location');
        const searchBox = screen.getByTestId('searchBox');

        expect(datatableElement).toBeTruthy();
        expect(select).toBeTruthy();
        expect(pagination).toBeTruthy();
        expect(location).toBeTruthy();
        expect(searchBox).toBeTruthy();
    });
});
