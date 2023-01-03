import { Row } from '../Row';

type TBodyType = {
    results: any[][];
    pageIndex: number;
    headers: any[];
    scrollH?: number;
    sortBy: string;
};

export const TBody = ({
    results,
    pageIndex,
    headers,
    scrollH,
    sortBy
}: TBodyType) => {
    const scrollStyle = {
        maxHeight: `${scrollH}px`,
        display: 'block',
        overflowY: 'scroll' as 'scroll'
    };

    console.log('res', results);

    return (
        <tbody style={scrollH ? scrollStyle : {}}>
            {results[pageIndex].map((employee, index) => (
                <Row
                    key={`row-${index}`}
                    data={employee}
                    headers={headers}
                    scrollH={scrollH}
                    sortBy={sortBy}
                />
            ))}
        </tbody>
    );
};
