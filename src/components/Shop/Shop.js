import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from "react-router-dom";



const Shop = () => {
     const slice10 = fakeData.slice(0, 10)
    
     const [products, setProduct] = useState(slice10)
    
      const [cart, setCart] = useState([])

      const addHandel = (product) =>{
          const toBeAddedKey = product.key;
          const sameProduct = cart.find(pd => pd.key === toBeAddedKey)
          let count = 1;
          let newCart;
          if(sameProduct){
              count = sameProduct.quantity + 1;
              sameProduct.quantity = count;
              const others = cart.filter(pd => pd.key !== toBeAddedKey)
              newCart = [...others, sameProduct];
         }
          else{
              product.quantity = 1;
              newCart = [...cart, product];
          }
          setCart(newCart);
          addToDatabaseCart(product.key, count)
        }
        
        useEffect(() => {
            const savedCart = getDatabaseCart();
            const productKeys = Object.keys(savedCart);
            const previousCart = productKeys.map(existingKey => {
                const product = fakeData.find(pd => pd.key ===existingKey)
                product.quantity = savedCart[existingKey];
                return product
            })
            setCart(previousCart)
        },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                      products.map(pd => <Product key = {pd.key} showAddToCart = {true} addHandel = {addHandel} product = {pd}></Product>)
                 }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                   <Link to = "/review">
                      <button className="main-button">Review Order</button>
                   </Link>
                </Cart>
             </div>
        </div>
    );
};

export default Shop;