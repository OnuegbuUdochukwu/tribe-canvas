import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const OrderConfirmationPage = () => {
    const location = useLocation();
    const { orderId } = location.state || {};
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (orderId) {
            setLoading(true);
            axios
                .get(`/api/orders/${orderId}`)
                .then((res) => {
                    setOrder(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError("Could not fetch order details.");
                    setLoading(false);
                });
        }
    }, [orderId]);

    return (
        <div className="container order-confirmation-page">
            <h2>Thank You for Your Purchase!</h2>
            <p>Your order has been placed successfully.</p>
            {orderId && (
                <p>
                    Order ID: <strong>{orderId}</strong>
                </p>
            )}
            {loading && <p>Loading order details...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {order && (
                <p>
                    Order Status:{" "}
                    <strong>
                        {order.status
                            .replace("_", " ")
                            .toLowerCase()
                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </strong>
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
