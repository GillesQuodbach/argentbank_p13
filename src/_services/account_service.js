let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token; //permet de transformer n'importe quelle variable en booleen
};

let saveToken = (token) => {
  return localStorage.setItem("token", token);
};

let getSessionStorageToken = () => {
  return sessionStorage.getItem("token");
};
let getToken = () => {
  return localStorage.getItem("token");
};

let deleteToken = () => {
  return localStorage.removeItem("token");
};

export const accountService = {
  isLogged,
  getToken,
  saveToken,
  deleteToken,
  getSessionStorageToken,
};