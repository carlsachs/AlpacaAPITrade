import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

//CSS
import "./Account.css"

//Components
import Navigation from "./Navigation";

const Account = () => {

    const [accountInfo, setAccountInfo] = useState({});

    useEffect(() => {
        axios.get(`https://paper-api.alpaca.markets/v2/account`, {headers: {
            "APCA-API-KEY-ID": "PKA43XUS76JE0KGAVPDI",
            "APCA-API-SECRET-KEY": "yjoUQ1CHtOgj5H8WiGlOCnzffSdzzzaIRmPAxVP6"
        }})
        .then((res) => {
            setAccountInfo({
                ...res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(accountInfo);

    return (
        <div className="accountWrap">
            <Navigation />
            <h1 style={{color: "#17b38e"}}>Account Info</h1>
            <div className="accountBox">
                <div className="leftBox">
                    <h3>Account Number:</h3>
                    <h4>{accountInfo.account_number}</h4>
                    {accountInfo.status === "ACTIVE" ? <div><h3>Account <span style={{color: "#17bf8a"}}>Active</span></h3></div> : <div><h3>Account <span style={{color: "#d14949"}}>Inactive</span></h3></div>}
                    <h3>Currency:</h3>
                    <h4>{accountInfo.currency}</h4>
                    <h3>Current Day Trades:</h3>
                    <h4>{accountInfo.daytrade_count}</h4>
                </div>
                <div className="rightBox">
                    <h3>Cash:</h3>
                    <h4>{accountInfo.cash}</h4>
                    <h3>Buying Power:</h3>
                    <h4>{accountInfo.buying_power}</h4>
                    <h3>Equity:</h3>
                    <h4>{accountInfo.equity}</h4>
                </div>
            </div>
        </div>
    )
}

export default Account;