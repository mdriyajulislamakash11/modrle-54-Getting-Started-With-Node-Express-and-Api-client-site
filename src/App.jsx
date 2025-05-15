import { use, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([])


  useEffect(()=> {
    fetch("http://localhost:5000/users")
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])


  return (
    <>
      <h1>user management system</h1>
      <p>Numbers Of Users: {user.length}</p>
    </>
  );
}

export default App;
