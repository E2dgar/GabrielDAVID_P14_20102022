import { Row } from '../Row';

type TBodyType = {
    results: any[][];
    pageIndex: number;
    headers: any[];
};

export const TBody = ({ results, pageIndex, headers }: TBodyType) => {
    return (
        <tbody>
            {results[pageIndex].map((employee, index) => (
                <Row key={`row-${index}`} data={employee} headers={headers} />
            ))}
        </tbody>
    );
};
