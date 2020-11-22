import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";

//Initialize userstate
const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    avatar: "",
    address: "",
    company: ""
  });

  const { name, username, email, phone, website, avatar, address, company } = user;

  //Eventhandler for change
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Webhook
  useEffect(() => {
    loadUser();
  }, []);

  //Handle submit event, putting back changed localstorage
  const onSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    users[id] = user;
    localStorage.setItem('users', JSON.stringify(users));
    history.push('/');
  };

  //get user from localstorage, store it in state
  const loadUser = () => {
    const result = JSON.parse(localStorage.getItem('users'))
    setUser(result[id]);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <h4>Main Info</h4>
          <div className="form-group">
            <label for="inputName">Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter New Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="inputUserName">User Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter New User name"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="inputEmail">Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter New E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="inputPhone">Phone</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter New Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="inputWebsite">Website</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter New Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="inputAvatar">Avatar</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter New Avatar"
              name="avatar"
              value={avatar}
              onChange={e => onInputChange(e)}
            />
          </div>
          <h4>Address</h4>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputAddress">Street A</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New Address Street A"
                name="address"
                value={address.streetA}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputAddress">Street B</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New Address Street B"
                name="address"
                value={address.streetB}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputAddress">Street C</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New Address Street C"
                name="address"
                value={address.streetC}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputAddress">Street D</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New Address Street D"
                name="address"
                value={address.streetD}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputAddress">City</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New Address City"
                name="address"
                value={address.city}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputAddress">State</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New Address State"
                name="address"
                value={address.state}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputAddress">Country</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New Address Country"
                name="address"
                value={address.country}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputAddress">Zipcode</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New Address Zipcode"
                name="address"
                value={address.zipcode}
                onChange={e => onInputChange(e)}
              />
            </div>
          </div>
          <h4>Company</h4>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCompany">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New Company Name"
                name="company"
                value={company.name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputCompany">Catch Phrase</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New Catch Phrase"
                name="company"
                value={company.catchPhrase}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group col-md-12">
              <label for="inputCompany">BS</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter New BS"
                name="company"
                value={company.bs}
                onChange={e => onInputChange(e)}
              />
            </div>
          </div>
          <button className="btn btn-warning btn-block" onClick={e => onSubmit(e)} button>Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;