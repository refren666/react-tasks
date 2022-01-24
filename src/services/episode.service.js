import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const episodeService = {
  getAllPage: (num) => axiosService.get(`${urls.episode}?page=${num}`).then(response => response.data),
  getById: (id) => axiosService.get(`${urls.episode}/${id}`).then(response => response.data)
}