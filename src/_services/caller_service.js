import axios from "axios";
import { accountService } from "./account_service";

const Axios = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});
/**
 *  token interceptor
 */
Axios.interceptors.request.use((request) => {
  if (accountService.getToken()) {
    request.headers.Authorization = "Bearer" + accountService.getToken();
  } else if (accountService.getSessionStorageToken()) {
    request.headers.Authorization =
      "Bearer" + accountService.getSessionStorageToken();
  }

  return request;
});

export default Axios;