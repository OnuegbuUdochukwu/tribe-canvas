import React, { useState, useEffect } from "react";
import ArtworkUploadForm from "../components/artist/ArtworkUploadForm"; // New import

const ArtistDashboard = () => {
    const [name, setName] = useState("Artist");
    // ... (rest of the component) ...

    // Placeholder earnings summary
    const earnings = 0; // Replace with real data from backend in future

    return (
        <div className="container">
            <h2>Welcome to Your Dashboard, {name}!</h2>
            <p>
                This is a protected page. If you can see this, you are logged in
                successfully.
            </p>
            <div
                className="earnings-summary"
                style={{
                    margin: "20px 0",
                    padding: "10px",
                    background: "#f5f5f5",
                    borderRadius: "8px",
                }}
            >
                <h3>Earnings Summary</h3>
                <p>Total Earnings: ₦{earnings.toLocaleString()}</p>
            </div>
            <div className="dashboard-content">
                <ArtworkUploadForm />
            </div>
        </div>
    );
};

export default ArtistDashboard;
