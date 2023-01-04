import { Row } from '../Row';
import { entries } from '../func/entries';

type TBodyType = {
    results: any[];
    pageIndex: number;
    headers: any[];
    scrollH?: number;
    sortBy?: string;
    entriesPerPage: number;
};

export const TBody = ({
    results,
    pageIndex,
    headers,
    scrollH,
    entriesPerPage
}: // sortBy
TBodyType) => {
    const scrollStyle = {
        maxHeight: `${scrollH}px`,
        display: 'block',
        overflowY: 'scroll' as 'scroll'
    };

    return (
        <tbody style={scrollH ? scrollStyle : {}}>
            {results.length > 0 &&
                entries(entriesPerPage, results, pageIndex).map(
                    (employee, index) => (
                        <Row
                            key={`row-${index}`}
                            data={employee}
                            headers={headers}
                            scrollH={scrollH}
                            // sortBy={sortBy}
                        />
                    )
                )}
        </tbody>
    );
};
