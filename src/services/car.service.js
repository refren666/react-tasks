import {axiosCarService} from "./axios.service";
import {urls} from "../config";

export const carService = {
  getAll: () => axiosCarService.get(urls.cars).then(response => response.data),
  create: (car) => axiosCarService.post(urls.cars, car).then(response => response.data),
  deleteById: (id) => axiosCarService.delete(`${urls.cars}/${id}`).then(response => response.data),
  updateById: (id, car) => axiosCarService.patch(`${urls.cars}/${id}`, car).then(response => response.data)
}