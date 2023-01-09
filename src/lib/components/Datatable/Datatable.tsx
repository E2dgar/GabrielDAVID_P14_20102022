import { useEffect, useState, useRef } from 'react';
import { Header } from '../Header';
import { Search } from '../Search';
import './index.css';
import { Select } from '../Select';
import { searchingData } from '../func/search';
import { sort } from '../func/sort';
import { Pagination } from '../Pagination';
import { Breadcrumb } from '../Breadcrumb';
import { dataFiltered } from '../func/dataFiltered';
import { Row } from '../Row';

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
    const [sortBy, setSortBy] = useState<any>({
        header: 'firstName',
        order: 'ASC'
    });
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [searchedTerms, setSearchedTerms] = useState<string>('');
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
    const [results, setResults] = useState<DataTableList>(employees);
    const [resultsToDisplay, setResultsToDisplay] = useState<DataTableList>([]);

    useEffect(() => {
        setPageIndex(0);

        setResults(
            sortBy.header
                ? sort(searchingData(searchedTerms, employees), sortBy)
                : searchingData(searchedTerms, employees)
        );
    }, [searchedTerms]);

    useEffect(() => {
        setResultsToDisplay(
            dataFiltered(results, pageIndex, entriesPerPage, !!paginate)
        );
    }, [results, pageIndex, entriesPerPage]);

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

    const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
        /* Save firstRow index */
        const firstRowIndex = pageIndex * entriesPerPage;

        const newEntriesPerPage = parseInt(e.currentTarget.value);

        /* New index must diplay the old first row*/
        const newIndex = Math.floor(firstRowIndex / newEntriesPerPage);

        // setSelected(newEntriesPerPage);

        setPageIndex(newIndex);

        setEntriesPerPage(newEntriesPerPage);
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
                            // setEntriesPerPage={setEntriesPerPage}
                            // setPageIndex={setPageIndex}
                            // currentPageIndex={pageIndex}
                            // resultsLength={results.length}
                            onChange={handleSelect}
                        />
                        entries
                    </label>
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
                    {resultsToDisplay.map((employee: any[], index: number) => (
                        <Row key={index} data={employee} headers={headers} />
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
