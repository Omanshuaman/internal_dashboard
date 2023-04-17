import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateTable = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [uname, usetName] = useState([]);
  const [uemail, usetEmail] = useState([]);
  const [editId, setEditID] = useState(-1);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = data.length + 1;
    axios
      .post("http://localhost:3000/users", { id: id, name: name, email: email })
      .then((res) => {
        window.location.reload(true);
      })
      .catch((er) => console.log(er));
  };
  const handleEdit = (id) => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        usetName(res.data.name);
        usetEmail(res.data.email);
      })
      .catch((er) => console.log(er));
    setEditID(id);
  };
  const handleUpdate = () => {
    axios
      .put("http://localhost:3000/users/" + editId, {
        id: editId,
        name: uname,
        email: uemail,
      })
      .then((res) => {
        console.log(res);
        window.location.reload(true);
        setEditID(-1);
      })
      .catch((er) => console.log(er));
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then((res) => {
        window.location.reload(true);
      })
      .catch((er) => console.log(er));
  };
  return (
    <div>
      <div style={{ overflowX: "auto", maxWidth: "100%" }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) =>
              user.id === editId ? (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>
                    <input
                      type="text"
                      value={uname}
                      onChange={(e) => usetName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={uemail}
                      onChange={(e) => usetEmail(e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdate}>Update</button>
                  </td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleEdit(user.id)}>edit</button>
                    <button onClick={() => handleDelete(user.id)}>
                      delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateTable;
