import React, { useEffect, useState } from "react";
import "./BlogPage.css";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Post } from "./Post/Post";

import { PostsHeader } from "./PostsHeader/PostsHeader";
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, editPost, fetchPosts, selectPostsData } from '../../store/slices/posts';
import { EditForm } from "../../components/EditForm";


const { confirm } = Modal;

export const BlogPage = ({isLikedPosts = false, title}) => {
  const { list: posts, isLoading, error } = useSelector(selectPostsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  const likedPosts = posts.filter((post) => post.liked);

  const handleLikePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index] = { ...updatedPosts[index], liked: !updatedPosts[index].liked};
    dispatch(editPost(updatedPosts[index]));
  };

  const handleDeletePost = (postId) => {
      confirm({
        title: 'Are you sure delete this post?',
        icon: <ExclamationCircleOutlined />,
        content: 'This is irreversible process',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'Cancel',
        onOk() {
          dispatch(deletePost(postId))
        },

      });
  };

  const [selectedPost, setSelectedPost] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  const selectPost = (post) => {
    setSelectedPost(post);
    setShowEditForm(true);
  };

  if (isLoading) return <h1>Getting a data...</h1>;
  if (error) return <h1>{error.message}</h1>;
  

  return (
    <div className="postsWrapper">
      <PostsHeader
        title={title}
        isLikedPosts={isLikedPosts}
        blogPosts={posts}
      />

      <section className="posts">
        {
          ( isLikedPosts ? likedPosts : 
        posts).map((post, pos) => {
          return (
            <Post
              {...post}
              likePost={() => handleLikePost(pos)}
              deletePost={() => handleDeletePost(post.id)}
              selectPost={() => selectPost(post)}
              key={post.id}
            />
          );
        })}
      </section>

      {showEditForm && (
        <EditForm
          selectedPost={selectedPost}
          setShowEditForm={setShowEditForm}
        />
      )}
    </div>
  );
};
