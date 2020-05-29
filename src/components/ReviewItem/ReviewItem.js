import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product
    const reviewItemStyle = {
        borderBottom : "1px solid gray",
        marginBottom : "5px",
        paddingBottom : "5px",
        marginLeft : "200px" 
    }
    return (
        <div style = {reviewItemStyle} className="light1">
            <h4 className="forH3">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>Price: {price}</p>
            <br/>
            <button className="main-button" onClick = {() => props.removeProduct(key)}> Remove </button>
        </div>
    );
};

export default ReviewItem;