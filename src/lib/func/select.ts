export const showEntries = (number: number, data: object[]) => {
    const pagesTable = [];
    // const numberOfPages = Math.ceil(data.length / number);

    for (let i = 0; i < data.length; i += number) {
        pagesTable.push(data.slice(i, i + number));
    }

    return pagesTable;
};
