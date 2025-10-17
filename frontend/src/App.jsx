import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setjokes] = useState([]);

  // use effect gets a callback and dependency array
  useEffect(() => {
    //Access to XMLHttpRequest at 'http://localhost:4000/jokes' from
    //  origin 'http://localhost:5173'
    //  has been blocked by CORS policy: No
    // 'Access-Control-Allow-Origin' header is present
    //  on the requested resource.
    axios
      .get("/api/jokes")
      .then((res) => {
        setjokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>Chai and Fullstack</h1>
      <p>JOKES for you: {jokes.length}</p>
      // if we use the curly bracket we need to use return keyword , but here we
      have // another solution use parenthsis
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.question}</h3>
          <p>{joke.answer}</p>
        </div>
      ))}
    </>
  );
}

export default App;
