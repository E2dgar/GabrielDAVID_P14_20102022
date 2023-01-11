// type DataT = { [key: string]: any };

type RowT = {
    row: any;
    headers: any[];
};

export const Row = ({ row, headers }: RowT) => {
    return (
        <>
            {headers.map((header: any, i: number) => (
                <td key={`cell-${i}`} data-testid={`row-${i}-td`}>
                    {row[header]}
                </td>
            ))}
        </>
    );
};
