import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/artworks/${id}`);
        setArtwork(response.data);
      } catch (err) {
        setError('Failed to fetch artwork. It might not exist.');
      } finally {
        setLoading(false);
      }
    };
    fetchArtwork();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="container product-page">
      <div className="product-image-container">
        <img src={artwork.imageUrl} alt={artwork.title} className="product-image" />
      </div>
      <div className="product-details">
        <h1>{artwork.title}</h1>
        <p className="artist-name">by {artwork.artist.name}</p>
        <p className="product-price">₦{artwork.price.toFixed(2)}</p>
        <div className="product-description">
          <h3>Description</h3>
          <p>{artwork.description}</p>
        </div>
        <div className="product-metadata">
          <p><strong>Category:</strong> {artwork.category}</p>
          <p><strong>Uploaded On:</strong> {new Date(artwork.createdAt).toLocaleDateString()}</p>
        </div>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductPage;