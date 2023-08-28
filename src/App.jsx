import "./App.css";
import { puppyList } from "./Data/data";
import { useState } from "react";
import "./color.css"

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <div key={puppy.id}>
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
            >
              {puppy.name}
            </p>
          </div>
        );
      })}
      <h2>{featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}</h2>
    </div>
  );
}

export default App;
