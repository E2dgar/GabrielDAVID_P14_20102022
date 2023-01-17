import { useState, useEffect } from 'react';
import { Search } from '../Search';
import './index.css';
import { Select } from '../Select';
import { searchingData } from '../func/search';
import { Pagination } from '../Pagination';
import { Breadcrumb } from '../Breadcrumb';
import { Row } from '../Row';
import { camelCaseToString } from '../func/camelCaseToString';

export type DatatableTypes = {
    employees: any[];
    scrollH?: number;
};

export type DataTableList = any[];

export const Datatable = ({ employees, scrollH }: DatatableTypes) => {
    const headers = Object.keys(employees[0] || {});
    const [sortedBy, setSortedBy] = useState({ column: headers[0], asc: true });
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
    const [results, setResults] = useState<DataTableList>(employees);

    useEffect(() => {
        if (scrollH) setEntriesPerPage(employees.length);
    }, []);

    const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
        const newEntriesPerPage = parseInt(e.currentTarget.value);
        /* Save firstRow index */
        const firstRowIndex = pageIndex * entriesPerPage;

        // /* New index must diplay the old first row*/
        const newIndex = Math.floor(firstRowIndex / newEntriesPerPage);

        setPageIndex(newIndex);
        setEntriesPerPage(newEntriesPerPage);
    };

    const sort = (data: any[], sortedBy: any) => {
        const sortedData = [...data];
        const { column, asc } = sortedBy;
        return asc
            ? sortedData.sort((a, b) => a[column].localeCompare(b[column]))
            : sortedData.sort((a, b) => b[column].localeCompare(a[column]));
    };

    const handleSort = (column: string) => {
        setPageIndex(0);
        setSortedBy((prev) => ({
            column: column,
            asc: prev.column === column && prev.asc ? false : true
        }));
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPageIndex(0);

        setResults(
            searchingData(e.currentTarget.value.toLowerCase(), employees)
        );
    };

    const paginationNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
        const indexAttribute = e.currentTarget.getAttribute('data-index');
        if (indexAttribute) {
            setPageIndex(parseInt(indexAttribute));
        }
    };

    return (
        <div className="datatable-container">
            <div className="select-search-bar">
                {!scrollH && (
                    <label>
                        Show
                        <Select onChange={handleSelect} />
                        entries
                    </label>
                )}

                <Search onChange={handleSearch} />
            </div>
            <div
                className="table-container"
                style={{
                    height: `${scrollH}px` || 'undefined',
                    overflowY: scrollH ? 'scroll' : 'initial'
                }}>
                <table data-testid="datatable" className="datatable">
                    <thead data-testid="datatable-headers">
                        <tr>
                            {headers.map((column, index) => (
                                <th
                                    key={`header-${index}`}
                                    data-column={column}
                                    onClick={() => handleSort(column)}
                                    data-testid="header">
                                    {camelCaseToString(column)}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {sort(results, sortedBy)
                            .slice(
                                pageIndex * entriesPerPage,
                                pageIndex * entriesPerPage + entriesPerPage
                            )
                            .map((employee: any, index: number) => (
                                <tr data-testid="row" key={`tr-${index}`}>
                                    <Row
                                        key={index}
                                        row={employee}
                                        headers={headers}
                                    />
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            <div className="entries-pagination-container">
                <Breadcrumb
                    resultsLength={results.length}
                    employeesLength={employees.length}
                    currentIndex={pageIndex}
                    entriesPerPage={entriesPerPage}
                />

                {!scrollH && (
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
