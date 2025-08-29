import React from "react";

const HomePage = () => {
    return (
        <div>
            {/* Hero Carousel Placeholder */}
            <div
                className="hero-carousel"
                style={{
                    background: "#eee",
                    padding: "30px",
                    borderRadius: "12px",
                    marginBottom: "24px",
                }}
            >
                <h2>Featured Artworks</h2>
                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: 120,
                            height: 120,
                            background: "#ccc",
                            borderRadius: 8,
                        }}
                    ></div>
                    <div
                        style={{
                            width: 120,
                            height: 120,
                            background: "#ccc",
                            borderRadius: 8,
                        }}
                    ></div>
                    <div
                        style={{
                            width: 120,
                            height: 120,
                            background: "#ccc",
                            borderRadius: 8,
                        }}
                    ></div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="categories" style={{ marginBottom: "24px" }}>
                <h3>Categories</h3>
                <div style={{ display: "flex", gap: "12px" }}>
                    <button>Photography</button>
                    <button>Painting</button>
                    <button>Digital Art</button>
                </div>
            </div>

            {/* Featured Artists Section */}
            <div className="featured-artists" style={{ marginBottom: "24px" }}>
                <h3>Featured Artists</h3>
                <div style={{ display: "flex", gap: "12px" }}>
                    <div
                        style={{
                            width: 80,
                            height: 80,
                            background: "#ddd",
                            borderRadius: "50%",
                        }}
                    ></div>
                    <div
                        style={{
                            width: 80,
                            height: 80,
                            background: "#ddd",
                            borderRadius: "50%",
                        }}
                    ></div>
                    <div
                        style={{
                            width: 80,
                            height: 80,
                            background: "#ddd",
                            borderRadius: "50%",
                        }}
                    ></div>
                </div>
            </div>

            <h2>Welcome to Tribe Canvas</h2>
            <p>Discover and purchase beautiful art from Nigerian artists.</p>
        </div>
    );
};

export default HomePage;
