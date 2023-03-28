import React, {useEffect, useState} from "react";
import s from "./style.module.css";
import {userService} from "../../../_services/user.service";
import {useDispatch, useSelector} from "react-redux";
import {addUserProfile} from "../../../store/user/user-slice";

export function Profile() {
    const dispatch = useDispatch()
    const userProfile = useSelector(store => store.USER.userProfile)
    console.log(userProfile)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    useEffect(() => {
        userService.getUserProfile()
            .then(res => {
                console.log(res.data) // réponse complète
                console.log(res.data.body) // réponse complète
                //TODO modifier state => REDUX
                setFirstName(res.data.body.firstName)
                setLastName(res.data.body.lastName)
                const email = res.data.body.email
                const firstName = res.data.body.firstName
                const lastName = res.data.body.lastName
                const id = res.data.body.id
                dispatch(addUserProfile({email, firstName, lastName, id}))
            })

            .catch(err => console.log(err))
    }, [firstName, lastName]);
    return (
        <main className={`${s.main} ${s.bg_dark}`}>
            <div className={s.header}>
                <h1 className={s.user_infos_container}>
                    Welcome back
                    <br/>
                    {firstName} {lastName}
                </h1>
                <button className={s.edit_button}>Edit Name</button>
            </div>

            <h2 className={s.sr_only}>Accounts</h2>

            <section className={s.account}>
                <div className={s.account_content_wrapper}>
                    <h3 className={s.account_title}>Argent Bank Checking (x8349)</h3>
                    <p className={s.account_amount}>$2,082.79</p>
                    <p className={s.account_amount_description}>Available Balance</p>
                </div>
                <div className={`${s.account_content_wrapper} ${s.cta}`}>
                    <button className={s.transaction_button}>View transactions</button>
                </div>
            </section>

            <section className={s.account}>
                <div className={s.account_content_wrapper}>
                    <h3 className={s.account_title}>Argent Bank Savings (x6712)</h3>
                    <p className={s.account_amount}>$10,928.42</p>
                    <p className={s.account_amount_description}>Available Balance</p>
                </div>
                <div className={`${s.account_content_wrapper} ${s.cta}`}>
                    <button className={s.transaction_button}>View transactions</button>
                </div>
            </section>

            <section className={s.account}>
                <div className={s.account_content_wrapper}>
                    <h3 className={s.account_title}>Argent Bank Credit Card (x8349)</h3>
                    <p className={s.account_amount}>$184.30</p>
                    <p className={s.account_amount_description}>Current Balance</p>
                </div>
                <div className={`${s.account_content_wrapper} ${s.cta}`}>
                    <button className={s.transaction_button}>View transactions</button>
                </div>
            </section>
        </main>
    );
}
