import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

// response => response.data ( extracting data field from our response obj(same as body in fetch!) )
export const carService = {
  getAll: () => axiosService.get(urls.users).then(response => response.data),
  getById: (id) => axiosService.get(`${urls.users}/${id}`).then(response => response.data)
}