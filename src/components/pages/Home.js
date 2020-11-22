import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  //Getting all users from localstorage 
  const loadUsers = () => {
    const users = JSON.parse(localStorage.getItem('users'))
    setUsers(users);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr>
                  <th class="align-middle" scope="row">{index + 1}</th>
                  <td class="align-middle">
                    <Avatar src={user.avatar} size="100" round={true} alt="avatar" />
                  </td>
                  <td class="align-middle">{user.name}</td>
                  <td class="align-middle">{user.phone}</td>
                  <td class="align-middle">{user.email}</td>
                  <td class="align-middle">
                    <Link class="btn btn-outline-primary" to={`/users/edit/${user.id}`}>Edit</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;