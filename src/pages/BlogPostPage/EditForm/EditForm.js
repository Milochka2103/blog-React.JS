import React, { useState } from "react";
import "./EditForm.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { editPost } from "../../../store/slices/posts";
import { useDispatch } from "react-redux";

export const EditForm = ({
  setShowEditForm,
  setBlogPost,
  blogPost,
  setBlogPosts
}) => {
  const [postTitle, setPostTitle] = useState(blogPost?.title);
  const [postDesc, setPostDesc] = useState(blogPost?.description);

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handlePostDescChange = (e) => {
    setPostDesc(e.target.value);
  };

  const dispatch = useDispatch();

  const handleEditPost = (e) => {
    e.preventDefault();

    const updatedPost = {
      ...blogPost,
      title: postTitle,
      description: postDesc,
    };

    dispatch(editPost(updatedPost))
      .finally(() => setShowEditForm(false))
  };

  return (
    <>
      <form className="editPostForm" onSubmit={handleEditPost}>
        <button className="hideBtn" onClick={() => setShowEditForm(false)}>
          <CancelIcon />
        </button>
        <h2>Edit a post</h2>

        <div>
          <input
            className="editFormInput"
            type="text"
            name="postTitle"
            placeholder="Заголовок поста"
            value={postTitle}
            onChange={handlePostTitleChange}
            required
          />
        </div>
        <div>
          <textarea
            className="editFormInput"
            name="postDescription"
            placeholder="Описание поста"
            value={postDesc}
            onChange={handlePostDescChange}
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
