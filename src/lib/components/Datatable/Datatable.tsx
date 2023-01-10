import { useEffect, useState } from 'react';
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
    // const [searchedTerms, setSearchedTerms] = useState<string>('');
    const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
    const [results, setResults] = useState<DataTableList>(employees);
    // const [resultsToDisplay, setResultsToDisplay] = useState<DataTableList>([]);

    // useEffect(() => {
    //     setResults(dataFiltered(employees, 10, !!paginate));
    //     console.log(
    //         dataFiltered(employees, entriesPerPage, !!paginate)[pageIndex]
    //     );
    //     console.log('[', results);
    // }, []);

    // useEffect(() => {
    //     // setPageIndex(0);
    //     // setResults(sort(searchingData(searchedTerms, employees), sortBy));
    // }, [searchedTerms]);

    useEffect(() => {
        setResults(sort(results, sortBy));
        if (sortBy.header) {
            setPageIndex(0);
        }
    }, [sortBy, entriesPerPage]);

    const handleSearch: React.ComponentProps<typeof Search>['onChange'] = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        // setSearchedTerms(e.currentTarget.value.toLowerCase());
        setPageIndex(0);
        // setResults(sort(searchingData(searchedTerms, employees), sortBy));
        setResults(
            sort(
                searchingData(e.currentTarget.value.toLowerCase(), employees),
                sortBy
            )
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
                            entriesPerPage={entriesPerPage}
                            setEntriesPerPage={setEntriesPerPage}
                            setPageIndex={setPageIndex}
                            currentPageIndex={pageIndex}
                            // resultsLength={results.length}
                            // onChange={handleSelect}
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
                    {/* {resultsToDisplay.map((employee: any[], index: number) => (
                        <tr data-testid="row" key={`tr-${index}`}>
                            <Row
                                key={index}
                                data={employee}
                                headers={headers}
                            />
                        </tr>
                    ))} */}
                    {/* {dataFiltered(
                        results,
                        pageIndex,
                        entriesPerPage,
                        !!paginate
                    ).map((employee: any[], index: number) => (
                        <tr data-testid="row" key={`tr-${index}`}>
                            <Row
                                key={index}
                                data={employee}
                                headers={headers}
                            />
                        </tr>
                    ))} */}

                    {dataFiltered(results, entriesPerPage, !!paginate)[
                        pageIndex
                    ].map((employee: any[], index: number) => (
                        <tr data-testid="row" key={`tr-${index}`}>
                            <Row
                                key={index}
                                data={employee}
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
