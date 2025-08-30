import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { FaTruck, FaCheckCircle, FaClock, FaBoxOpen } from "react-icons/fa";

const getTrackingUrl = (trackingId) => {
    if (!trackingId) return null;
    return `https://mockdelivery.com/track/${trackingId}`;
};

const statusColors = {
    PENDING: "#f7b731",
    IN_PRODUCTION: "#3867d6",
    SHIPPED: "#20bf6b",
    DELIVERED: "#2dce89",
};

const statusIcons = {
    PENDING: <FaClock color="#f7b731" title="Pending" />,
    IN_PRODUCTION: <FaBoxOpen color="#3867d6" title="In Production" />,
    SHIPPED: <FaTruck color="#20bf6b" title="Shipped" />,
    DELIVERED: <FaCheckCircle color="#2dce89" title="Delivered" />,
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
};

const thtdStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid #f0f0f0",
    textAlign: "left",
};

const OrderHistoryPage = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user && user.id) {
            setLoading(true);
            axios
                .get(`/api/orders/buyer/${user.id}`)
                .then((res) => {
                    setOrders(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError("Could not fetch order history.");
                    setLoading(false);
                });
        }
    }, [user]);

    return (
        <div
            className="container order-history-page"
            style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}
        >
            <h2 style={{ marginBottom: 24 }}>Order History</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {orders.length === 0 && !loading && <p>No orders found.</p>}
            {orders.length > 0 && (
                <div style={{ width: "100%", overflowX: "auto" }}>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thtdStyle}>Order ID</th>
                                <th style={thtdStyle}>Date</th>
                                <th style={thtdStyle}>Status</th>
                                <th style={thtdStyle}>Tracking</th>
                                <th style={thtdStyle}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td style={thtdStyle}>{order.id}</td>
                                    <td style={thtdStyle}>
                                        {order.orderDate
                                            ? new Date(
                                                  order.orderDate
                                              ).toLocaleString()
                                            : "-"}
                                    </td>
                                    <td
                                        style={{
                                            ...thtdStyle,
                                            color:
                                                statusColors[order.status] ||
                                                "#222",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {statusIcons[order.status] || null}{" "}
                                        {order.status
                                            ? order.status
                                                  .replace("_", " ")
                                                  .toLowerCase()
                                                  .replace(/\b\w/g, (c) =>
                                                      c.toUpperCase()
                                                  )
                                            : "-"}
                                    </td>
                                    <td style={thtdStyle}>
                                        {order.trackingId ? (
                                            <a
                                                href={getTrackingUrl(
                                                    order.trackingId
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: "#3867d6",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                <FaTruck
                                                    style={{ marginRight: 6 }}
                                                />
                                                {order.trackingId}
                                            </a>
                                        ) : (
                                            <span style={{ color: "#888" }}>
                                                Not assigned
                                            </span>
                                        )}
                                    </td>
                                    <td style={thtdStyle}>
                                        ₦{order.totalAmount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default OrderHistoryPage;
