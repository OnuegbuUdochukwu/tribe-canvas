import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

// Placeholder pages - we'll create these later
const HomePage = () => <div>Home Page</div>;
const GalleryPage = () => <div>Gallery Page</div>;
const LoginPage = () => <div>Login Page</div>;
const RegisterPage = () => <div>Register Page</div>;
const ArtistDashboard = () => <div>Artist Dashboard</div>;
const ProductPage = () => <div>Product Page</div>;

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tribe Canvas</h1>
        <nav>
          {/* Navigation links will go here */}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<ArtistDashboard />} />
        <Route path="/artworks/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;