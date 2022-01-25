import axiosService from "./api.service";
import {urls} from "../config/urls";

export const imageService = {
  getCat: () => axiosService.get(urls.cat).then(response => response.data),
  getCar: () => axiosService.get(urls.car).then(response => response.data),
  getDog: () => axiosService.get(urls.dog).then(response => response.data),
  getGirl: () => axiosService.get(urls.girl).then(response => response.data),
  getNotebook: () => axiosService.get(urls.notebook).then(response => response.data)
}