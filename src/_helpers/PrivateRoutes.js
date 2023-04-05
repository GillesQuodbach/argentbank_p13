import {Outlet}  from 'react-router'
import { Profile } from '../pages/Private/Profile/Profile'
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {PrivateLayout} from "../pages/Private/PrivateLayout";

import React from "react";

const useAuth = ()=> {
  //Affichage du token
  //TODO FONCTION REMEMBER ?
  const isUserLogged = useSelector((state => state.auth.isLogged))
  console.log(isUserLogged);
  const user = {loggedIn:isUserLogged}
  return  user && user.loggedIn
}

const PrivateRoutes = () => {
  const isAuth = useAuth()
  return isAuth ? <PrivateLayout/> : <Navigate to={"/login"}/>
}

export default PrivateRoutes