export const searchingData = (term: string, data: any[]) => {
    const columns = Object.keys(data[0]);

    return data.filter((row) =>
        columns.some(
            (column) =>
                row[column].toLowerCase().indexOf(term.toLowerCase()) > -1
        )
    );
};
