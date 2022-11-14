type ButtonT = {
    index: number;
    navigate: any;
};

export const Button = ({ index, navigate }: ButtonT) => {
    return (
        <button onClick={navigate} data-index={index}>
            {index + 1}
        </button>
    );
};
