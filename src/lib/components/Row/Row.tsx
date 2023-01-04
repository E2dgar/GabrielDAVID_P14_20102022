type DataT = { [key: string]: any };

type RowT = {
    data: any;
    headers: DataT[];
    scrollH?: number;
    sortBy?: string;
};

export const Row = ({ data, headers, scrollH, sortBy }: RowT) => {
    const trStyle = scrollH
        ? {
              display: 'table',
              width: '100%',
              tableLayout: 'fixed' as 'fixed'
          }
        : {};

    return (
        <tr data-testid="row" style={trStyle}>
            {headers.map((header: any, i: number) => (
                <td
                    className={sortBy === header.key ? 'sorted' : ''}
                    key={`row-key-${i}`}
                    data-testid={`row-${i}-td`}>
                    {data[header.key]}
                </td>
            ))}
        </tr>
    );
};
