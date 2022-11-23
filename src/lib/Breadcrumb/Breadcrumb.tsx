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
    const to = entriesPerPage * (currentIndex + 1);
    const from = to - entriesPerPage + 1;

    return (
        <p>
            Show {from} to {to} of {resultsLength} entries
        </p>
    );
};
