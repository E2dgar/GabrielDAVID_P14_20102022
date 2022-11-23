type DataT = { [key: string]: any };

type RowT = {
    data: any;
    headers: DataT[];
};

export const Row = ({ data, headers }: RowT) => {
    return (
        <tr>
            {headers.map((header: any) => (
                <td key={Object.keys(header).toString()}>
                    {data[Object.keys(header).toString()]}
                </td>
            ))}
        </tr>
    );
};
