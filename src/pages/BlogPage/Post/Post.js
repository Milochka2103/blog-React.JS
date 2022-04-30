import React from 'react';
import './Post.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import imagePlaceholder from '../../../assets/images/file-not-found.jpg';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export const Post = ({
  id,
  title,
  description,
  liked = false,
  image = imagePlaceholder,
  likePost,
  deletePost,
  selectPost
}) => {

  const customFilling = liked ? 'crimson' : 'black';

  const finalDescription = (
    <p>
      {description.length > 70 ? (
        <>
          {description.slice(0, 101)}...
          <Link to={`/blog/${id}`}>Read more</Link>
        </>
      ) : (
        description
      )}
    </p>
  )

  return (
    <div className='post'>
      <img src={image} alt='post' />
      <h2>{title}</h2>
      {finalDescription}
      <div className='actions'>
        <button onClick={likePost} className='likeBtn'>
          <FavoriteIcon style={{ fill: customFilling }} />
        </button>
        <button onClick={deletePost} className='deleteBtn'>
          <DeleteIcon />
        </button>
        <button onClick={selectPost} className='editBtn'>
          <EditIcon />
        </button>
      </div>
    </div>
  );
};
