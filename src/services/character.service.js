import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const characterService = {
  getAllById: (charactersId) => axiosService
    .get(`${urls.character}/${charactersId}`)
    .then(response => response.data)
}