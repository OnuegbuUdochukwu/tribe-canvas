import React, { useState, useEffect } from 'react';
import ArtworkUploadForm from '../components/artist/ArtworkUploadForm'; // New import

const ArtistDashboard = () => {
    const [name, setName] = useState('Artist');
    // ... (rest of the component) ...

    return (
        <div className="container">
            <h2>Welcome to Your Dashboard, {name}!</h2>
            <p>This is a protected page. If you can see this, you are logged in successfully.</p>
            <div className="dashboard-content">
                <ArtworkUploadForm />
            </div>
        </div>
    );
};

export default ArtistDashboard;