import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import Navigation from "./Navigation";
import OrderCard from "./OrderCard";

//CSS
import "./Orders.css";

const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`https://paper-api.alpaca.markets/v2/orders`, {headers: {
            "APCA-API-KEY-ID": "PKA43XUS76JE0KGAVPDI",
            "APCA-API-SECRET-KEY": "yjoUQ1CHtOgj5H8WiGlOCnzffSdzzzaIRmPAxVP6"
        }})
        .then((res) => {
            setOrders([
                ...res.data
            ])
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(orders)

    return (
        <div className="ordersWrap">
            <Navigation />
            <h1 style={{color: "#17b38e"}}>Orders</h1>
            <div className="open">
                {orders.map((trade) => (
                      <OrderCard key={trade.id} trade={trade} />
                ))}
            </div>
        </div>
    )
}

export default Orders;