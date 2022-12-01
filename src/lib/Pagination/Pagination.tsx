import { Button } from '../Button';

export type PaginationT = {
    results: any[][];
    navigate: any;
};

export const Pagination = ({ results, navigate }: PaginationT) => {
    return (
        <div data-testid="pagination">
            {results.map((_, index) => (
                <Button key={index} index={index} navigate={navigate} />
            ))}
        </div>
    );
};
