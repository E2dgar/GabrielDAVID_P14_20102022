import { Datatable } from './lib';
import { useFetch } from './hooks/fetch';
import { get } from './api/http';
import { ROUTES } from './constants/routes';
import React from 'react';

function App() {
    const headers = [
        { key: 'firstName', label: 'First name' },
        { key: 'lastName', label: 'Last name' },
        { key: 'startDate', label: 'Start Date' },
        { key: 'department', label: 'Department' },
        { key: 'dateOfBirth', label: 'Date of birth' },
        { key: 'street', label: 'Street' },
        { key: 'city', label: 'City' },
        { key: 'state', label: 'State' },
        { key: 'zipCode', label: 'Zip Code' }
    ];

    const employees = useFetch(get(ROUTES.API));

    if (employees.isLoading) {
        return <p>Loading</p>;
    }
    if (employees.error) {
        return <p>Error</p>;
    }
    return (
        <div className="App">
            <Datatable
                headers={headers}
                employees={employees.data}
                paginate={false}
                // scrollH={300}
            />
        </div>
    );
}

export default App;
