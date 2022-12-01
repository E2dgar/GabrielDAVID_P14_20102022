type BreadcrumbT = {
    resultsLength: number;
    currentIndex: number;
    entriesPerPage: number;
};

export const Breadcrumb = ({
    resultsLength,
    currentIndex,
    entriesPerPage
}: BreadcrumbT) => {
    const to =
        entriesPerPage * (currentIndex + 1) > resultsLength
            ? resultsLength
            : entriesPerPage * (currentIndex + 1);
    const from = to - entriesPerPage < 0 ? 1 : to - entriesPerPage + 1;

    return (
        <p data-testid="location">
            Show {from} to {to} of {resultsLength} entries
        </p>
    );
};
