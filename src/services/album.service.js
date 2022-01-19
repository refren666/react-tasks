import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const albumService = {
  getPhotosByAlbumId: (id) => axiosService
    .get(`${urls.albums}/${id}${urls.photos}`)
    .then(response => response.data)
}