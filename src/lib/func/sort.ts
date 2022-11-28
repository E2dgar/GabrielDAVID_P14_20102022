type ArrayType = {
    [key: string]: any;
};

export const sort = (data: object[], sortBy: string) => {
    let sortedArray: ArrayType[] = [...data];

    return sortedArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
};
