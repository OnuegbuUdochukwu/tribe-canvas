import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtworkCard from '../components/ArtworkCard';

const GalleryPage = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/artworks');
        setArtworks(response.data);
      } catch (err) {
        setError('Failed to fetch artworks. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="container">
      <h2>Art Gallery</h2>
      <div className="gallery-grid">
        {artworks.length > 0 ? (
          artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))
        ) : (
          <p className="no-artworks-message">No artworks found. Be the first to upload one!</p>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;