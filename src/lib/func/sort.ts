type ArrayType = {
    [key: string]: any;
};

export const sort = (header: HTMLTableCellElement, data: object[]) => {
    let sortedArray: ArrayType[] = [...data];

    const sortType = header.getAttribute('data-sort');
    const sortBy = header.getAttribute('data-column');

    if (sortBy) {
        switch (sortType) {
            case 'DESC':
                sortedArray.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
                break;
            case 'ASC':
                sortedArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
                break;
            default:
                sortedArray = data;
        }
    }

    return sortedArray;
};

export const sortType = (header: HTMLTableCellElement) => {
    switch (header.getAttribute('data-sort')) {
        case 'none':
            header.setAttribute('data-sort', 'ASC');
            break;
        case 'ASC':
            header.setAttribute('data-sort', 'DESC');
            break;
        case 'DESC':
            header.setAttribute('data-sort', 'none');
            break;
        default:
            header.setAttribute('data-sort', 'none');
    }

    return header;
};
