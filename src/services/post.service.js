import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

// response => response.data ( extracting data field from our response obj(same as body in fetch!) )
export const postService = {
  getAll: () => axiosService.get(urls.posts).then(response => response.data),
  getById: (id) => axiosService.get(`${urls.posts}/${id}`).then(response => response.data)
}