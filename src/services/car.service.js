import {axiosService} from "./axios.service";
import {urls} from "../config";

export const carService = {
  getAll: () => axiosService.get(urls.cars).then(response => response.data),
  create: (car) => axiosService.post(urls.cars, car).then(response => response.data),
  deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`).then(response => response.data)
}