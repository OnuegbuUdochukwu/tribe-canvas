import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GalleryPage = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchArtworks();
  }, [currentPage, searchTerm]);

  const fetchArtworks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/api/artworks`, {
        params: {
          page: currentPage - 1,
          size: 12,
          search: searchTerm
        }
      });
      setArtworks(response.data.content || response.data);
      setTotalPages(response.data.totalPages || 1);
    } catch (err) {
      setError('Failed to load artworks');
      console.error('Error fetching artworks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading artworks...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 px-10 py-4">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3">
            <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <h2 className="text-[var(--text-color)] text-2xl font-bold">Tribe Canvas</h2>
          </Link>
          <nav className="flex items-center gap-8">
            <Link to="/gallery" className="text-[var(--text-color)] text-base font-medium hover:text-[var(--primary-color)] transition-colors">Shop</Link>
            <Link to="/artists" className="text-[var(--text-color)] text-base font-medium hover:text-[var(--primary-color)] transition-colors">Artists</Link>
            <Link to="/about" className="text-[var(--text-color)] text-base font-medium hover:text-[var(--primary-color)] transition-colors">About</Link>
            <Link to="/contact" className="text-[var(--text-color)] text-base font-medium hover:text-[var(--primary-color)] transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              className="form-input w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-[var(--secondary-color)] px-10 py-2 text-base text-[var(--text-color)] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" 
              placeholder="Search" 
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center rounded-lg bg-transparent p-2 text-[var(--text-color)] transition-colors hover:bg-gray-100">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M213.38,139.08l-45.43-80a16,16,0,0,0-14.07-9.08H102.12a16,16,0,0,0-14.07,9.08l-45.43,80a16,16,0,0,0,14.07,22.92H200a16,16,0,0,0,13.38-22.92ZM128,64h64.24l30.29,53.33H33.47L63.76,64H96v16a8,8,0,0,0,16,0V64h16Zm71.55,88H56.45a.53.53,0,0,1-.44-.2A.51.51,0,0,1,56,151.5a.49.49,0,0,1,.45-.33H199.55a.49.49,0,0,1,.45.33.51.51,0,0,1-.07.47A.53.53,0,0,1,199.55,152Z"></path>
              </svg>
            </button>
            <button className="flex items-center justify-center rounded-lg bg-transparent p-2 text-[var(--text-color)] transition-colors hover:bg-gray-100">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-color)] sm:text-5xl lg:text-6xl">Artwork Catalog</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Discover unique art prints from talented Nigerian artists. Use the filters to find your perfect piece.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="relative w-full sm:max-w-xs">
            <input 
              className="form-input w-full rounded-lg border-gray-300 bg-white py-2 pl-10 pr-4 text-[var(--text-color)] placeholder:text-gray-400 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]" 
              placeholder="Search for art..." 
              type="search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="relative">
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[var(--text-color)] hover:bg-gray-50">
                <span>Artist</span>
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[var(--text-color)] hover:bg-gray-50">
                <span>Style</span>
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[var(--text-color)] hover:bg-gray-50">
                <span>Color</span>
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[var(--text-color)] hover:bg-gray-50">
                <span>Orientation</span>
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" fillRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {artworks.map((artwork) => (
            <Link key={artwork.id} to={`/artworks/${artwork.id}`} className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  alt={artwork.title} 
                  className="h-full w-full object-cover" 
                  src={artwork.imageUrl || artwork.image_url}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold text-white">{artwork.title}</h3>
                <p className="text-sm text-gray-300">By {artwork.artistName || artwork.artist_name}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-1 rounded-lg bg-white p-1 shadow-sm">
              <button 
                className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Previous</span>
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fillRule="evenodd"></path>
                </svg>
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    className={`rounded-md px-4 py-2 text-sm font-medium ${
                      currentPage === page
                        ? 'bg-[var(--primary-color)] text-white'
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                );
              })}
              
              {totalPages > 5 && (
                <>
                  <span className="px-4 py-2 text-sm font-medium text-gray-500">...</span>
                  <button
                    className="rounded-md px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    onClick={() => handlePageChange(totalPages)}
                  >
                    {totalPages}
                  </button>
                </>
              )}
              
              <button 
                className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Next</span>
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fillRule="evenodd"></path>
                </svg>
              </button>
            </nav>
          </div>
        )}
      </main>
    </div>
  );
};

export default GalleryPage;
