import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";

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
        <div className="container order-history-page">
            <h2>Order History</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {orders.length === 0 && !loading && <p>No orders found.</p>}
            {orders.length > 0 && (
                <table className="order-history-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>
                                    {order.orderDate
                                        ? new Date(
                                              order.orderDate
                                          ).toLocaleString()
                                        : "-"}
                                </td>
                                <td>
                                    {order.status
                                        ? order.status
                                              .replace("_", " ")
                                              .toLowerCase()
                                              .replace(/\b\w/g, (c) =>
                                                  c.toUpperCase()
                                              )
                                        : "-"}
                                </td>
                                <td>₦{order.totalAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default OrderHistoryPage;
