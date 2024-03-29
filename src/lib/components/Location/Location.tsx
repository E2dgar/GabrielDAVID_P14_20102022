export type LocationT = {
    resultsLength: number;
    currentIndex: number;
    entriesPerPage: number;
    employeesLength: number;
};

/**
 * Component for location in table
 *
 * @returns {JSX.Element}
 */
export const Location = ({
    resultsLength,
    currentIndex,
    entriesPerPage,
    employeesLength
}: LocationT) => {
    const to =
        entriesPerPage * (currentIndex + 1) > resultsLength
            ? resultsLength
            : entriesPerPage * (currentIndex + 1);
    const from = to - entriesPerPage < 0 ? 1 : to - entriesPerPage + 1;

    return (
        <p
            id="employye-table_info"
            data-testid="location"
            role="status"
            aria-live="polite">
            Showing {from} to {to} of {resultsLength} entries{' '}
            {employeesLength !== resultsLength &&
                `(filtered from ${employeesLength} total entries)`}
        </p>
    );
};
