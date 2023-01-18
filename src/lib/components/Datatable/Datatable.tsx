import { useState, useEffect, useRef } from 'react';
import './index.css';
import { Search } from '../Search';
import { Select } from '../Select';
import { Pagination } from '../Pagination';
import { Location } from '../Location';
import { Row } from '../Row';
import { Header } from '../Headers';
import { searchingData } from '../helpers/search';
import { camelCaseToString } from '../helpers/camelCaseToString';

export type DatatableTypes = {
    employees: any[];
    scrollH?: number;
};

export type DataTableList = any[];

export type HeadersT = {
    index: number;
    column: string;
    handleSort: any;
    label: string;
    ariaSort: 'none' | 'ascending' | 'descending' | 'other' | undefined;
};

export const Datatable = ({ employees, scrollH }: DatatableTypes) => {
    const headers = Object.keys(employees[0] || {});
    const [sortedBy, setSortedBy] = useState({
        column: headers[0],
        asc: false
    });
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
    const [results, setResults] = useState<DataTableList>(employees);

    useEffect(() => {
        if (scrollH) setEntriesPerPage(employees.length);

        handleSort(headers[0]);

        // NOTE: Run effect once on component mount, please
        // recheck dependencies if effect is updated.
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
                        <Select
                            onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                                handleSelect(e)
                            }
                        />
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
                <table
                    id="employee-table"
                    data-testid="datatable"
                    className="datatable"
                    role="grid"
                    aria-describedby="employee-table_info">
                    <thead data-testid="datatable-headers">
                        <tr>
                            {headers.map((column, index) => (
                                <Header
                                    key={column}
                                    index={index}
                                    column={column}
                                    handleSort={() => handleSort(column)}
                                    label={camelCaseToString(column)}
                                    ariaSort={
                                        sortedBy.column === column &&
                                        sortedBy.asc
                                            ? 'ascending'
                                            : sortedBy.column === column
                                            ? 'descending'
                                            : undefined
                                    }
                                />
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
                                        sort={sortedBy.column}
                                    />
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            <div className="entries-pagination-container">
                <Location
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
