import './index.css';

type ButtonT = {
    index: number;
    navigate: any;
    className: string;
};

export const Button = ({ index, navigate, className }: ButtonT) => {
    return (
        <button
            className={className}
            onClick={navigate}
            data-index={index}
            data-testid="pagination-button">
            {index + 1}
        </button>
    );
};
