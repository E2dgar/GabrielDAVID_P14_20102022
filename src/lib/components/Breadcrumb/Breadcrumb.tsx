type BreadcrumbT = {
    resultsLength: number;
    currentIndex: number;
    entriesPerPage: number;
    employeesLength: number;
};

export const Breadcrumb = ({
    resultsLength,
    currentIndex,
    entriesPerPage,
    employeesLength
}: BreadcrumbT) => {
    const to =
        entriesPerPage * (currentIndex + 1) > resultsLength
            ? resultsLength
            : entriesPerPage * (currentIndex + 1);
    const from = to - entriesPerPage < 0 ? 1 : to - entriesPerPage + 1;

    return (
        <p data-testid="location">
            Showing {from} to {to} of {resultsLength} entries{' '}
            {employeesLength !== resultsLength &&
                `(filtered from ${employeesLength} total entries)`}
        </p>
    );
};
