export const showEntries = (
    entriesPerPage: number,
    data: any[],
    paginate: boolean,
    pageIndex?: number
) => {
    const pagesTable = [];

    if (!paginate) {
        pagesTable.push(data);
    } else {
        for (let i = 0; i < data.length; i += entriesPerPage) {
            pagesTable.push(data.slice(i, i + entriesPerPage));
        }
    }

    return pagesTable;
};
