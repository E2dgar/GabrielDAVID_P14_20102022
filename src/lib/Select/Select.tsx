import './index.css';
import { useState } from 'react';

export interface SelectOption {
    value: number;
    text: string;
}

export type SelectType = {
    options: SelectOption[] | null;
    setEntriesPerPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Select = ({ options, setEntriesPerPage }: SelectType) => {
    const [selected, setSelected] = useState(options?.[0].value.toString());

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
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