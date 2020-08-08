import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price*100;
  const publishableKey = 'pk_test_51GuuqtCad6IwRWfHPjYgFNzwUbNqwzAePaBSNcFqidtOyvaGjVZnrXKalafhUWcfL5sZKlQpITwu8kfgM5nFr7ie00UY9WdylU'

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Go 4 Fresh'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
