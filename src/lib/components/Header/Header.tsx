import { useRef } from 'react';
import React from 'react';
import { sort } from '../func/sort';
import { showEntries } from '../func/select';

export const Header = ({
    headers,
    results,
    setResults,
    entriesPerPage,
    paginate,
    scrollH,
    setSortBy
}: {
    headers: any[];
    results: any[][];
    setResults: React.Dispatch<React.SetStateAction<any[][]>>;
    entriesPerPage: number;
    paginate: boolean;
    scrollH?: number;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const refs = useRef(new Array(headers.length));

    const thStyle = scrollH
        ? {
              display: 'table',
              width: 'calc(100% - 1em)',
              tableLayout: 'fixed' as 'fixed'
          }
        : {};

    const handleClick = (i: number) => {
        const currentSortBy = refs.current.filter((elt) =>
            elt.getAttribute('data-sort')
        );

        const newSortBy = refs.current[i];
        setSortBy(newSortBy.getAttribute('data-column'));

        if (currentSortBy[0] && currentSortBy[0] !== newSortBy) {
            currentSortBy[0].removeAttribute('data-sort');
        }

        const sortOrder = newSortBy.getAttribute('data-sort');

        if (!sortOrder || sortOrder === 'DESC') {
            setResults(
                showEntries(
                    entriesPerPage,
                    sort(results.flat(), newSortBy.getAttribute('data-column')),
                    paginate
                )
            );
            newSortBy.setAttribute('data-sort', 'ASC');
        } else {
            newSortBy.setAttribute('data-sort', 'DESC');
            setResults(
                showEntries(entriesPerPage, results.flat().reverse(), paginate)
            );
        }
    };

    return (
        <thead data-testid="datatable-headers" style={thStyle}>
            <tr>
                {headers.map((header: any, i: number) => (
                    <th
                        key={`header-${i}`}
                        ref={(elt) => (refs.current[i] = elt)}
                        data-column={header.key}
                        onClick={() => handleClick(i)}
                        data-testid="header">
                        {header.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
