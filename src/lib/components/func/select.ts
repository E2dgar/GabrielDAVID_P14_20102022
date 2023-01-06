export const showEntries = (entriesPerPage: number, data: any[]) => {
    const pagesTable = [];

    for (let i = 0; i < data.length; i += entriesPerPage) {
        pagesTable.push(data.slice(i, i + entriesPerPage));
    }

    return pagesTable;
};
