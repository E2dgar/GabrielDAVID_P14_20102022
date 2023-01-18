import './index.css';

export interface SelectOption {
    value: number;
    text: string;
}

export type SelectType = {
    onChange: any;
};

/**
 * Select component for choose entries per page
 *
 * @returns {JSX.Element}
 */
export const Select = ({ onChange }: SelectType) => {
    return (
        <select
            id="employee-table_length"
            aria-controls="employee-table"
            data-testid="select"
            className="entries-select"
            onChange={onChange}>
            <option data-testid="select-option">10</option>
            <option data-testid="select-option">25</option>
            <option data-testid="select-option">50</option>
            <option data-testid="select-option">100</option>
        </select>
    );
};
