import { showEntries } from './select';

export const searchingData: any = (
    term: string,
    data: object[],
    entries: number
) => {
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
        return JSON.stringify(object).toLowerCase();
    };

    for (const elt of searchedTerms) {
        results = results.filter((employee) =>
            objectToStringLowerCase(Object.values(employee)).includes(
                elt.toLowerCase()
            )
        );
    }

    // results = showEntries(entries, results);

    return results;
};
