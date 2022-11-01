import { FC, MouseEvent } from 'react';
import { useFetch, TApiResponse } from '../../hooks/fetch';
import { get } from '../../api/http';
import { ROUTES } from '../../constants/routes';
import { Header } from '../Header';
import { Row } from '../Row';
import './index.css';

type DatatableProps = {
    headers: string[];
};

export const Datatable = ({ headers }: DatatableProps) => {
    const employees: TApiResponse = useFetch(get(ROUTES.API));

    if (employees.error) {
        return <p>ERROR</p>;
    }
    if (employees.isLoading) {
        return <p>ISLOADING</p>;
    }
    const data = employees.data;

    // const handleHeaderClick = (event: MouseEvent<HTMLTableCellElement>, header: string) => {
    //   event.preventDefault()
    //      console.log(header)
    // }

    return (
        <div className="table-container">
            <table data-testid="datatable" className="datatable">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <Header key={`header-${index}`} label={header} />
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((employee, index) => (
                        <Row key={`row-${index}`} data={employee} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
