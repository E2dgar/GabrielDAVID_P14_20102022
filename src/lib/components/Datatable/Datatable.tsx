import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Search } from '../Search';
import './index.css';
import { Select } from '../Select';
import { searchingData } from '../func/search';
import { sort } from '../func/sort';
import { Pagination } from '../Pagination';
import { Breadcrumb } from '../Breadcrumb';
import { TBody } from '../TBody';
import { showEntries } from '../func/select';
import { Row } from '../Row';

export type DatatableTypes = {
    headers: any[];
    employees: any[];
    paginate?: boolean;
    scrollH?: number;
};

export type DataTableList = any[][];

export const Datatable = ({
    headers,
    employees,
    paginate,
    scrollH
}: DatatableTypes) => {
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [searchedTerms, setSearchedTerms] = useState<string>('');
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
    const [results, setResults] = useState<DataTableList>([]);
    const [sortBy, setSortBy] = useState<any>({});

    useEffect(() => {
        // setResults([employees]);
        setResults(showEntries(entriesPerPage, employees, !!paginate));
    }, []);

    useEffect(() => {
        if (results[0]) {
            setResults(showEntries(entriesPerPage, results.flat(), !!paginate));
        }
    }, [entriesPerPage]);

    useEffect(() => {
        if (searchedTerms) {
            setPageIndex(0);
            setResults(
                showEntries(
                    entriesPerPage,
                    searchingData(searchedTerms, employees),
                    !!paginate
                )
            );
        } else {
            setResults(showEntries(entriesPerPage, employees, !!paginate));
        }
    }, [searchedTerms]);

    useEffect(() => {
        if (sortBy.header) {
            setResults(
                showEntries(
                    entriesPerPage,
                    sort(results.flat(), sortBy),
                    !!paginate
                )
            );
        }
    }, [sortBy]);

    const handleSearch: React.ComponentProps<typeof Search>['onChange'] = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        setSearchedTerms(e.currentTarget.value);
    };

    const paginationNavigate = (e: React.MouseEvent) => {
        const indexAttribute = e.currentTarget.getAttribute('data-index');

        if (indexAttribute) {
            setPageIndex(parseInt(indexAttribute));
        }
    };

    return (
        <div className="table-container" data-scroll={scrollH}>
            <div className="select-search-bar">
                {paginate && (
                    <Select
                        setEntriesPerPage={setEntriesPerPage}
                        setPageIndex={setPageIndex}
                        currentPageIndex={pageIndex}
                        resultsLength={results.flat().length}
                    />
                )}

                <Search onChange={handleSearch} />
            </div>

            <table data-testid="datatable" className="datatable">
                <thead data-testid="datatable-headers">
                    <tr>
                        <Header headers={headers} setSortBy={setSortBy} />
                    </tr>
                </thead>

                <tbody>
                    {results[0] &&
                        results[pageIndex].map(
                            (employee: any[], index: number) => (
                                <Row
                                    key={`row-${index}`}
                                    data={employee}
                                    headers={headers}
                                />
                            )
                        )}
                </tbody>
            </table>

            <div className="entries-pagination-container">
                <Breadcrumb
                    resultsLength={results.flat().length}
                    currentIndex={pageIndex}
                    entriesPerPage={entriesPerPage}
                />

                {paginate && (
                    <Pagination
                        results={results}
                        navigate={paginationNavigate}
                        currentIndex={pageIndex}
                        entriesPerPage={entriesPerPage}
                    />
                )}
            </div>
        </div>
    );
};
