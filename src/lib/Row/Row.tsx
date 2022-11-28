type DataT = { [key: string]: any };

type RowT = {
    data: any;
    headers: DataT[];
};

export const Row = ({ data, headers }: RowT) => {
    return (
        <tr>
            {headers.map((header: any) => (
                <td key={header.key}>{data[header.key]}</td>
            ))}
        </tr>
    );
};
