import './index.css';
import { useEffect, useState } from 'react';

export interface SelectOption {
    value: number;
    text: string;
}

export type SelectType = {
    // setEntriesPerPage: React.Dispatch<React.SetStateAction<number>>;
    // setPageIndex: React.Dispatch<React.SetStateAction<number>>;
    // currentPageIndex: number;
    // resultsLength: number;
    onChange: any;
};

const options = [
    { value: 10, text: '10' },
    { value: 25, text: '25' },
    { value: 50, text: '50' },
    { value: 100, text: '100' }
];

export const Select = ({
    // setEntriesPerPage,
    // setPageIndex,
    // currentPageIndex,
    // resultsLength
    onChange
}: SelectType) => {
    // const [selected, setSelected] = useState(options?.[0].value);

    // const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    //     /* Save firstRow index */
    //     const firstRowIndex = currentPageIndex * selected;

    //     const newEntriesPerPage = parseInt(e.currentTarget.value);

    //     /* New index must diplay the old first row*/
    //     const newIndex = Math.floor(firstRowIndex / newEntriesPerPage);

    //     setSelected(newEntriesPerPage);

    //     setPageIndex(newIndex);

    //     setEntriesPerPage(newEntriesPerPage);
    // };

    return (
        <select
            data-testid="select"
            className="entries-select"
            // value={selected}
            onChange={onChange}>
            {options?.map((option) => (
                <option
                    data-testid="select-option"
                    key={`option-${option.value}`}
                    id={`option-${option.value}`}>
                    {option.text}
                </option>
            ))}
        </select>
    );
};
