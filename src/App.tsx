import { Datatable } from './lib';
import { useFetch } from './hooks/fetch';
import { get } from './api/http';
import { ROUTES } from './constants/routes';
import React from 'react';

const App = () => {
    const employees = useFetch(get(ROUTES.API));

    if (employees.isLoading) {
        return <p>Loading</p>;
    }
    if (employees.error) {
        return <p>Error</p>;
    }

    return (
        <div className="App">
            <Datatable employees={employees.data} scrollH={300} />
        </div>
    );
};

export default App;
