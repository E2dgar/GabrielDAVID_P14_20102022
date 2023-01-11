import { useState } from 'react';
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
    paginate?: boolean;
    scrollH?: number;
};

export type DataTableList = any[];

export const Datatable = ({ employees, paginate, scrollH }: DatatableTypes) => {
    const headers = Object.keys(employees[0]);
    const [sortedBy, setSortedBy] = useState({ column: headers[0], asc: true });
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
    const [results, setResults] = useState<DataTableList>(employees);

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
        const { column, asc } = sortedBy;
        return asc
            ? data.sort((a, b) => a[column].localeCompare(b[column]))
            : data.sort((a, b) => b[column].localeCompare(a[column]));
    };

    const handleSort = (column: string) => {
        setPageIndex(0);
        setSortedBy((prev) => ({
            column: column,
            asc: prev.column === column && prev.asc ? false : true
        }));
    };

    const handleSearch: React.ComponentProps<typeof Search>['onChange'] = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        setPageIndex(0);

        setResults(
            searchingData(e.currentTarget.value.toLowerCase(), employees)
        );
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

            <div className="entries-pagination-container">
                <Breadcrumb
                    resultsLength={results.length}
                    employeesLength={employees.length}
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
