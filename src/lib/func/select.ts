export const showEntries = (number: number, data: any[], paginate: boolean) => {
    const pagesTable = [];

    if (!paginate) {
        pagesTable.push(data);
    } else {
        for (let i = 0; i < data.length; i += number) {
            pagesTable.push(data.slice(i, i + number));
        }
    }

    return pagesTable;
};
