import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/hello")
      .then((response) => {
        console.log(response);
        return response.json();
      })

      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  const displayMessage = () => {
    alert(message);
  };

  return (
    <>
      <div className="font-sans text-center mt-10">
        <h1>Client Application</h1>
        <p>Message from server: {message}</p>
      </div>
      <Button onClick={displayMessage}>Show Message</Button>
    </>
  );
}

export default App;
