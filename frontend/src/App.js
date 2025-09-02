import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import "./index.css";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage"; // New import
import OrderHistoryPage from "./pages/OrderHistoryPage";

// Placeholder pages
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ArtistDashboard from "./pages/ArtistDashboard";
import NotFoundPage from "./pages/NotFoundPage";
const ProductPage = () => <div>Product Page</div>;

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <div className="App">
                    <NavBar />
                    <main>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/gallery" element={<GalleryPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />
                            <Route path="/cart" element={<CartPage />} />
                            <Route
                                path="/checkout"
                                element={<CheckoutPage />}
                            />{" "}
                            {/* New route */}
                            <Route
                                path="/orders"
                                element={<OrderHistoryPage />}
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    <PrivateRoute>
                                        <ArtistDashboard />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/artworks/:id"
                                element={<ProductPage />}
                            />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </main>
                </div>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
