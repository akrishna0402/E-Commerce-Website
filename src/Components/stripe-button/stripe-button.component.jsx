import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishablekey = 'pk_test_51KHSolSC8MQ2zNRbOzQGuApYFmBxoeWRj1f67igWqP1xkBd52T8qPQ2EWgrwR4O3l36cHtyRfnfoEa1C9EQPVaKA00AK41Flza';

    const onToken = token => {
        alert('Payment sucessful')
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="Abhi's Clothing"
            billingAddress
            shippingAddress
            image="https://sugshare.com/i/CUz.svg"
            description={`Your total is ₹${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;