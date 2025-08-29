import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ArtworkUploadForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        const token = localStorage.getItem("jwtToken");
        if (!token) {
            setError("You must be logged in to upload artwork.");
            return;
        }

        let uploadedImageUrl = imageUrl;
        if (imageFile) {
            // Upload image to backend (which uploads to S3)
            const formData = new FormData();
            formData.append("file", imageFile);
            try {
                const uploadRes = await axios.post(
                    "http://localhost:8080/api/upload",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                uploadedImageUrl = uploadRes.data.url;
            } catch (err) {
                setError("Image upload failed.");
                return;
            }
        }

        try {
            await axios.post(
                "http://localhost:8080/api/artworks",
                {
                    title,
                    description,
                    price,
                    category,
                    imageUrl: uploadedImageUrl,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setMessage("Artwork uploaded successfully!");
            setTitle("");
            setDescription("");
            setPrice("");
            setCategory("");
            setImageFile(null);
            setImageUrl("");
        } catch (err) {
            setError("Failed to upload artwork. Please try again.");
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
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                />
                <input
                    type="url"
                    placeholder="Image URL (optional)"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default ArtworkUploadForm;
