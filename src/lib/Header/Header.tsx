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
                {headers.map((header: object) => (
                    <th
                        key={`header-${Object.keys(header)}`}
                        data-column={Object.keys(header)}
                        onClick={handleClick}>
                        {Object.values(header)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
