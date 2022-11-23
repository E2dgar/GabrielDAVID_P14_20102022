import './index.css';
import { useEffect, useState } from 'react';

export interface SelectOption {
    value: number;
    text: string;
}

export type SelectType = {
    options: SelectOption[] | null;
    setEntriesPerPage: React.Dispatch<React.SetStateAction<number>>;
    setPageIndex: React.Dispatch<React.SetStateAction<number>>;
    currentPageIndex: number;
    resultsLength: number;
};

export const Select = ({
    options,
    setEntriesPerPage,
    setPageIndex,
    currentPageIndex,
    resultsLength
}: SelectType) => {
    const [selected, setSelected] = useState(options?.[0].value.toString());
    const [firstRowIndex, setFirstRowIndex] = useState<number>(0);

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        let firstRowIndex = 0;
        let newPageIndex = 0;

        /**Get the index of firstrow to set new page index that display this entry */
        if (selected) {
            firstRowIndex = currentPageIndex * parseInt(selected) + 1;
        }

        for (
            let i = 0;
            i < resultsLength / parseInt(e.currentTarget.value);
            i++
        ) {
            if (firstRowIndex > i) {
                newPageIndex = i;
            }
        }

        setPageIndex(newPageIndex);
        setSelected(e.currentTarget.value);
        setEntriesPerPage(parseInt(e.currentTarget.value));
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
