import { http } from "./HttpService";

export function createFi(fi) {
    return http().post("api/fi/create", fi);
  }