import Axios from "./caller.service";

let login = (loginInput) => {
  return Axios.post("user/login", loginInput);
};
let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let logout = () => {
  localStorage.removeItem("token");
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token; //permet de transformer n'importe quelle variable en booleen
};

let getToken = () => {
  return localStorage.getItem("token");
};

export const accountService = {
  login,
  saveToken,
  logout,
  isLogged,
  getToken,
};