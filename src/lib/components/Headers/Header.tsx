import { HeadersT } from '../Datatable';

export const Header = ({ index, column, handleSort, label }: HeadersT) => {
    return (
        <th
            key={`header-${index}`}
            data-column={column}
            onClick={handleSort}
            data-testid="header">
            {label}
        </th>
    );
};
