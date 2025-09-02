import React, { useState } from "react";

const initialProfile = {
    name: "Adeola Adebayo",
    email: "adeola.adebayo@example.com",
    phone: "+234 801 234 5678",
    address: "123, Main Street, Lagos, Nigeria",
};

const orders = [
    {
        id: "#12345",
        date: "2024-01-15",
        status: "Shipped",
        statusColor: "blue",
        total: 150.0,
    },
    {
        id: "#67890",
        date: "2023-12-20",
        status: "Delivered",
        statusColor: "green",
        total: 200.0,
    },
    {
        id: "#11223",
        date: "2023-11-05",
        status: "Cancelled",
        statusColor: "red",
        total: 50.0,
    },
];

function BuyerProfilePage() {
    const [profile, setProfile] = useState(initialProfile);

    return (
        <div
            className="bg-white min-h-screen"
            style={{ fontFamily: "Inter, Noto Sans, sans-serif" }}
        >
            {/* ...existing code... */}
        </div>
    );
}

export default BuyerProfilePage;
