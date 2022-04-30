import postImage from "../assets/images/cat-1.jpg";

export const POSTS = [
  {
    id: 1,
    title: "Post 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore itaque debitis quae pariatur necessitatibus placeat nemo. Neque cupiditate nemo possimus tenetur excepturi architecto a iste non, et aliquam soluta!",
    liked: false,
    image: postImage,
  },
  {
    id: 2,
    title: "Post 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore itaque debitis quae pariatur necessitatibus placeat nemo. Neque cupiditate nemo possimus tenetur excepturi architecto a iste non, et aliquam soluta!",
    liked: false,
    image: postImage,
  },
  {
    id: 3,
    title: "Post 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore itaque debitis quae pariatur necessitatibus placeat nemo. Neque cupiditate nemo possimus tenetur excepturi architecto a iste non, et aliquam soluta!",
    liked: false,
    image: postImage,
  },
  {
    id: 4,
    title: "Post 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore itaque debitis quae pariatur necessitatibus placeat nemo. Neque cupiditate nemo possimus tenetur excepturi architecto a iste non, et aliquam soluta!",
    liked: false,
  },
];

export const POSTS_URL = 'https://625bd1c050128c570207cce6.mockapi.io/articles/';

export const APP_ROUTES = [
  '/',
  '/blog',
  '/favourite',
  '/login',
]