import React, { useEffect, useState } from "react";
import "./BlogPage.css";
import { Post } from "./Post/Post";
import { EditForm } from "./EditForm/EditForm";
import { PostsHeader } from "./PostsHeader/PostsHeader";
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPosts, likePost, selectPostsData, setPosts } from '../../store/slices/posts';

export const BlogPage = ({
  title,
  isLikedPosts = false,
}) => {
  /* const likedPosts = posts.filter((post) => post.liked); */

  const { list: posts, isLoading, error } = useSelector(selectPostsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  const handleLikePost = (index) => {
    dispatch(likePost(posts, index));
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId))
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
        setBlogPosts={setPosts}
        posts={posts}
      />

      <section className="posts">
        {posts.map((post, pos) => {
          return (
            <Post
              {...post}
              likePost={() => handleLikePost(pos)}
              deletePost={() => handleDeletePost(post.id)}
              setBlogPosts={() => selectPost(post)}
              key={post.id}
            />
          );
        })}
      </section>

      {showEditForm && (
        <EditForm
          selectedPost={selectedPost}
          setShowEditForm={setShowEditForm}
          setposts={setPosts}
          posts={posts}
        />
      )}
    </div>
  );
};
