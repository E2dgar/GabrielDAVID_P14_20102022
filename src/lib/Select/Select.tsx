import './index.css';
import { useState } from 'react';
import { showEntries } from '../func/select';

export interface SelectOption {
    value: number;
    text: string;
}

export type SelectType = {
    options: SelectOption[] | null;
    setEntriesPerPage: React.Dispatch<React.SetStateAction<number>>;
    setPageIndex: React.Dispatch<React.SetStateAction<number>>;
    setResults: React.Dispatch<React.SetStateAction<any[][]>>;
    results: any[][];
    currentPageIndex: number;
    resultsLength: number;
};

export const Select = ({
    options,
    setEntriesPerPage,
    setPageIndex,
    setResults,
    results,
    currentPageIndex,
    resultsLength
}: SelectType) => {
    const [selected, setSelected] = useState(options?.[0].value.toString());

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        let firstRowIndex = 0;
        let newPageIndex = 0;
        const entriesNumber = parseInt(e.currentTarget.value);
        const numberOfPages = resultsLength / entriesNumber;

        /**Get the index of firstrow to set new page index that display this entry */
        if (selected) {
            firstRowIndex = currentPageIndex * parseInt(selected) + 1;
        }

        for (let i = 1; i < numberOfPages; i++) {
            if (firstRowIndex > i * entriesNumber) {
                newPageIndex = i - 1;
            }
        }

        setSelected(e.currentTarget.value);
        setResults(
            showEntries(parseInt(e.currentTarget.value), results.flat())
        );
        setPageIndex(newPageIndex);
        console.log('index', newPageIndex);
        setEntriesPerPage(entriesNumber);
    };

    return (
        <label>
            Show
            <select
                className="entries-select"
                value={selected}
                onChange={handleChange}>
                {options?.map((option) => (
                    <option
                        key={`option-${option.value}`}
                        id={`option-${option.value}`}>
                        {option.text}
                    </option>
                ))}
            </select>
            entries
        </label>
    );
};
