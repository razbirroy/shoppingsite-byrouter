import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Cart = (props) => {
    const auth = useAuth()
    console.log(auth)
   // const user = useContext(UserContext)
    //console.log(user)
    const cart = props.cart; 
   // const element = cart.reduce((elm,pd) => elm + pd.price,0)
   let amount = 0;
   for (let i = 0; i < cart.length; i++){
        const product = cart[i];
        amount = amount + product.price * product.quantity;
   }
   
   let shipping = 0;
   if (amount > 35){
        shipping = 0;
   }
   else if(amount > 15){
       shipping = 4.99;
   }
   else if(amount > 0){
       shipping = 12.99;
   }

   const tax = (amount /10).toFixed(2);
   const grandTotal = (amount + shipping + Number(tax)).toFixed(2);

   const formatNumber = num =>{
       const precision = num.toFixed(2);
       return Number(precision)
   }
return (
        <div>
            
            <h3>Order Summary</h3>
            <h4>Items Orderer:{cart.length}</h4>
            <h4>Shipping Cost:{shipping}</h4>
            <h4>Product-Price:{formatNumber(amount)}</h4>
            <h4>Tax + Vat: {tax}</h4>
            <h4>Total-Price:{grandTotal}</h4>
             <br/>
             {
                 props.children
             }
             <p> {} </p>
        </div>
    );
};

export default Cart;