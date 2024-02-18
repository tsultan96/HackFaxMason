import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([
    {
      first_name: "Tammana",
      last_name: "Sultana",
      email: "email@email.com",
      semester: "Spring 2025",
      campus: "Fairfax",
    },
  ]);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add+
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Semester</th>
              <th>Campus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.Email}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.semester}</td>
                  <td>{user.campus}</td>
                  <td>
                    <Link to="/update" className="btn btn-success">
                      Update
                    </Link>

                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Users;
