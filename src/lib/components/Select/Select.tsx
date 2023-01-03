import './index.css';
import { useState } from 'react';
import { showEntries } from '../func/select';

export interface SelectOption {
    value: number;
    text: string;
}

export type SelectType = {
    setEntriesPerPage: React.Dispatch<React.SetStateAction<number>>;
    setPageIndex: React.Dispatch<React.SetStateAction<number>>;
    setResults: React.Dispatch<React.SetStateAction<any[][]>>;
    results: any[][];
    currentPageIndex: number;
    resultsLength: number;
};

const options = [
    { value: 10, text: '10' },
    { value: 25, text: '25' },
    { value: 50, text: '50' },
    { value: 100, text: '100' }
];

export const Select = ({
    setEntriesPerPage,
    setPageIndex,
    setResults,
    results,
    currentPageIndex,
    resultsLength
}: SelectType) => {
    const [selected, setSelected] = useState(options?.[0].value);

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        let firstRowIndex = 0;
        let newPageIndex = 0;
        const entriesNumber = parseInt(e.currentTarget.value);
        const numberOfPages = resultsLength / entriesNumber;

        /**Get the index of firstrow to set new page index that display this entry */
        if (selected) {
            firstRowIndex = currentPageIndex * selected + 1;
        }

        for (let i = 1; i < numberOfPages; i++) {
            if (firstRowIndex > i * entriesNumber) {
                newPageIndex = i - 1;
            }
        }

        setSelected(parseInt(e.currentTarget.value));
        setResults(
            showEntries(parseInt(e.currentTarget.value), results.flat(), true)
        );
        setPageIndex(newPageIndex);

        setEntriesPerPage(entriesNumber);
    };

    return (
        <label>
            Show
            <select
                data-testid="select"
                className="entries-select"
                value={selected}
                onChange={handleChange}>
                {options?.map((option) => (
                    <option
                        data-testid="select-option"
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
