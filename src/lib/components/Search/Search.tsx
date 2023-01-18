import './index.css';

/**
 * Search component.
 *
 * @returns {JSX.Element}
 */
export const Search = ({ onChange }: any) => {
    return (
        <label className="search-label">
            Search:{' '}
            <input
                data-testid="searchBox"
                type="search"
                onChange={onChange}
                aria-controls="employee-table"
            />
        </label>
    );
};
