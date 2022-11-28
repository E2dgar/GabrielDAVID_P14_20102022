import { RefObject, useRef } from 'react';
import React from 'react';
import { sort } from '../func/sort';
import { showEntries } from '../func/select';

export const Header = ({
    headers,
    results,
    setResults,
    entriesPerPage
}: // handleClick
// refs
{
    headers: any[];
    results: any[][];
    setResults: React.Dispatch<React.SetStateAction<any[][]>>;
    entriesPerPage: number;
    // handleClick: any;
    // refs: any;
}) => {
    const refs = useRef(new Array(headers.length));

    const handleClick = (i: number) => {
        const currentSortBy = refs.current.filter((elt) =>
            elt.getAttribute('data-sort')
        );
        const newSortBy = refs.current[i];

        if (currentSortBy[0] && currentSortBy[0] !== newSortBy) {
            currentSortBy[0].removeAttribute('data-sort');
        }

        const sortOrder = newSortBy.getAttribute('data-sort');

        if (!sortOrder || sortOrder === 'DESC') {
            setResults(
                showEntries(
                    entriesPerPage,
                    sort(results.flat(), newSortBy.getAttribute('data-column'))
                )
            );
            newSortBy.setAttribute('data-sort', 'ASC');
            console.log('sortOrder', refs.current[i].getAttribute('data-sort'));
        } else {
            console.log(1);
            newSortBy.setAttribute('data-sort', 'DESC');
            setResults(showEntries(entriesPerPage, results.flat().reverse()));
            console.log('sortOrder', refs.current[i].getAttribute('data-sort'));
        }
    };

    return (
        <thead data-testid="datatable-headers">
            <tr>
                {headers.map((header: any, i: number) => (
                    <th
                        key={`header-${header.key}`}
                        ref={(elt) => (refs.current[i] = elt)}
                        data-column={header.key}
                        onClick={() => handleClick(i)}>
                        {header.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
