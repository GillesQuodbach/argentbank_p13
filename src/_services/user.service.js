import Axios from "./caller.service";

let getUserProfile = () => {
  return Axios.post("/user/profile");
};

export const userService = {
  getUserProfile,
};