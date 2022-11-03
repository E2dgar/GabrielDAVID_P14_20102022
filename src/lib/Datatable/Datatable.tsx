import { FC, MouseEvent } from 'react';
import { useFetch, TApiResponse } from '../../hooks/fetch';
import { get } from '../../api/http';
import { Header } from '../Header';
import { Row } from '../Row';
import './index.css';
import { Select, SelectOption } from '../Select';

type DatatableTypes = {
    headers: object[];
    employees: TApiResponse;
    paginate: boolean;
    options: SelectOption[] | null;
};

export const Datatable = ({
    headers,
    employees,
    paginate,
    options
}: DatatableTypes) => {
    const data = employees.data;

    return (
        <div className="table-container">
            <div className="select-search-bar">
                {paginate && <Select options={options} />}
            </div>

            <table data-testid="datatable" className="datatable">
                <Header headers={headers} />

                <tbody>
                    {data.map((employee, index) => (
                        <Row key={`row-${index}`} data={employee} />
                    ))}
                </tbody>
            </table>

            {paginate && <p>Pagination</p>}
        </div>
    );
};
