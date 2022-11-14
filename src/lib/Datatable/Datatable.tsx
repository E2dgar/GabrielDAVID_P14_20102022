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
import { Pagination, PaginationT } from '../Pagination';

type DatatableTypes = {
    headers: any[];
    employees: any[];
    paginate: boolean;
    options: SelectOption[] | null;
};

export type DataTableList = any[][];

export const Datatable = ({
    headers,
    employees,
    paginate,
    options
}: DatatableTypes) => {
    const [data, setData] = useState<any[][]>([]);
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [searchedTerms, setSearchedTerms] = useState<string>('');
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>('');
    const [paginationData, setPaginationData] = useState<any[]>([]);

    useEffect(() => {
        setData(showEntries(entriesPerPage, employees));
    }, [employees]);

    useEffect(() => {
        <RenderTable />;
    }, [entriesPerPage, searchedTerms, sortBy, paginationData, pageIndex]);

    // { results }: React.ComponentProps<typeof Pagination>
    // const Paginate = () => {
    //     return (
    //     //    78
    //     );
    // };

    const RenderTable = () => {
        let results: any[][] =
            searchedTerms !== ''
                ? searchingData(searchedTerms, data.flat(), entriesPerPage)
                : data;

        if (sortBy !== '') {
            results = showEntries(entriesPerPage, sort(sortBy, results.flat()));
        }

        useEffect(() => {
            if (paginate) {
                setPaginationData(results);
            }
        }, [results]);

        return (
            <>
                {results[pageIndex].map((employee, index) => (
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
        // <RenderTable />;
    };

    const handleSort = (e: React.MouseEvent) => {
        const headerData = e.currentTarget.getAttribute('data-column');
        if (headerData) {
            setSortBy(headerData);
        }
        // <RenderTable />;
    };

    const paginationNavigate = (e: React.MouseEvent) => {
        const index = e.currentTarget.getAttribute('data-index');
        if (index) {
            console.log('index', parseInt(index));
            setPageIndex(parseInt(index));
        }
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

            <Pagination
                results={paginationData}
                navigate={paginationNavigate}
            />
        </div>
    );
};
