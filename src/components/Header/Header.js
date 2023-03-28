import React from "react";
import logo from "../../assets/img/argentBankLogo.png";
import {NavLink} from "react-router-dom";
import s from "./style.module.css";
import {accountService} from "../../_services/account_service";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";


export function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = () => {
        accountService.logout()
        navigate('/')
    }

//TODO supprimer le token du store au logout
    return (
        <nav className={s.main_nav}>
            <NavLink to="/" className={s.main_nav_logo}>
                <img
                    className={s.main_nav_logo_image}
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className={s.sr_only}>Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink to="/login" className={s.main_nav_item}>
                    <i className={`fa fa-user-circle ${s.header_signin_link}`}></i>
                    Sign In
                </NavLink>

                <NavLink to="/" className={s.main_nav_item} onClick={logout}>
                    <i className={`fa fa-user-circle ${s.header_signin_link}`}></i>
                    LogOut
                </NavLink>
            </div>
        </nav>
    );
}
