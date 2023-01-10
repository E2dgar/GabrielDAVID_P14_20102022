import { useEffect } from 'react';

export const Search = ({ onChange }: any) => {
    return (
        <label>
            Search:{' '}
            <input data-testid="searchBox" type="search" onChange={onChange} />
        </label>
    );
};
