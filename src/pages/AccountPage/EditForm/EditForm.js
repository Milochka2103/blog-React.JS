import React, { useState } from "react";
import "./EditForm.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { editPost } from "../../../store/slices/users";

export const EditForm = ({ setShowEditForm, selectedUser }) => {
  const [userPhone, setUserPhone] = useState(selectedUser?.phone);
  const [userEmail, setUserEmail] = useState(selectedUser?.email);
  const [userFullname, setUserFullname] = useState(selectedUser?.fullname);

  const handleUserPhoneChange = (e) => {
    setUserPhone(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleUseFullnameChange = (e) => {
    setUserFullname(e.target.value);
  };

  const dispatch = useDispatch();

  const handleEditUser = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...selectedUser,
      phone: userPhone,
      email: userEmail,
      fullname: userFullname,
    };

    dispatch(editUser(updatedUser))
    .finally(() => setShowEditForm(false));
  };

  return (
    <>
      <form className="editPostForm" onSubmit={handleEditUser}>
        <button className="hideBtn" onClick={() => setShowEditForm(false)}>
          <CancelIcon />
        </button>
        <h2>Edit a account data</h2>

        <div>
          <input
            className="editFormInput"
            type="text"
            name="userPhone"
            placeholder="your phone"
            value={userPhone}
            onChange={handleUserPhoneChange}
            required
          />
        </div>
        <div>
          <textarea
            className="editFormInput"
            name="userEmail"
            placeholder="your email"
            value={userEmail}
            onChange={handleUserEmailChange}
            rows={8}
            required
          />
          </div>
          <div>
          <textarea
            className="editFormInput"
            name="userFullname"
            placeholder="your full name"
            value={userFullname}
            onChange={handleUseFullnameChange}
            rows={8}
            required
          />
        </div>

        <div>
          <button className="brownBtn" type="submit">
            Save
          </button>
        </div>
      </form>

      <div onClick={() => setShowEditForm(false)} className="overlay"></div>
    </>
  );
};
