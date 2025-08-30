import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ArtworkUploadForm from "../components/artist/ArtworkUploadForm";
import { AuthContext } from "../AuthContext";
import { FaMoneyBillWave, FaHistory, FaWallet } from "react-icons/fa";
import "../App.css";

const cardStyle = {
    boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
    borderRadius: 12,
    background: "#fff",
    padding: 24,
    marginBottom: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff",
    borderRadius: 8,
    overflow: "hidden",
};

const thtdStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid #f0f0f0",
    textAlign: "left",
};

const statusColors = {
    PENDING: "#f7b731",
    PAID: "#20bf6b",
    FAILED: "#eb3b5a",
};

const ArtistDashboard = () => {
    const { user } = useContext(AuthContext);
    const [name] = useState(user?.name || "Artist");
    const [earnings, setEarnings] = useState(0);
    const [payouts, setPayouts] = useState([]);
    const [amount, setAmount] = useState(0);
    const [requesting, setRequesting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        axios
            .get("/api/payouts/artist/earnings")
            .then((res) => setEarnings(res.data))
            .catch(() => setEarnings(0));
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
        <div
            className="container"
            style={{
                maxWidth: 900,
                margin: "0 auto",
                padding: 24,
            }}
        >
            <h2 style={{ marginBottom: 24 }}>
                Welcome to Your Dashboard, {name}!
            </h2>
            {/* Earnings Summary Card */}
            <div style={{ ...cardStyle, borderLeft: "6px solid #20bf6b" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                    }}
                >
                    <FaWallet
                        size={28}
                        color="#20bf6b"
                        style={{ marginRight: 12 }}
                    />
                    <h3 style={{ margin: 0 }}>Earnings Summary</h3>
                </div>
                <p
                    style={{
                        fontSize: 28,
                        fontWeight: 600,
                        color: "#222",
                        margin: 0,
                    }}
                >
                    ₦{earnings.toLocaleString()}
                </p>
            </div>
            {/* Payout Request Card */}
            <div style={{ ...cardStyle, borderLeft: "6px solid #3867d6" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                    }}
                >
                    <FaMoneyBillWave
                        size={26}
                        color="#3867d6"
                        style={{ marginRight: 12 }}
                    />
                    <h3 style={{ margin: 0 }}>Request Payout</h3>
                </div>
                <form
                    onSubmit={handlePayoutRequest}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        width: "100%",
                    }}
                >
                    <input
                        type="number"
                        min="1"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="Amount (₦)"
                        required
                        style={{
                            flex: 1,
                            padding: 10,
                            borderRadius: 6,
                            border: "1px solid #e0e0e0",
                            fontSize: 16,
                        }}
                    />
                    <button
                        type="submit"
                        disabled={requesting || amount < 1}
                        style={{
                            padding: "10px 20px",
                            borderRadius: 6,
                            background: "#3867d6",
                            color: "#fff",
                            border: 0,
                            fontWeight: 600,
                            cursor: requesting ? "not-allowed" : "pointer",
                        }}
                    >
                        {requesting ? "Requesting..." : "Request"}
                    </button>
                </form>
                {error && (
                    <p style={{ color: "#eb3b5a", marginTop: 8 }}>{error}</p>
                )}
                {success && (
                    <p style={{ color: "#20bf6b", marginTop: 8 }}>{success}</p>
                )}
            </div>
            {/* Payout History Card */}
            <div style={{ ...cardStyle, borderLeft: "6px solid #f7b731" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                    }}
                >
                    <FaHistory
                        size={24}
                        color="#f7b731"
                        style={{ marginRight: 12 }}
                    />
                    <h3 style={{ margin: 0 }}>Payout History</h3>
                </div>
                {payouts.length === 0 ? (
                    <p style={{ color: "#888" }}>No payout history found.</p>
                ) : (
                    <div style={{ width: "100%", overflowX: "auto" }}>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thtdStyle}>Amount (₦)</th>
                                    <th style={thtdStyle}>Status</th>
                                    <th style={thtdStyle}>Requested At</th>
                                    <th style={thtdStyle}>Paid At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payouts.map((p) => (
                                    <tr key={p.id}>
                                        <td style={thtdStyle}>{p.amount}</td>
                                        <td
                                            style={{
                                                ...thtdStyle,
                                                color:
                                                    statusColors[p.status] ||
                                                    "#222",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {p.status}
                                        </td>
                                        <td style={thtdStyle}>
                                            {p.requestedAt
                                                ? new Date(
                                                      p.requestedAt
                                                  ).toLocaleString()
                                                : "-"}
                                        </td>
                                        <td style={thtdStyle}>
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
                    </div>
                )}
            </div>
            <div className="dashboard-content">
                <ArtworkUploadForm />
            </div>
        </div>
    );
};

export default ArtistDashboard;
