import { Row } from '../Row';

type TBodyT = {
    results: any[];
    headers: any[];
};

export const TBody = ({ results, headers }: TBodyT) => {
    return (
        <tbody>
            {results.map((employee: any[], index: number) => (
                <Row
                    key={`data-row-${index}`}
                    data={employee}
                    headers={headers}
                />
            ))}
        </tbody>
    );
};
