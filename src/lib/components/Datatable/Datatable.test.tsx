import { render, screen } from '@testing-library/react';
import { Datatable } from './Datatable';

const headers = [{ firstName: 'First name' }, { lastName: 'Last name' }];

const employees = { data: [[]], isLoading: false, error: false };

const options = [
    { value: 10, text: '10' },
    { value: 25, text: '25' },
    { value: 50, text: '50' },
    { value: 100, text: '100' }
];

describe('Datatable', () => {
    test('Component is rendered correctly', async () => {
        render(
            <Datatable
                headers={headers}
                employees={employees.data}
                paginate={true}
                options={options}
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
