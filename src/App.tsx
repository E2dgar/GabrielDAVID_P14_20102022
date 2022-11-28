import './App.css';
import { Datatable } from './lib/Datatable';
import { useFetch } from './hooks/fetch';
import { get } from './api/http';
import { ROUTES } from './constants/routes';

function App() {
    /**TODO changer modélisation headers */
    const headers = [
        { firstName: 'First name' },
        { lastName: 'Last name' },
        { startDate: 'Start Date' },
        { department: 'Department' },
        { dateOfBirth: 'Date of birth' },
        { street: 'Street' },
        { city: 'City' },
        { state: 'State' },
        { zipCode: 'Zip Code' }
    ];

    const employees = useFetch(get(ROUTES.API));

    const options = [
        { value: 10, text: '10' },
        { value: 25, text: '25' },
        { value: 50, text: '50' },
        { value: 100, text: '100' }
    ];

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
                paginate={true}
                options={options}
            />
        </div>
    );
}

export default App;
