import './index.css';

export const Search = ({ onChange }: any) => {
    return (
        <label className="search-label">
            Search:{' '}
            <input data-testid="searchBox" type="search" onChange={onChange} />
        </label>
    );
};
