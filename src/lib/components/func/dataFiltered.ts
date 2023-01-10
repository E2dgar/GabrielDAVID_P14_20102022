export const dataFiltered = (
    data: any[],
    // pageIndex: number,
    entriesPerPage: number,
    paginate: boolean
) => {
    // const from = pageIndex * entriesPerPage;
    // const to = from + entriesPerPage - 1;

    // if (!paginate) return data;

    // return data.filter(
    //     (element) =>
    //         data.indexOf(element) >= from && data.indexOf(element) <= to
    // );
    const pagesTable = [];

    if (!paginate) {
        pagesTable.push(data);
    } else {
        for (let i = 0; i < data.length; i += entriesPerPage) {
            pagesTable.push(data.slice(i, i + entriesPerPage));
        }
    }

    // console.log(pagesTable);

    return pagesTable;
};
