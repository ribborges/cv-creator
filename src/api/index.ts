import axios from "axios";

import { apiURL } from "../config/env";

const api = axios.create({
  baseURL: apiURL,
});

export { api };