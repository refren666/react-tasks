import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const episodeService = {
  getAll: () => axiosService.get(urls.episode).then(response => response.data),
  getById: (id) => axiosService.get(`${urls.episode}/${id}`).then(response => response.data)
}