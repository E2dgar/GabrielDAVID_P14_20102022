export const Header = ({ headers }: { headers: object[] }) => {
    return (
        <thead data-testid="datatable-headers">
            <tr>
                {headers.map((header: object) => (
                    <th
                        key={`header-${Object.keys(header)}`}
                        data-column={Object.keys(header)}>
                        {Object.values(header)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
