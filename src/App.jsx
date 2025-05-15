import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const haandleuser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = {name, email}
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const newUsers = [...users, data]
      setUsers(newUsers);
      form.reset();
    })

  };

  return (
    <>
      <h1>user management system</h1>
      <p>Numbers Of Users: {users.length}</p>

      {/* user theke information collect */}
      <form onSubmit={haandleuser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <button type="submit">submit</button>
      </form>

      {/*  */}

      {users.map((user) => (
        <p key={user.id}>
          {user.id} : {user.name} : {user.email}{" "}
        </p>
      ))}
    </>
  );
}

export default App;
