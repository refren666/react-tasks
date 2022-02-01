import {axiosPlaceholderService} from "./axios.service";
import {urls} from "../config";

export const commentService = {
  getAll: () => axiosPlaceholderService.get(urls.comments).then(response => response.data)
}