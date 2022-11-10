import React, { useEffect, useState } from 'react';
import { TApiResponse } from '../../hooks/fetch';
import { Header } from '../Header';
import { Row } from '../Row';
import { Search } from '../Search';
import './index.css';
import { Select, SelectOption } from '../Select';
import { searchingData } from '../func/search';
import { showEntries } from '../func/select';
import { sort } from '../func/sort';
import { debug } from 'console';

type DatatableTypes = {
    headers: any[];
    employees: any[];
    paginate: boolean;
    options: SelectOption[] | null;
};

export const Datatable = ({
    headers,
    employees,
    paginate,
    options
}: DatatableTypes) => {
    const [data, setData] = useState<any[][]>([]);
    // const [dataByEntries, setDataByEntries] = useState<object[][]>([[]]);
    // const [dataSearched, setDataSearched] = useState<object[][]>([[]]);
    const [searchedTerms, setSearchedTerms] = useState<string>('');
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>('');

    // const data = [employees];

    useEffect(() => {
        // setData(employees);
        // setDataByEntries(showEntries(entriesPerPage, data));
        setData(showEntries(entriesPerPage, employees));
        // <RenderTable />;
    }, [employees]);

    // useEffect(() => {
    //     setDataByEntries(
    //         showEntries(
    //             entriesPerPage,
    //             dataSearched[0].length > 0 ? dataSearched : data
    //         )
    //     );
    // }, [entriesPerPage]);

    // useEffect(() => {
    //     <RenderTable />;
    // }, [dataByEntries]);

    const RenderTable = () => {
        let results: any[][] =
            searchedTerms !== ''
                ? searchingData(searchedTerms, data.flat(), entriesPerPage)
                : data;

        if (sortBy !== '') {
            results = showEntries(entriesPerPage, sort(sortBy, results.flat()));
        }

        // if (dataSearched?.[0]?.length > 0) {
        //     return (
        //         <>
        //             {dataSearched[0].map((employee: object, index: number) => (
        //                 <Row key={`row-${index}`} data={employee} />
        //             ))}
        //         </>
        //     );
        // }
        // return (
        //     <>
        //         {dataByEntries[0].map((employee, index) => (
        //             <Row key={`row-${index}`} data={employee} />
        //         ))}
        //     </>
        // );
        return (
            <>
                {results[0].map((employee, index) => (
                    <Row key={`row-${index}`} data={employee} />
                ))}
            </>
        );
    };

    const handleSearch: React.ComponentProps<typeof Search>['onChange'] = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        setSearchedTerms(e.currentTarget.value);
        // setDataSearched(
        //     searchingData(e.currentTarget.value, data, entriesPerPage)
        // );
        <RenderTable />;
    };

    const handleSort = (e: React.MouseEvent) => {
        const headerData = e.currentTarget.getAttribute('data-column');
        if (headerData) {
            setSortBy(headerData);
            // setDataByEntries(
            //     showEntries(entriesPerPage, sort(headerData, data))
            // );
        }
        <RenderTable />;
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
                <Header headers={headers} handleClick={handleSort} />

                <tbody>{data[0] && <RenderTable />}</tbody>
            </table>

            {paginate && <p>Pagination</p>}
        </div>
    );
};
