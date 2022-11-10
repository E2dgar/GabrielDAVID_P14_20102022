type ArrayType = {
    [key: string]: any;
};

export const sort = (header: string, data: object[]) => {
    let sortedArray: ArrayType[] = data;

    if (header) {
        sortedArray.sort((a, b) => a[header].localeCompare(b[header]));
    }

    return sortedArray;
};
