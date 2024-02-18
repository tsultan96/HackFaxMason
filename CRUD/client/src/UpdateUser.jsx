import React from "react";

function UpdateUser() {
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">First Name</label>

            <input
              type="first_name"
              placeholder="First Name Please"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Last Name</label>

            <input
              type="last_name"
              placeholder="Last Name Please"
              className="form-control"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Email</label>

            <input
              type="email"
              placeholder="Email Please"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Semester</label>

            <input
              type="semester"
              placeholder="Semester Please"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Campus</label>

            <input
              type="campus"
              placeholder="Campus Please"
              className="form-control"
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}
export default UpdateUser;
