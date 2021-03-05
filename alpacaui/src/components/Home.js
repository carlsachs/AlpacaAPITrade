import React, { useState } from "react";
import axios from "axios";

//Sweet Alert
import swal from 'sweetalert';

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

    console.log(order)

    const handleChange = (e) => {
        e.preventDefault();
        setOrder({
            ...order,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://paper-api.alpaca.markets/v2/orders`, order, { headers: {
            "APCA-API-KEY-ID": "PKA43XUS76JE0KGAVPDI",
            "APCA-API-SECRET-KEY": "yjoUQ1CHtOgj5H8WiGlOCnzffSdzzzaIRmPAxVP6"
        }})
        .then((res) => {
            swal("Submitted!", "Your trade has been sent!", "success");
        })
        .catch((err) => {
            swal("Oh No!", "There was an error!", "error");
            console.log(err)
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
                    <input type="text" placeholder="ex. AAPL, SPY, GOOG" required name="symbol" onChange={handleChange} />

                    <h5>Quantity:</h5>
                    <input type="number" placeholder="ex. 500" required name="qty" onChange={handleChange} />

                    <h5>Side:</h5>
                    <input type="text" placeholder="ex. buy or sell" required name="side" onChange={handleChange} />

                    <h5>Type:</h5>
                    <input type="text" placeholder="ex. limit/market" required name="type" onChange={handleChange} />

                    <h5>Time In Force:</h5>
                    <input type="text" placeholder="ex. day, gtc" required name="time_in_force" onChange={handleChange} />

                </form>
                <div className="submitButton">
                    <button onClick={handleSubmit}>Submit Order</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;