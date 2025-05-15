import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([])


  useEffect(()=> {
    fetch("http://localhost:5000/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])


  return (
    <>
      <h1>user management system</h1>
      <p>Numbers Of Users: {users.length}</p>


      {
        users.map((user) => <p key={user.id}>{user.id} {user.name} {user.email} </p>  )
      }
    </>
  );
}

export default App;
