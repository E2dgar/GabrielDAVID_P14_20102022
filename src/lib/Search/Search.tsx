export const Search = ({ onChange }: any) => {
    return (
        <label>
            Search: <input type="search" onChange={onChange} />
        </label>
    );
};
