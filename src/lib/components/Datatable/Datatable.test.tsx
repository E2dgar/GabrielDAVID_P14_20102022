import { render, screen } from '@testing-library/react';
import { Datatable } from './Datatable';
import React from 'react';

const headers = [{ firstName: 'First name' }, { lastName: 'Last name' }];

const employees = { data: [[]], isLoading: false, error: false };

describe('Datatable', () => {
    test('Component is rendered correctly', async () => {
        render(
            <Datatable
                headers={headers}
                employees={employees.data}
                paginate={true}
            />
        );

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
