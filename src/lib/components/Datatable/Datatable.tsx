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

export type DatatableTypes = {
    headers: any[];
    employees: any[];
    paginate?: boolean;
    scrollH?: number;
};

export type DataTableList = any[];

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
        setResults(employees);
    }, []);

    useEffect(() => {
        setPageIndex(0);
        setResults(searchingData(searchedTerms, employees));
    }, [searchedTerms]);

    useEffect(() => {
        if (sortBy.header) {
            setResults(sort(results, sortBy));
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
                        resultsLength={results.length}
                    />
                )}

                <Search onChange={handleSearch} />
            </div>

            <table data-testid="datatable" className="datatable">
                <Header headers={headers} setSortBy={setSortBy} />

                <TBody
                    results={results}
                    headers={headers}
                    entriesPerPage={entriesPerPage}
                    pageIndex={pageIndex}
                />
            </table>

            <div className="entries-pagination-container">
                <Breadcrumb
                    resultsLength={results.length}
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
