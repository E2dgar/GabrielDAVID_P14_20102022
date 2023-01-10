import { useEffect } from 'react';

type DataT = { [key: string]: any };

type RowT = {
    data: any;
    headers: DataT[];
};

export const Row = ({ data, headers }: RowT) => {
    return (
        <>
            {headers.map((header: any, i: number) => (
                <td key={`row-key-${i}`} data-testid={`row-${i}-td`}>
                    {data[header.key]}
                </td>
            ))}
        </>
    );
};
