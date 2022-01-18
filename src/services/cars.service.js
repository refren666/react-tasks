import axiosService from "./axios.service";

import {urls} from "../config/urls";


export const carsService = {
  getAll: () => axiosService.get(urls.cars).then(response => response.data),
  addNew: (car) => axiosService.post(urls.cars, car).then(response => response.data),
  updateById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(response => response.data),
  deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}