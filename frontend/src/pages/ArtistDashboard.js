import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ArtworkUploadForm from "../components/artist/ArtworkUploadForm";
import { AuthContext } from "../AuthContext";

const ArtistDashboard = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.name || "Artist");
    const [earnings, setEarnings] = useState(0);
    const [payouts, setPayouts] = useState([]);
    const [amount, setAmount] = useState(0);
    const [requesting, setRequesting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        // Fetch earnings
        axios
            .get("/api/payouts/artist/earnings")
            .then((res) => setEarnings(res.data))
            .catch(() => setEarnings(0));
        // Fetch payout history
        axios
            .get("/api/payouts/artist")
            .then((res) => setPayouts(res.data))
            .catch(() => setPayouts([]));
    }, []);

    const handlePayoutRequest = (e) => {
        e.preventDefault();
        setRequesting(true);
        setError(null);
        setSuccess(null);
        axios
            .post("/api/payouts/artist/request", { amount })
            .then((res) => {
                setSuccess("Payout requested successfully.");
                setPayouts([res.data, ...payouts]);
                setAmount(0);
            })
            .catch(() => setError("Failed to request payout."))
            .finally(() => setRequesting(false));
    };

    return (
        <div className="container">
            <h2>Welcome to Your Dashboard, {name}!</h2>
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
            <div
                className="payout-request"
                style={{
                    margin: "20px 0",
                    padding: "10px",
                    background: "#e8f7e4",
                    borderRadius: "8px",
                }}
            >
                <h3>Request Payout</h3>
                <form onSubmit={handlePayoutRequest}>
                    <input
                        type="number"
                        min="1"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="Amount (₦)"
                        required
                        style={{ marginRight: 8 }}
                    />
                    <button type="submit" disabled={requesting || amount < 1}>
                        Request
                    </button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
            </div>
            <div className="payout-history" style={{ margin: "20px 0" }}>
                <h3>Payout History</h3>
                {payouts.length === 0 ? (
                    <p>No payout history found.</p>
                ) : (
                    <table
                        style={{ width: "100%", borderCollapse: "collapse" }}
                    >
                        <thead>
                            <tr>
                                <th>Amount (₦)</th>
                                <th>Status</th>
                                <th>Requested At</th>
                                <th>Paid At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payouts.map((p) => (
                                <tr key={p.id}>
                                    <td>{p.amount}</td>
                                    <td>{p.status}</td>
                                    <td>
                                        {p.requestedAt
                                            ? new Date(
                                                  p.requestedAt
                                              ).toLocaleString()
                                            : "-"}
                                    </td>
                                    <td>
                                        {p.paidAt
                                            ? new Date(
                                                  p.paidAt
                                              ).toLocaleString()
                                            : "-"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="dashboard-content">
                <ArtworkUploadForm />
            </div>
        </div>
    );
};

export default ArtistDashboard;
