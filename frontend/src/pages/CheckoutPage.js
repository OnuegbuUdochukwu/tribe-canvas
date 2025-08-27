import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaystackButton } from 'react-paystack'; // New import
import CartContext from '../CartContext';
import AuthContext from '../AuthContext';
import axios from 'axios';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext); // Check if user is authenticated
  const navigate = useNavigate();

  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const totalInKobo = Math.round(subtotal * 100);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  
  // This is the callback function that Paystack will call on success
  const handleSuccess = async (reference) => {
    // Collect the artwork IDs from the cart
    const artworkIds = cartItems.map(item => item.id);

    try {
      const token = localStorage.getItem('jwtToken');
      // Send the payment reference and order details to our backend
      await axios.post(
        'http://localhost:8080/api/orders',
        {
          paymentReference: reference.reference,
          shippingAddress: shippingDetails.address + ', ' + shippingDetails.city + ', ' + shippingDetails.postalCode,
          artworkIds: artworkIds,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Payment successful! Your order has been placed.');
      clearCart();
      navigate('/gallery');
    } catch (error) {
      alert('Order failed. Please contact support with your payment reference.');
      console.error('Order creation failed:', error);
    }
  };

  const handleClose = () => {
    alert('Payment was not completed. You can try again.');
  };
  
  // Paystack configuration object
  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: shippingDetails.email,
    amount: totalInKobo, // Amount in kobo
    publicKey: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxx', // Replace with your actual Paystack Public Key
    metadata: {
      name: shippingDetails.name,
      address: shippingDetails.address,
    },
    onSuccess: handleSuccess,
    onClose: handleClose,
  };

  // We'll use a regular form submission for the shipping details, then trigger payment
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    // Form is valid, payment button will be enabled
  };

  return (
    <div className="container checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <div className="shipping-form-container">
          <h3>Shipping Information</h3>
          <form onSubmit={handleFormSubmit} className="shipping-form">
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
            {cartItems.length > 0 && (
                <PaystackButton {...paystackConfig} text="Proceed to Payment" className="payment-button" />
            )}
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