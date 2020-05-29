import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
import { Link } from 'react-router-dom';
const Product = (props) => {
   const {img, name, seller, price, stock, key} = props.product;
   return (
      <div className="section1">
      <div className="part1">
         <img src={img} alt=""/>     
      </div>
      <div className="light1">
         <h4 className="forH3"><Link to= {"/product/" + key}>{name}</Link></h4>
         <h4>by:{seller}</h4>   
         <h4>{price}</h4>
         <br/>
         <h4>only {stock} left in stock-Order soon</h4>
         {props.showAddToCart && <button onClick={() => props.addHandel(props.product)}  
         className="main-button"><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>}
      </div>       
 </div>
   );
};

export default Product;