import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Headers', () => {
    test('is rendered correctly', () => {
        const headers = [
            { firstName: 'First name' },
            { lastName: 'Last name' }
        ];

        render(<Header headers={headers} />);

        const headersTable = screen.getByTestId('datatable-headers');
        expect(headersTable).toBeTruthy();

        const columnsHeader = screen.getAllByRole('columnheader');

        expect(columnsHeader.length).toEqual(2);
        expect(columnsHeader[0]).toHaveAttribute('data-column', 'firstName');
        expect(columnsHeader[0].textContent).toBe('First name');
    });
});
