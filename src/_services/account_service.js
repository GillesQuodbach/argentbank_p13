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

export const accountService = {
  saveToken,
  logout,
  isLogged,
};
