type ArrayType = {
    [key: string]: any;
};

export const sort = (data: any[], sortBy: any) => {
    let dataToSort: ArrayType[] = [...data.flat()];
    // console.log('in sort', data);
    if (sortBy.order === 'ASC') {
        return dataToSort.sort((a, b) =>
            a[sortBy.header].localeCompare(b[sortBy.header])
        );
    }

    return dataToSort.reverse();
};
