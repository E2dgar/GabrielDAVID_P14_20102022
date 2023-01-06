import { Row } from '../Row';
import { entries } from '../func/entries';
import { showEntries } from '../func/select';

type TBodyType = {
    results: any[];
    // pageIndex: number;
    headers: any[];
    scrollH?: number;
    sortBy?: string;
    entriesPerPage: number;
    paginate: boolean;
};

export const TBody = ({
    results,
    // pageIndex,
    headers,
    entriesPerPage,
    paginate
}: // sortBy
TBodyType) => {
    const data = showEntries(entriesPerPage, results, paginate);
    // console.log(results);
    return (
        <>
            {/* <tbody> */}
            {/* {results.length > 0 &&
                entries(entriesPerPage, results, pageIndex).map(
                    (employee, index) => (
                        <Row
                            key={`row-${index}`}
                            data={employee}
                            headers={headers}
                        />
                    )
                )} */}
            {results.map((employee: any[], index: number) => (
                <Row key={`row-${index}`} data={employee} headers={headers} />
            ))}
        </>
    );
};
