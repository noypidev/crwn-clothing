import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
   selectCartItems,
   selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.style.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => {
   return (
      <div className='checkout-page'>
         <div className='checkout-header'>
            <div className='header-block'>
               <span>Product</span>
            </div>
            <div className='header-block'>
               <span>Description</span>
            </div>
            <div className='header-block'>
               <span>Quantity</span>
            </div>
            <div className='header-block'>
               <span>Price</span>
            </div>
            <div className='header-block'>
               <span>Remove</span>
            </div>
         </div>
         {cartItems.length ? (
            cartItems.map((cartItem) => (
               <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
         ) : (
            <span>Nothing to see here!</span>
         )}
         <div className='cart-total'>
            <span>Cart Total: ${cartTotal}</span>
         </div>
      </div>
   );
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   cartTotal: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
