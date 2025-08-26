import React, { useState, useEffect } from 'react';

const ArtistDashboard = () => {
    const [name, setName] = useState('Artist');

    // In a real application, you would fetch the artist's name from the API here
    // useEffect(() => {
    //     const fetchArtistName = async () => {
    //         const response = await axios.get('/api/users/profile', {
    //             headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}` }
    //         });
    //         setName(response.data.name);
    //     };
    //     fetchArtistName();
    // }, []);

    return (
        <div className="container">
            <h2>Welcome to Your Dashboard, {name}!</h2>
            <p>This is a protected page. If you can see this, you are logged in successfully.</p>
            <p>Here you will be able to manage your art portfolio, track sales, and more.</p>
        </div>
    );
};

export default ArtistDashboard;