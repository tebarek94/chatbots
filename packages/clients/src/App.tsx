import { useEffect, useState } from "react";
import "./App.css";

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

  return (
    <>
      <div className="font-sans text-center mt-10">
        <h1>Client Application</h1>
        <p>Message from server: {message}</p>
      </div>
    </>
  );
}

export default App;
