import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute'; // New import
import './index.css';

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
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* The dashboard route is now protected */}
            <Route path="/dashboard" element={
              <PrivateRoute>
                <ArtistDashboard />
              </PrivateRoute>
            } />
            <Route path="/artworks/:id" element={<ProductPage />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;