import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Search } from '../Search';
import './index.css';
import { Select, SelectOption } from '../Select';
import { searchingData } from '../func/search';
import { showEntries } from '../func/select';
import { Pagination } from '../Pagination';
import { Breadcrumb } from '../Breadcrumb';
import { TBody } from '../TBody';

export type DatatableTypes = {
    headers: any[];
    employees: any[];
    paginate?: boolean;
    scrollH?: number;
    options: SelectOption[] | null;
};

export type DataTableList = any[][];

export const Datatable = ({
    headers,
    employees,
    paginate,
    options,
    scrollH
}: DatatableTypes) => {
    const [results, setResults] = useState<any[][]>([]);
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [searchedTerms, setSearchedTerms] = useState<string>('');
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>('');

    useEffect(() => {
        setResults(showEntries(entriesPerPage, employees, !!paginate));
    }, []);

    useEffect(() => {
        setResults(
            showEntries(
                entriesPerPage,
                searchingData(searchedTerms, employees),
                !!paginate
            )
        );
    }, [searchedTerms]);

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
        <div className="table-container">
            <div className="select-search-bar">
                {paginate && (
                    <Select
                        options={options}
                        setEntriesPerPage={setEntriesPerPage}
                        setPageIndex={setPageIndex}
                        currentPageIndex={pageIndex}
                        results={results}
                        setResults={setResults}
                        resultsLength={results.flat().length}
                        paginate={true}
                    />
                )}

                <Search onChange={handleSearch} />
            </div>

            <table data-testid="datatable" className="datatable">
                <Header
                    headers={headers}
                    results={results}
                    setResults={setResults}
                    setSortBy={setSortBy}
                    entriesPerPage={entriesPerPage}
                    paginate={!!paginate}
                    scrollH={scrollH}
                />

                {results[0] && (
                    <TBody
                        results={results}
                        headers={headers}
                        pageIndex={pageIndex}
                        scrollH={scrollH}
                        sortBy={sortBy}
                    />
                )}
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
                    />
                )}
            </div>
        </div>
    );
};
