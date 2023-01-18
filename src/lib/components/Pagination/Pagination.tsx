import { Button } from '../Button';
import './index.css';

export type PaginationT = {
    results: any[];
    navigate: any;
    currentIndex: number;
    entriesPerPage: number;
};

export const Pagination = ({
    results,
    navigate,
    currentIndex,
    entriesPerPage
}: PaginationT) => {
    const pagesNumber = Math.ceil(results.length / entriesPerPage);

    const mappingArray = results.slice(0, pagesNumber);

    const isButtonVisible = (index: number) => {
        return (
            index === 0 ||
            index === pagesNumber - 1 ||
            (index > currentIndex - 3 && index < currentIndex + 3)
        );
    };
    return (
        <div id="employee-table_paginate" data-testid="pagination">
            <button
                id="employye-table_previous"
                className="next-prev"
                disabled={currentIndex === 0}
                data-index={currentIndex - 1}
                onClick={navigate}
                tabIndex={-1}
                aria-controls="employee-table">
                Previous
            </button>

            {mappingArray.map((__, index) =>
                isButtonVisible(index) ? (
                    <Button
                        className={`pagination-button ${
                            currentIndex === index ? 'active' : ''
                        }`}
                        key={index}
                        index={index}
                        navigate={navigate}
                    />
                ) : isButtonVisible(index - 1) ? (
                    '...'
                ) : null
            )}

            <button
                id="employee-table_next"
                onClick={navigate}
                className="next-prev"
                disabled={currentIndex === results.length - 1}
                data-index={currentIndex + 1}
                tabIndex={0}
                aria-controls="employee-table">
                Next
            </button>
        </div>
    );
};
