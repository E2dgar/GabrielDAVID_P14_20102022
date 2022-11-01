type DataT = { [key: string]: any };

export const Row = ({ data }: DataT) => {
    return (
        <tr>
            {Object.keys(data).map((key) => (
                <td key={key}>{data[key]}</td>
            ))}
        </tr>
    );
};
