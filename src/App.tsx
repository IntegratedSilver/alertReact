import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert>Oh snap! You got an error!</Alert>
        <p>
        </p>
      </Alert>
    );
  }
  return (
  <Button onClick={() => setShow(true)}>Show Alert</Button>
);
}
export default App;
