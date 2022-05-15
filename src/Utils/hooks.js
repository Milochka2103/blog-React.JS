import { useState, useEffect } from "react";

export const useFetchPosts = (url) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => 
        response.json()
      )
      .then((postsFromServer) => {
        setBlogPosts(postsFromServer);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      })
  }, [url])

  return { blogPosts, setBlogPosts, isLoading, error }
};


export const useGetSinglePost = (url, postId) => {
  const [blogPost, setBlogPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url + postId)
      .then((response) => 
        response.json()
      )
      .then((postFromServer) => {
        setBlogPost(postFromServer);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      })
  }, [url, postId])

  return { blogPost, setBlogPost, isLoading, error }
}

export const useFetchUsers = (url) => {
  const [accountUsers, setAccountUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => 
        response.json()
      )
      .then((usersFromServer) => {
        setAccountUsers(usersFromServer);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      })
  }, [url])

  return { accountUsers, setAccountUsers, isLoading, error }
};

export const useGetSingleUser = (url, userId) => {
  const [accountUser, setAccountUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url + userId)
      .then((response) => 
        response.json()
      )
      .then((userFromServer) => {
        setAccountUser(userFromServer);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      })
  }, [url, userId])

  return { accountUser, setAccountUser, isLoading, error }
}