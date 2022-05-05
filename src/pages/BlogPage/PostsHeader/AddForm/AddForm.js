import React, { useState } from "react";
import "./AddForm.css";
import CancelIcon from '@mui/icons-material/Cancel';
import { createNewPost } from "../../../../store/slices/posts";
import { useDispatch } from "react-redux";

export const AddForm = ({setShowAddForm, blogPosts }) => {

  const [postTitle, setPostTitle] = useState('');
  const [postDesc, setPostDesc] = useState('');

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value)
  }

  const handlePostDescChange = (e) => {
    setPostDesc(e.target.value)
  }

  const dispatch = useDispatch();

  const handleCreatePost = (e) => {
    e.preventDefault();

    const newPost = {
      title: postTitle,
      description: postDesc,
      liked: false,
      image: blogPosts[0].image
    }

    dispatch(createNewPost(newPost))
    .finally(() => setShowAddForm(false));
  }


  return (
    <>
    <form className="addPostForm" onSubmit={handleCreatePost}>
      <button className="hideBtn" onClick={ () => setShowAddForm(false)} >
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
