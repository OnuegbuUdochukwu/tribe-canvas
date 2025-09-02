import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import "./index.css";

import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";

// Placeholder pages
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ArtistDashboard from "./pages/ArtistDashboard";
import NotFoundPage from "./pages/NotFoundPage";
import BuyerRegisterPage from "./pages/BuyerRegisterPage";
import ArtistRegisterPage from "./pages/ArtistRegisterPage";
import ProductPage from "./pages/ProductPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import BuyerProfilePage from "./pages/BuyerProfilePage";
import ArtworkUploadForm from "./pages/ArtworkUploadForm";
import EditArtworkPage from "./pages/EditArtworkPage";
import PayoutStatusPage from "./pages/PayoutStatusPage";
import AdminDashboard from "./pages/AdminDashboard";

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
                            <Route
                                path="/register/buyer"
                                element={<BuyerRegisterPage />}
                            />
                            <Route
                                path="/register/artist"
                                element={<ArtistRegisterPage />}
                            />
                            <Route path="/cart" element={<CartPage />} />
                            <Route
                                path="/checkout"
                                element={<CheckoutPage />}
                            />
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
                            <Route
                                path="/order-confirmation"
                                element={<OrderConfirmationPage />}
                            />
                            <Route
                                path="/profile"
                                element={<BuyerProfilePage />}
                            />
                            <Route
                                path="/upload-artwork"
                                element={<ArtworkUploadForm />}
                            />
                            <Route
                                path="/edit-artwork"
                                element={<EditArtworkPage />}
                            />
                            <Route
                                path="/payouts"
                                element={<PayoutStatusPage />}
                            />
                            <Route path="/admin" element={<AdminDashboard />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </main>
                </div>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
