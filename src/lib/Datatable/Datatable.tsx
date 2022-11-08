import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { useFetch, TApiResponse } from '../../hooks/fetch';
import { get } from '../../api/http';
import { Header } from '../Header';
import { Row } from '../Row';
import { Search } from '../Search';
import './index.css';
import { Select, SelectOption } from '../Select';
import { searchingData } from '../func/search';
import { render } from '@testing-library/react';

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
    const [data, setData] = useState<object[]>([]);
    const [dataSearched, setDataSearched] = useState<object[]>([]);

    // useEffect(() => {
    //     setData(employees.data);
    // }, [employees]);

    useEffect(() => {
        setData(employees.data);
        <RenderTable />;
    }, [employees]);

    useEffect(() => {
        <RenderTable />;
    }, [dataSearched]);

    const RenderTable = () => {
        if (dataSearched.length > 0) {
            return (
                <>
                    {dataSearched.map((employee, index) => (
                        <Row key={`row-${index}`} data={employee} />
                    ))}
                </>
            );
        }
        return (
            <>
                {data.map((employee, index) => (
                    <Row key={`row-${index}`} data={employee} />
                ))}
            </>
        );
    };

    const handleSearch: React.ComponentProps<typeof Search>['onChange'] = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        setDataSearched(searchingData(e.currentTarget.value, data));
    };

    return (
        <div className="table-container">
            <div className="select-search-bar">
                {paginate && <Select options={options} />}

                <Search onChange={handleSearch} />
            </div>

            <table data-testid="datatable" className="datatable">
                <Header headers={headers} />

                <tbody>
                    {/* {data.map((employee, index) => (
                        <Row key={`row-${index}`} data={employee} />
                    ))} */}
                    <RenderTable />
                </tbody>
            </table>

            {paginate && <p>Pagination</p>}
        </div>
    );
};
