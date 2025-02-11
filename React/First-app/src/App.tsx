import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/button";

function App() {
  let items = ["New York", "San Fransisco", "Tokoyo", "London", "Paris"];

  const handleSelectItem = (item: string, index: number) => {
    console.log(item);
    setSelectedIndex(index);
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <Alert>Hello World</Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button
        onClick={() => {
          console.log("Click");
        }}
        colour="danger"
      >
        {selectedIndex === -1 ? "Nothing selected" : items[selectedIndex]}
      </Button>
    </div>
  );
}

export default App;
