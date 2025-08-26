import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ArtworkUploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // Placeholder for image URL
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    const token = localStorage.getItem('jwtToken');
    if (!token) {
      setError('You must be logged in to upload artwork.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:8080/api/artworks',
        {
          title,
          description,
          price,
          category,
          imageUrl,
          // We will handle the actual image upload to a cloud service later.
          // For now, the backend model will accept the imageUrl directly.
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Artwork uploaded successfully!');
      // Reset form fields after successful upload
      setTitle('');
      setDescription('');
      setPrice('');
      setCategory('');
      setImageUrl('');
    } catch (err) {
      setError('Failed to upload artwork. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Upload New Artwork</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          required
        ></textarea>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ArtworkUploadForm;