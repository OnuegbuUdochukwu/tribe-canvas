import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../CartContext';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // In the next step, we will integrate a payment gateway here
    // For now, let's simulate a successful checkout
    alert('Checkout successful!');
    clearCart();
    navigate('/gallery');
  };

  return (
    <div className="container checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <div className="shipping-form-container">
          <h3>Shipping Information</h3>
          <form onSubmit={handleCheckout} className="shipping-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingDetails.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={shippingDetails.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={shippingDetails.address}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingDetails.city}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={shippingDetails.postalCode}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="payment-button">Proceed to Payment</button>
          </form>
        </div>
        <div className="order-summary-container">
          <h3>Order Summary</h3>
          <div className="order-summary">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <span>{item.title}</span>
                <span>₦{item.price.toFixed(2)}</span>
              </div>
            ))}
            <hr />
            <div className="summary-total">
              <strong>Subtotal:</strong>
              <strong>₦{subtotal.toFixed(2)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;