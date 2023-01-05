import { Button } from '../Button';
import './index.css';

export type PaginationT = {
    results: any[];
    navigate: any;
    currentIndex: number;
};

export const Pagination = ({
    results,
    navigate,
    currentIndex
}: PaginationT) => {
    const isButtonVisible = (index: number) => {
        return (
            index === 0 ||
            index === results.length - 1 ||
            (index > currentIndex - 3 && index < currentIndex + 3)
        );
    };
    return (
        <div data-testid="pagination">
            <button
                className="next-prev"
                disabled={currentIndex === 0}
                data-index={currentIndex - 1}
                onClick={navigate}>
                Previous
            </button>
            {results.map((__, index) =>
                isButtonVisible(index) ? (
                    <Button
                        className={`pagination-button ${
                            currentIndex === index ? 'active' : ''
                        }`}
                        key={index}
                        index={index}
                        navigate={navigate}
                    />
                ) : isButtonVisible(index - 1) ? (
                    '...'
                ) : null
            )}
            <button
                onClick={navigate}
                className="next-prev"
                disabled={currentIndex === results.length - 1}
                data-index={currentIndex + 1}>
                Next
            </button>
        </div>
    );
};
