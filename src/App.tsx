import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import ListGroup from "./components/ListGroupt";

function App() {
  const [alertVisible, setalertVisibility] = useState(false);
  const items = ["New York", "Nairobi", "Chicago", "Tokyo", "London", "Paris"];
  const handleSelectItem = () => {
    console.log("item");
  };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setalertVisibility(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
      <Button color="danger" onClick={() => setalertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
