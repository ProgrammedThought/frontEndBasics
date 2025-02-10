import { useState } from "react";

// Defining an object 'properties' for the component's argument
interface Props {
  items: string[];
  heading: string;
}

// ListGroup Component
function ListGroup({ items, heading }: Props) {
  const message = items.length === 0 ? <p>No item found</p> : null;

  // function decleration within the function
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  // Hook to keep track of selected index to highlight
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      {items.length === 0 && <p>No items found(returned using &&)</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
