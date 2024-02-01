import axios from "axios";
import { env } from "./env";

export const instance = axios.create({
    baseURL: 'http://localhost:3003/',
  });