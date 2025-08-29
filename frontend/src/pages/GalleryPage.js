import React, { useState, useEffect } from "react";
import axios from "axios";
import ArtworkCard from "../components/ArtworkCard";

const GalleryPage = () => {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    const [tag, setTag] = useState("");
    const [dimensions, setDimensions] = useState("");

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                setLoading(true);
                const params = {};
                if (searchTerm) params.title = searchTerm;
                if (category) params.category = category;
                if (tag) params.tag = tag;
                if (dimensions) params.dimensions = dimensions;
                const response = await axios.get(
                    "http://localhost:8080/api/artworks",
                    { params }
                );
                setArtworks(response.data);
            } catch (err) {
                setError("Failed to fetch artworks. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchArtworks();
    }, [searchTerm, category, tag, dimensions]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="container">
            <h2>Art Gallery</h2>
            <div className="filter-controls">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <input
                    type="text"
                    placeholder="Tag (e.g. abstract)"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    className="tag-input"
                />
                <input
                    type="text"
                    placeholder="Dimensions (e.g. 24x36)"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    className="dimensions-input"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="category-select"
                >
                    <option value="">All Categories</option>
                    <option value="Photography">Photography</option>
                    <option value="Painting">Painting</option>
                    <option value="Digital Art">Digital Art</option>
                </select>
            </div>
            <div className="gallery-grid">
                {artworks.length > 0 ? (
                    artworks.map((artwork) => (
                        <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))
                ) : (
                    <p className="no-artworks-message">
                        No artworks found. Try a different search term.
                    </p>
                )}
            </div>
        </div>
    );
};

export default GalleryPage;
