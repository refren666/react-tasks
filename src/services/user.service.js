import {axiosPlaceholderService} from "./axios.service";
import {urls} from "../config";

export const userService = {
  getAll: () => axiosPlaceholderService.get(urls.users).then(response => response.data)
}