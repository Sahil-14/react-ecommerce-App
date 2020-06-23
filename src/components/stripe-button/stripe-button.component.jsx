import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51GxGBQBFLczzcqPep53lOxBOqRW1btjKZSRX5RVIigL4Mjan2kvPoCcZxHBdMo84cwgE5bCm1vNt7oc6nPHX6txq00hKZXPf2i';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }
    return(
        <StripeCheckout
           label='Pay Now' 
           name='Ecommerce pvt Ltd.'
           billingAddress
           shippingAddress
           image='https://sendeyo.com/up/d/f3eb2117da'
           description={`Your total is ${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    )

}


export default StripeCheckoutButton;