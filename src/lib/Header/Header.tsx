export const Header = ({
    headers,
    handleClick
}: {
    headers: any[];
    handleClick: any;
}) => {
    return (
        <thead data-testid="datatable-headers">
            <tr>
                {headers.map((header: any) => (
                    <th
                        key={`header-${Object.keys(header)}`}
                        data-column={Object.keys(header)}
                        data-sort={'none'}
                        onClick={handleClick}>
                        {Object.values(header)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
