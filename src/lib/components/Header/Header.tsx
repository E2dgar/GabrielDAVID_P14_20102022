import { useRef } from 'react';

type HeadersType = {
    headers: any[];
    setSortBy: React.Dispatch<React.SetStateAction<any>>;
};
export const Header = ({ headers, setSortBy }: HeadersType) => {
    const refs = useRef(new Array(headers.length));

    const handleClick = (i: number) => {
        const header = refs.current[i];
        const isSorted = header.getAttribute('data-sort');

        if (isSorted) {
            setSortBy({
                header: header.getAttribute('data-column'),
                order: 'reverse'
            });
            header.setAttribute(
                'data-sort',
                isSorted === 'ASC' ? 'DESC' : 'ASC'
            );
        } else {
            setSortBy({
                header: header.getAttribute('data-column'),
                order: 'ASC'
            });
            header.setAttribute('data-sort', 'ASC');
        }

        /*Remove data-sort attribute on others headers*/
        for (let j = 0; j < headers.length; j++) {
            if (j !== i) {
                refs.current[j].removeAttribute('data-sort');
            }
        }
    };

    return (
        <thead data-testid="datatable-headers">
            <tr>
                {headers.map((header: any, i: number) => (
                    <th
                        key={`header-${i}`}
                        ref={(elt) => (refs.current[i] = elt)}
                        data-column={header.key}
                        onClick={() => handleClick(i)}
                        data-testid="header">
                        {header.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
