import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
    const auth = useAuth();
    console.log(auth)
    const [cart, setCart] = useState([]);
    
    const removeProduct = (productKey) => {
           const newCart = cart.filter( pd => pd.key !== productKey )
           setCart(newCart)
           removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
       const savedCart = getDatabaseCart()
       const productKeys = Object.keys(savedCart)
       const cartProducts = productKeys.map(key => {
           const product = fakeData.find(pd => pd.key === key)
           product.quantity = savedCart[key]
           return product;
        })
        setCart(cartProducts)
    },[])
    return (
        <div className="shop-container">
           <div className="product-container">
           {
                cart.map(pd => <ReviewItem removeProduct={removeProduct} product = {pd}></ReviewItem>)
            }
            {
                !cart.length && <h1>Your cart is empty. <a href="/shop">Keep Shopping</a></h1>
            }
           </div>
           <div className="cart-container">
                <Cart cart={cart}>
                      <Link to="/shipment">
                          {
                            auth.user ? <button  className="main-button">Proceed Checkout</button>
                            : <button  className="main-button">Login to Proceed</button>
                          }
                      </Link>
                </Cart>
           </div>
        </div>
    );
};

export default Review;