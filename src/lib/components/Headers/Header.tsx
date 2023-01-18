import { HeadersT } from '../Datatable';
import { camelCaseToString } from '../helpers/camelCaseToString';

export const Header = ({ column, handleSort, label, ariaSort }: HeadersT) => {
    const order =
        ariaSort === 'descending' || !ariaSort ? 'ascending' : 'descending';
    return (
        <th
            className={ariaSort ? `active-sort-${order}` : ''}
            data-column={column}
            onClick={handleSort}
            data-testid="header"
            tabIndex={0}
            aria-controls="employee-table"
            aria-label={`${camelCaseToString(
                column
            )} : activate to sort ${order}`}
            aria-sort={ariaSort}>
            {label}
        </th>
    );
};
