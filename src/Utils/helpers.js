export const setPostsToLocalStorage = (updatedPosts) => {
  localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
};

export const setUsersToLocalStorage = (updatedUsers) => {
  localStorage.setItem("accountUsers", JSON.stringify(updatedUsers));
};