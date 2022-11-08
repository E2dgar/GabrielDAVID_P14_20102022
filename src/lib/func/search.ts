export const searchingData = (term: string, data: Object[]) => {
    const searchedTerms = term.split(' ');
    let results = data;

    if (term.split('').shift() === ' ') {
        return data;
    }

    /**
     * Convert values in object into string
     * @param object
     * @returns
     */
    const objectToStringLowerCase = (object: Object) => {
        console.log('str', JSON.stringify(object).toLowerCase());
        return JSON.stringify(object).toLowerCase();
    };

    for (const elt of searchedTerms) {
        results = results.filter((employee) =>
            objectToStringLowerCase(Object.values(employee)).includes(
                elt.toLowerCase()
            )
        );
    }

    return results;
};
