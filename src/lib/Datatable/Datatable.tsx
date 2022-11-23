import React, { useEffect, useState } from 'react';
import { TApiResponse } from '../../hooks/fetch';
import { Header } from '../Header';
import { Row } from '../Row';
import { Search } from '../Search';
import './index.css';
import { Select, SelectOption } from '../Select';
import { searchingData } from '../func/search';
import { showEntries } from '../func/select';
import { sort, sortType } from '../func/sort';
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
    const [results, setResults] = useState<any[][]>([]);
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [searchedTerms, setSearchedTerms] = useState<string>('');
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
    const [sortBy, setSortBy] = useState<HTMLTableCellElement | null>(null);
    const [paginationData, setPaginationData] = useState<any[]>([]);

    useEffect(() => {
        // setData(showEntries(entriesPerPage, employees));
        setResults(showEntries(entriesPerPage, employees));
        console.log('tet');
    }, []);

    useEffect(() => {
        setResults(
            showEntries(entriesPerPage, searchingData(searchedTerms, employees))
        );
    }, [searchedTerms]);

    useEffect(() => {
        if (results.length > 0) {
            setResults(showEntries(entriesPerPage, results.flat()));
        }
        // Pourquoi entriesPerPage change au 1er render ,
    }, [entriesPerPage]);

    useEffect(() => {
        if (paginate) {
            setPaginationData(results);
        }
    }, [results]);

    // useEffect(() => {
    //     if (sortBy) {
    //         setResults(
    //             showEntries(entriesPerPage, sort(sortBy, results.flat()))
    //         );
    //     }
    // }, [sortBy]);

    // useEffect(() => {
    //     // console.log('res', results);
    //     renderTable();
    // }, [results]);

    const renderTable = () => {
        // console.log('render');
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

    // useEffect(() => {
    //     setResults(showEntries(entriesPerPage, results));
    // }, [entriesPerPage]);

    // useEffect(() => {
    //     // setResults(searchingData(searchedTerms, data.flat(), entriesPerPage));
    //     let resultsToRender: any[][] =
    //         searchedTerms !== ''
    //             ? searchingData(searchedTerms, data.flat(), entriesPerPage)
    //             : data;

    //     if (sortBy) {
    //         resultsToRender = showEntries(
    //             entriesPerPage,
    //             sort(sortBy, resultsToRender.flat())
    //         );
    //     }

    //     setResults(resultsToRender);

    //     if (paginate) {
    //         setPaginationData(resultsToRender);
    //     }
    // }, [searchedTerms, entriesPerPage, sortBy]);
    // useEffect(() => {
    //     <RenderTable />;
    // }, [entriesPerPage, searchedTerms, sortBy]);

    // const RenderTable = (data: any[][]) => {
    //     if(!data){
    //         results = employees
    //     }
    //     let results: any[][] =
    //         searchedTerms !== ''
    //             ? searchingData(searchedTerms, data.flat(), entriesPerPage)
    //             : data;

    //     if (sortBy) {
    //         results = showEntries(entriesPerPage, sort(sortBy, results.flat()));
    //     }

    //     // useEffect(() => {
    //     // if (paginate) {
    //     //     setPaginationData(results);
    //     // }
    //     // }, []);

    //     return (
    //         <>
    //             {results[pageIndex].map((employee, index) => (
    //                 <Row
    //                     key={`row-${index}`}
    //                     data={employee}
    //                     headers={headers}
    //                 />
    //             ))}
    //         </>
    //     );
    // };

    const handleSearch: React.ComponentProps<typeof Search>['onChange'] = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        setSearchedTerms(e.currentTarget.value);
    };

    const handleSort = (e: React.MouseEvent<HTMLTableCellElement>) => {
        const header = e.currentTarget.getAttribute('data-column');
        const headerSortType = e.currentTarget.getAttribute('data-sort');
        sortType(e.currentTarget);
        if (header) {
            //Obligé de relancer searching, entries... ?
            if (headerSortType === 'DESC') {
                setResults(
                    showEntries(
                        entriesPerPage,
                        searchingData(searchedTerms, employees)
                    )
                );
            } else {
                setResults(
                    showEntries(
                        entriesPerPage,
                        sort(e.currentTarget, results.flat())
                    )
                );
            }
        }
    };

    const paginationNavigate = (e: React.MouseEvent) => {
        const indexAttribute = e.currentTarget.getAttribute('data-index');

        if (indexAttribute) {
            let index = parseInt(indexAttribute);
            // if (index - 1 > results.length - 1) {
            //     console.log('cur index', index);
            //     index = results.length;
            // }
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
                        resultsLength={results.flat().length}
                    />
                )}

                <Search onChange={handleSearch} />
            </div>

            <table data-testid="datatable" className="datatable">
                <Header headers={headers} handleClick={handleSort} />

                {/* <tbody>{data[0] && <RenderTable />}</tbody> */}
                <tbody>{results[0] && renderTable()}</tbody>
            </table>

            <Pagination
                results={paginationData}
                navigate={paginationNavigate}
            />
        </div>
    );
};
