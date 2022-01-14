import {urls} from "../configs/urls";

export const getUserPosts = (userId) => {
  return fetch(urls.posts)
    .then(response => response.json())
}