/* import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { createNewUser } from "../../store/slices/users";


export const Registration = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userFullName, setUserFullName] = useState('');
  const [userAdress, setUserAdress] = useState('');
  const [userPassword, setUserPassword] = useState('');

  var bcrypt = require('bcryptjs');

  const salt = bcrypt.genSaltSync(10);

  const passwordToSave = bcrypt.hashSync(userPassword, salt)
  
  const history = useHistory();

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value)
  }

  const handleUserPhoneChange = (e) => {
    setUserPhone(e.target.value)
  }

  const handleUserFullNameChange = (e) => {
    setUserFullName(e.target.value)
  };

  const handleUserAdressChange = (e) => {
    setUserAdress(e.target.value)
  }

  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value)
  }

  const dispatch = useDispatch();

  const handleCreateUser = (e) => {
    e.preventDefault();

    const newUser = {
      email: userEmail,
      phone: userPhone,
      fullname: userFullName,
      adress: userAdress,
      password: passwordToSave
    }

    dispatch(createNewUser(newUser));
    history.push("/login")
  }

  return (
    <form action='/cgi-bin/register.pl' onSubmit={handleCreateUser} className="LoginForm">
      <h1>Registration</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your email"
          name="login"
          value={userEmail}
          onChange={handleUserEmailChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your phone"
          name="phone"
          value={userPhone}
          onChange={handleUserPhoneChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your full name"
          name="fullName"
          value={userFullName}
          onChange={handleUserFullNameChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your adress"
          name="adress"
          value={userAdress}
          onChange={handleUserAdressChange}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={userPassword}
          onChange={handleUserPasswordChange}
          required
        />
      </div>
      <div>
        <button type="submit">Registration</button>
      </div>
      <p>Do you have account? <Link to='/login'>Login</Link></p>
    </form>
  );
} */
