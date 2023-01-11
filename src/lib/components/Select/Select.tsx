import './index.css';

export interface SelectOption {
    value: number;
    text: string;
}

export type SelectType = {
    // setEntriesPerPage: React.Dispatch<React.SetStateAction<number>>;
    // setPageIndex: React.Dispatch<React.SetStateAction<number>>;
    // entriesPerPage: number;
    // currentPageIndex: number;
    onChange: any;
};

const options = [
    { value: 10, text: '10' },
    { value: 25, text: '25' },
    { value: 50, text: '50' },
    { value: 100, text: '100' }
];

export const Select = ({
    // setPageIndex,
    // currentPageIndex,
    // entriesPerPage,
    onChange
}: // setEntriesPerPage
SelectType) => {
    // const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    //     // /* Save firstRow index */
    //     // const firstRowIndex = currentPageIndex * entriesPerPage;

    //     // const newEntriesPerPage = parseInt(e.currentTarget.value);

    //     // /* New index must diplay the old first row*/
    //     // const newIndex = Math.floor(firstRowIndex / newEntriesPerPage);

    //     // setPageIndex(newIndex);

    //     setEntriesPerPage(parseInt(e.currentTarget.value));
    // };

    return (
        // <select
        //     data-testid="select"
        //     className="entries-select"
        //     onChange={handleChange}>
        //     {options?.map((option) => (
        //         <option
        //             data-testid="select-option"
        //             key={`option-${option.value}`}
        //             id={`option-${option.value}`}>
        //             {option.text}
        //         </option>
        //     ))}
        // </select>
        <select
            data-testid="select"
            className="entries-select"
            onChange={onChange}>
            <option data-testid="select-option">10</option>
            <option data-testid="select-option">25</option>
            <option data-testid="select-option">50</option>
            <option data-testid="select-option">100</option>
        </select>
    );
};
