import { camelCaseToString } from '../helpers/camelCaseToString';

export type HeadersT = {
    index: number;
    column: string;
    handleSort: any;
    label: string;
    ariaSort: 'none' | 'ascending' | 'descending' | 'other' | undefined;
};

/**
 * Component for table's headers
 * @returns {JSX.Element}
 */
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
