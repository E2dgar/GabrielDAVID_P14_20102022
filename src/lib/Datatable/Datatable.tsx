import React, { useEffect, useState } from 'react';
import { TApiResponse } from '../../hooks/fetch';
import { Header } from '../Header';
import { Row } from '../Row';
import { Search } from '../Search';
import './index.css';
import { Select, SelectOption } from '../Select';
import { searchingData } from '../func/search';
import { showEntries } from '../func/select';

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
    const [dataByEntries, setDataByEntries] = useState<object[][]>([[]]);
    const [dataSearched, setDataSearched] = useState<object[][]>([[]]);
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);

    useEffect(() => {
        setData(employees.data);
        setDataByEntries(showEntries(entriesPerPage, employees.data));

        <RenderTable />;
    }, [employees]);

    useEffect(() => {
        <RenderTable />;
    }, [dataSearched]);

    useEffect(() => {
        showEntries(
            entriesPerPage,
            dataSearched.length > 0 ? dataSearched : data
        );
    }, [entriesPerPage]);

    const RenderTable = () => {
        if (dataSearched?.[0]?.length > 0) {
            return (
                <>
                    {dataSearched[0].map((employee: object, index: number) => (
                        <Row key={`row-${index}`} data={employee} />
                    ))}
                </>
            );
        }
        return (
            <>
                {dataByEntries[0].map((employee, index) => (
                    <Row key={`row-${index}`} data={employee} />
                ))}
            </>
        );
    };

    const handleSearch: React.ComponentProps<typeof Search>['onChange'] = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        setDataSearched(
            searchingData(e.currentTarget.value, data, entriesPerPage)
        );
    };

    return (
        <div className="table-container">
            <div className="select-search-bar">
                {paginate && (
                    <Select
                        options={options}
                        setEntriesPerPage={setEntriesPerPage}
                    />
                )}

                <Search onChange={handleSearch} />
            </div>

            <table data-testid="datatable" className="datatable">
                <Header headers={headers} />

                <tbody>{dataByEntries[0] && <RenderTable />}</tbody>
            </table>

            {paginate && <p>Pagination</p>}
        </div>
    );
};
