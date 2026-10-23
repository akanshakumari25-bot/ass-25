
import { Routes, Route, Link, useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

function Directory() {
  return (
    <div>
      <h1>User Directory</h1>

      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

function UserProfile() {
  const { id } = useParams();

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Name: {user.name}</h2>
      <p>ID: {user.id}</p>

      <Link to="/">Back to Directory</Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Directory />} />
      <Route path="/users/:id" element={<UserProfile />} />
    </Routes>
  );
}

export default App;



