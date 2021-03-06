import React from 'react'
import './checkout.styles.scss'

import CheckoutItem from '../../Components/checkout-item/checkout-item.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { selectCartItemsTotal } from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button.component'

const CheckoutPage = ( { cartItems , total } ) => (
    <div className='checkout-page' >
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }

        <div className="total">
            <span>TOTAl : ₹{total} </span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242  - Exp : 01/24  - CVV : 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems , 
    total : selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);
