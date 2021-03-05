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
                    <input type="text" placeholder="ex. AAPL, SPY, GOOG" required />





                </form>
            </div>
        </div>
    </div>
    )
}

export default Home;