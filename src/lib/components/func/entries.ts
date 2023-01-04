/**
 * Set results depending on entries per page, data & page index
 * @param entriesPerPage
 * @param data
 * @param pageIndex
 * @returns
 */
export const entries = (
    entriesPerPage: number,
    data: any[],
    pageIndex: number
) => {
    const dataFiltered = [...data];
    const from = pageIndex * entriesPerPage;
    const to = from + entriesPerPage - 1;

    return dataFiltered.filter(
        (element) =>
            dataFiltered.indexOf(element) >= from &&
            dataFiltered.indexOf(element) <= to
    );
};
