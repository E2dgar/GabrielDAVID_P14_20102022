import React, { useEffect, useState, useRef, RefObject } from 'react';
import { Header } from '../Header';
import { Row } from '../Row';
import { Search } from '../Search';
import './index.css';
import { Select, SelectOption } from '../Select';
import { searchingData } from '../func/search';
import { showEntries } from '../func/select';
import { Pagination } from '../Pagination';
import { Breadcrumb } from '../Breadcrumb';

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
    const [results, setResults] = useState<any[][]>([]);
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [searchedTerms, setSearchedTerms] = useState<string>('');
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);

    useEffect(() => {
        setResults(showEntries(entriesPerPage, employees));
    }, []);

    useEffect(() => {
        setResults(
            showEntries(entriesPerPage, searchingData(searchedTerms, employees))
        );
    }, [searchedTerms]);

    const RenderTable = () => {
        return (
            <>
                {results[pageIndex].map((employee, index) => (
                    <Row
                        key={`row-${index}`}
                        data={employee}
                        headers={headers}
                    />
                ))}
            </>
        );
    };

    const handleSearch: React.ComponentProps<typeof Search>['onChange'] = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        setSearchedTerms(e.currentTarget.value);
    };

    // const handleSort = (e: React.MouseEvent<HTMLTableCellElement>) => {
    //     console.log(headerRefs);
    //     const header = e.currentTarget.getAttribute('data-column');
    //     const headerSortType = e.currentTarget.getAttribute('data-sort');
    //     sortType(e.currentTarget);
    //     if (header) {
    //         //Fonctionnement base plugin
    //         if (headerSortType === 'DESC') {
    //             setResults(
    //                 showEntries(
    //                     entriesPerPage,
    //                     searchingData(searchedTerms, employees)
    //                 )
    //             );
    //         } else {
    //             setResults(
    //                 showEntries(
    //                     entriesPerPage,
    //                     sort(e.currentTarget, results.flat())
    //                 )
    //             );
    //         }
    //     }
    // };

    const paginationNavigate = (e: React.MouseEvent) => {
        const indexAttribute = e.currentTarget.getAttribute('data-index');

        if (indexAttribute) {
            let index = parseInt(indexAttribute);
            setPageIndex(index);
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
                    />
                )}

                <Search onChange={handleSearch} />
            </div>

            <table data-testid="datatable" className="datatable">
                <Header
                    headers={headers}
                    // handleClick={handleSort}
                    results={results}
                    setResults={setResults}
                    entriesPerPage={entriesPerPage}
                    // refs={headerRefs}
                />

                <tbody>{results[0] && <RenderTable />}</tbody>
            </table>

            <div>
                <Breadcrumb
                    resultsLength={results.flat().length}
                    currentIndex={pageIndex}
                    entriesPerPage={entriesPerPage}
                />
                <Pagination
                    // results={paginationData}
                    results={results}
                    navigate={paginationNavigate}
                />
            </div>
        </div>
    );
};
