'use client'
import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement } from '@stripe/react-stripe-js';
const Payment = () => {
      const options = {
            // passing the client secret obtained from the server
            clientSecret: `${process.env.STRIPE_SECRET_KEY}`,
          };
        
          const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`)
        
  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentElement/>
      <button className='px-5 py-3 rounded-xl font-semibold bg-lime-500 mt-10 mx-auto'>Sumbit</button>
    </Elements>
  )
}

export default Payment;