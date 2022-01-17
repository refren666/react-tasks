import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const carService = {
  addCar: (car) => axiosService.post(urls.cars, car).then(response => response.data),
  getAll: () => axiosService.get(urls.cars).then(response => response.data),
  getById: (id) => axiosService.get(`${urls.cars}/${id}`).then(response => response.data),
  patchById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(response => response.data),
  deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}