import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="creditCard">Credit Card/Debit Card:</label>
        <input type="text" id="creditCard" name="creditCard" required />

        <label htmlFor="creditCard">Expired Date:</label>
        <input type="text" id="creditCard" name="creditCard" required />

        <label htmlFor="creditCard">CVV:</label>
        <input type="password" id="creditCard" name="creditCard" required />

        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Checkout;