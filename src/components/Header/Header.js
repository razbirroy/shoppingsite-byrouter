import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { faYenSign } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../Login/useAuth';


const Header = () => {
   const auth = useAuth();
   console.log(auth.user)
    return (
        <div>
            <div className='header'>
                <img src={logo} alt=""/>
                <nav>
                   <a href="/shop">Shop</a>    
                   <a href="/review">Order Review</a>
                   <a href="/inventory">Manage Inventory</a>  
                   {
                      auth.user && <span style={{backgroundColor:"red"}}>{auth.user.name}</span>
                   }
                   {
                       auth.user ? <a href="/login">Sign Out</a> :
                       <a href="/login">Sign In</a>
                   }
                </nav> 
            </div>
        </div>
        
    );
};

export default Header;