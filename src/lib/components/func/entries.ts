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

    console.log(from + ' à ' + to);
    console.log(
        'new res',
        dataFiltered.filter(
            (element) =>
                dataFiltered.indexOf(element) >= from &&
                dataFiltered.indexOf(element) <= to
        )
    );

    return dataFiltered.filter(
        (element) =>
            dataFiltered.indexOf(element) >= from &&
            dataFiltered.indexOf(element) <= to
    );
};
