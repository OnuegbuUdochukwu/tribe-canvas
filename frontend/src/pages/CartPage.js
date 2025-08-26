import React, { useContext } from "react";
import CartContext from "../CartContext";

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="container cart-page">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">
                    Your cart is empty. Start adding some art!
                </p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                    <h3>{item.title}</h3>
                                    <p className="cart-item-price">
                                        ₦{item.price.toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="remove-button"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <div className="cart-subtotal">
                            <strong>Subtotal:</strong>
                            <span>₦{subtotal.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={clearCart}
                            className="clear-cart-button"
                        >
                            Clear Cart
                        </button>
                        <button className="checkout-button">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
