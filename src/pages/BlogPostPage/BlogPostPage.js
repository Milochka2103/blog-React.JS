import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory, useParams } from "react-router-dom";
import { useGetSinglePost } from "../../Utils/hooks";
import { POSTS_URL } from "../../Utils/constants";
import { useState } from "react";
import { EditForm } from "./EditForm/EditForm";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../../store/slices/posts";

export const BlogPostPage = ({ setBlogPosts }) => {
  const { postId } = useParams();

  const history = useHistory();

  const dispatch = useDispatch();

  const { blogPost, setBlogPost, isLoading, error } = useGetSinglePost(
    POSTS_URL,
    postId
  );

  const [showEditForm, setShowEditForm] = useState(false);

  const { title, description, image, liked } = blogPost;

  if (isLoading) return <h1>Getting a data...</h1>;
  if (error) return <h1>{error.message}</h1>;

  const handleLikePost = () => {
    const updatedPost = { ...blogPost, liked: !blogPost.liked };
    dispatch(editPost(updatedPost)).then(() => {
      setBlogPost(updatedPost);
    });
  };

  const handleDeletePost = () => {
    const isDelete = window.confirm("Удалить пост?");

    if (isDelete) {
      dispatch(deletePost(postId)).then(() => {
        history.goBack();
      });
    }
  };

  const handleEditFormShow = () => {
    setShowEditForm(true);
  };

  const customFilling = liked ? "crimson" : "black";

  return (
    <div className="post">
      <img src={image} alt="post" />
      <h2>{title}</h2>
      {description}
      <div className="actions">
        <button onClick={handleLikePost} className="likeBtn">
          <FavoriteIcon style={{ fill: customFilling }} />
        </button>
        <button onClick={handleDeletePost} className="deleteBtn">
          <DeleteIcon />
        </button>
        <button onClick={handleEditFormShow} className="editBtn">
          <EditIcon />
        </button>
      </div>

      {showEditForm && (
        <EditForm
          setShowEditForm={setShowEditForm}
          setBlogPost={setBlogPost}
          blogPost={blogPost}
          setBlogPosts={setBlogPosts}
        />
      )}
    </div>
  );
};
