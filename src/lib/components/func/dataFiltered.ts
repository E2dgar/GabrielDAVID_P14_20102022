export const dataFiltered = (
    data: any[],
    pageIndex: number,
    entriesPerPage: number,
    paginate: boolean
) => {
    const from = pageIndex * entriesPerPage;
    const to = from + entriesPerPage - 1;

    if (!paginate) return data;

    return data.filter(
        (element) =>
            data.indexOf(element) >= from && data.indexOf(element) <= to
    );
};
