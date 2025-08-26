import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext'; // New import
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import './index.css';
import CartPage from './pages/CartPage';

// Placeholder pages
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ArtistDashboard from './pages/ArtistDashboard';
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
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/cart" element={<CartPage />} /> {/* New route */}
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <ArtistDashboard />
                </PrivateRoute>
              } />
              <Route path="/artworks/:id" element={<ProductPage />} />
            </Routes>
          </main>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;