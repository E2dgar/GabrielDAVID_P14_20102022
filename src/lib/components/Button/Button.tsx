import './index.css';

type ButtonT = {
    index: number;
    navigate: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
};

export const Button = ({ index, navigate, className }: ButtonT) => {
    return (
        <button
            className={className}
            onClick={navigate}
            data-index={index}
            data-testid="pagination-button"
            tabIndex={0}
            aria-controls="employee-table">
            {index + 1}
        </button>
    );
};
