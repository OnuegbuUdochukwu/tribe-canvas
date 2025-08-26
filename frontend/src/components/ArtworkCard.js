import React from 'react';
import { Link } from 'react-router-dom';

const ArtworkCard = ({ artwork }) => {
  return (
    <div className="artwork-card">
      <Link to={`/artworks/${artwork.id}`}>
        <img src={artwork.imageUrl} alt={artwork.title} />
        <div className="card-info">
          <h3>{artwork.title}</h3>
          <p>by {artwork.artist.name}</p>
          <p>₦{artwork.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArtworkCard;