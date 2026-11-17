import { useState, useEffect } from "react";

function UserList() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h2 className="status">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="error">Error: {error}</h2>;
  }

  return (
    <div className="container">

      <h1>User Directory</h1>
      <p className="subtitle">API Integration using React useEffect</p>

      <div className="user-grid">

        {users.map((user) => (

          <div className="user-card" key={user.id}>

            <div className="card-header">
              <span className="user-id">ID: {user.id}</span>
              <h2>{user.name}</h2>
              <p>@{user.username}</p>
            </div>

            <div className="card-body">

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Phone:</strong> {user.phone}
              </p>

              <p>
                <strong>Website:</strong> {user.website}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default UserList;
