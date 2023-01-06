export const dataFiltered = (
    data: any[],
    pageIndex: number,
    entriesPerPage: number
) => {
    const from = pageIndex * entriesPerPage;
    const to = from + entriesPerPage - 1;

    return data.filter(
        (element) =>
            data.indexOf(element) >= from && data.indexOf(element) <= to
    );
};
