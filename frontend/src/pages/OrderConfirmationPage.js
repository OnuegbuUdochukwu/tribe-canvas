import React from "react";
import { Link, useLocation } from "react-router-dom";

const OrderConfirmationPage = () => {
    const location = useLocation();
    const { orderId } = location.state || {};

    return (
        <div className="container order-confirmation-page">
            <h2>Thank You for Your Purchase!</h2>
            <p>Your order has been placed successfully.</p>
            {orderId && (
                <p>
                    Order ID: <strong>{orderId}</strong>
                </p>
            )}
            <p>
                You will receive an email with your order details and tracking
                information soon.
            </p>
            <Link to="/gallery" className="back-to-gallery-link">
                Back to Gallery
            </Link>
        </div>
    );
};

export default OrderConfirmationPage;
