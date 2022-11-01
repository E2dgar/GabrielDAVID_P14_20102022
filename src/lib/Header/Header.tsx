type Header = {
  label: string;
}

export const Header = ({label}: Header) => {
  
    return (
           <th>{label}</th>
         
    );
};