export const searchingData = (term: string, data: Object[]) => {
    if (term === '' || term.split('').shift() === ' ') {
        return data;
    }

    const objectToStringLowerCase = (object: Object) => {
        return JSON.stringify(object).toLowerCase();
    };

    const termToLowerCase = term.toLowerCase();

    return data.filter((employee) =>
        objectToStringLowerCase(Object.values(employee)).includes(
            termToLowerCase
        )
    );
};
