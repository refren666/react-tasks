import axios from "axios";

import {carsURL, placeholderURL} from "../config";

export const axiosCarService = axios.create({ baseURL: carsURL });

export const axiosPlaceholderService = axios.create({ baseURL: placeholderURL });