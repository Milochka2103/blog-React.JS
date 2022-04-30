import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory, useParams } from "react-router-dom";
import { useGetSinglePost } from "../../Utils/hooks";
import { POSTS_URL } from "../../Utils/constants";
import { useState } from "react";
import { EditForm } from "./EditForm/EditForm";

export const BlogPostPage = ({ setBlogPosts}) => {
  const { postId } = useParams();

  const history = useHistory();

  const { blogPost, setBlogPost, isLoading, error } = useGetSinglePost(
    POSTS_URL,
    postId
  );

  const [showEditForm, setShowEditForm] = useState(false);

  const { title, description, image, liked } = blogPost;

  if (isLoading) return <h1>Getting a data...</h1>;
  if (error) return <h1>{error.message}</h1>;

  const likePost = () => {
    const updatedPost = { ...blogPost, liked: !blogPost.liked };

    fetch(POSTS_URL + postId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((updatedPostFromServer) => {
        setBlogPost(updatedPostFromServer);
        setBlogPosts((blogPosts) => {
          return blogPosts.map(post => {
            if (post.id === updatedPostFromServer.id) {
              return updatedPostFromServer
            }

            return post
          })
        })
      })
      .catch((error) => console.log(error));
  };

  const deletePost = () => {
    const isDelete = window.confirm("Удалить пост?");

    if (isDelete) {
      fetch(POSTS_URL + postId, { method: "DELETE" })
        .then(() => {
          setBlogPosts((blogPosts) => blogPosts.filter((post) => post.id !== postId))
          history.goBack()
        })
        .catch((error) => console.log(error));
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
        <button onClick={likePost} className="likeBtn">
          <FavoriteIcon style={{ fill: customFilling }} />
        </button>
        <button onClick={deletePost} className="deleteBtn">
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
