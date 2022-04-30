import React, { useState } from "react";
import "./AddForm.css";
import CancelIcon from '@mui/icons-material/Cancel';
import { POSTS_URL } from "../../../../Utils/constants";

export const AddForm = ({setShowAddForm, blogPosts, setBlogPosts}) => {

  const [postTitle, setPostTitle] = useState('');
  const [postDesc, setPostDesc] = useState('');

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value)
  }

  const handlePostDescChange = (e) => {
    setPostDesc(e.target.value)
  }

  const createPost = (e) => {
    e.preventDefault();

    const newPost = {
      title: postTitle,
      description: postDesc,
      liked: false,
      image: blogPosts[0].image
    }

    fetch(POSTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(newPostFromServer => {
      setBlogPosts([...blogPosts, newPostFromServer]);
      setShowAddForm(false);
    })
    .catch(error => console.log(error))
  }


  return (
    <>
    <form className="addPostForm" onSubmit={createPost}>
      <button className="hideBtn" /* onClick={handleAddFormHide} */>
        <CancelIcon />
      </button>
      <h2>Create a post</h2>

      <div>
        <input
          className="addFormInput"
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
          className="addFormInput"
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
          Добавить пост
        </button>
      </div>
    </form>
    <div onClick={() => setShowAddForm(false)} className='overlay'></div>
    </>
  );
};
