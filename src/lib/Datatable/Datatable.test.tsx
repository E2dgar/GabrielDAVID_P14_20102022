import { render, screen } from '@testing-library/react';
import { Datatable } from './Datatable';

// This is the section where we mock `fetch`
// const unmockedFetch = global.fetch;

// beforeAll(() => {
//     global.fetch = jest.fn(() =>
//         Promise.resolve({
//             json: () => Promise.resolve([])
//         })
//     ) as jest.Mock;
// });

// afterAll(() => {
//     global.fetch = unmockedFetch;
// });

describe('Datatable', () => {
    test('is rendered correctly', async () => {
        const headers = [
            { firstName: 'First name' },
            { lastName: 'Last name' }
        ];

        const employees = { data: [], isLoading: false, error: false };

        const options = [
            { value: 10, text: '10' },
            { value: 25, text: '25' },
            { value: 50, text: '50' },
            { value: 100, text: '100' }
        ];

        render(
            <Datatable
                headers={headers}
                employees={employees}
                paginate={true}
                options={options}
            />
        );

        const datatableElement = screen.getByTestId('datatable');

        expect(datatableElement).toBeTruthy();
    });
});
