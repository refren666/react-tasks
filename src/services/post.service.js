import {axiosPlaceholderService} from "./axios.service";
import {urls} from "../config";

export const postService = {
  getAll: () => axiosPlaceholderService.get(urls.posts).then(response => response.data)
}