import { Button } from '../Button';

export type PaginationT = {
    results: any[][];
    navigate: any;
};

export const Pagination = ({ results, navigate }: PaginationT) => {
    return (
        <div>
            {results.map((value, index) => (
                <Button key={index} index={index} navigate={navigate} />
            ))}
        </div>
    );
};
