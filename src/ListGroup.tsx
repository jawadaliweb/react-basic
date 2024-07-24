import { useState } from "react";

interface Props {
  cities: string[];
  heading: string;
  onSelectItem: (city: string) => void;
}

function ListGroup({ cities, heading, onSelectItem }: Props) {
  const [setIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={index}
            className={
              index === setIndex ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
