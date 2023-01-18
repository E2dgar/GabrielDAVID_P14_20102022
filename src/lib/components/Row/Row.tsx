export type RowT = {
    row: any;
    headers: any[];
    sort: string | null;
};

/**
 * Component for table's <td>
 * @returns {JSX.Element}
 */
export const Row = ({ row, headers, sort }: RowT) => {
    return (
        <>
            {headers.map((header: any, i: number) => (
                <td
                    key={`cell-${i}`}
                    data-testid={`row-${i}-td`}
                    className={sort === header ? 'sorted' : ''}>
                    {row[header]}
                </td>
            ))}
        </>
    );
};
