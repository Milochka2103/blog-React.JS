import React, { useState } from "react";
import "./EditForm.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { POSTS_URL } from "../../../Utils/constants";

export const EditForm = ({
  setShowEditForm,
  selectedPost,
  setBlogPosts,
  blogPosts,
}) => {
  const [postTitle, setPostTitle] = useState(selectedPost?.title);
  const [postDesc, setPostDesc] = useState(selectedPost?.description);

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handlePostDescChange = (e) => {
    setPostDesc(e.target.value);
  };

  const editPost = (e) => {
    e.preventDefault();

    const updatedPost = {
      ...selectedPost,
      title: postTitle,
      description: postDesc,
    };

    fetch(POSTS_URL + selectedPost.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then(updatedPostFromServer => {

        const updatedPosts = blogPosts.map((post) => {
          if (post.id === updatedPostFromServer.id) return updatedPostFromServer;
          return post;
        });
        setBlogPosts(updatedPosts);
        setShowEditForm(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form className="editPostForm" onSubmit={editPost}>
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
