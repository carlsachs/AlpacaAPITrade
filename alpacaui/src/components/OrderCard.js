import React from "react";

//CSS
import "./OrderCard.css";

const OrderCard = ({ trade }) => {

    const { symbol, qty, filled_qty, order_type, side, status } = trade;

    return (
        <div className="orderBox">

            <h4>Asset:</h4>
            <h3>{symbol}</h3>

            <h4>Filled/Qty:</h4>
            <h3>{filled_qty}/{qty}</h3>

            <h4>Side/Type:</h4>
            {side === "buy" ? <h3 style={{color: "#17bf8a"}}>LONG/{order_type}</h3> : <h3 style={{color: "#d14949"}}>SHORT/{order_type}</h3>}

            <h4>Status:</h4>
            <h3>{status}</h3>

        </div>
    )
}

export default OrderCard;