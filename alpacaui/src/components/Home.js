import React, { useState } from "react";

//CSS
import "./Home.css";

//Components
import Navigation from "./Navigation";

const Home = () => {

    const [order, setOrder] = useState({
        symbol: "",
        qty: "",
        side: "",
        type: "",
        time_in_force: ""
    })

    const handleChange = (e) => {
        e.preventDefault();
        setOrder({
            [e.target.name]: e.target.value 
        })
    }

    return (
    <div className="wrap">
        <Navigation />
        <div className="topSection">
            <h1>Trade</h1>
        </div>
        <div className="tradeWrap">
            <h2>Place an Order</h2>
            <div className="tradeBox">
                <form>
                    
                    <h5>Symbol:</h5>
                    <input type="text" placeholder="ex. AAPL, SPY, GOOG" required name="symbol" />

                    <h5>Quantity:</h5>
                    <input type="number" placeholder="ex. 500" required name="qty" />

                    <h5>Side:</h5>
                    <input type="text" placeholder="ex. buy or sell" required name="side" />

                    <h5>Type:</h5>
                    <input type="text" placeholder="ex. limit/market" required name="type" />

                    <h5>Time In Force:</h5>
                    <input type="text" placeholder="ex. day, gtc" required name="time_in_force" />

                </form>
            </div>
        </div>
    </div>
    )
}

export default Home;