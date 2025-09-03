import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import CartContext from '../CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState('12" x 16"');
  const [selectedFrame, setSelectedFrame] = useState('No Frame');
  const [activeTab, setActiveTab] = useState('details');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchArtwork();
  }, [id]);

  const fetchArtwork = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/api/artworks/${id}`);
      setArtwork(response.data);
    } catch (err) {
      setError('Failed to load artwork');
      console.error('Error fetching artwork:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (artwork) {
      const cartItem = {
        id: artwork.id,
        title: artwork.title,
        artistName: artwork.artistName || artwork.artist_name,
        price: artwork.price,
        imageUrl: artwork.imageUrl || artwork.image_url,
        size: selectedSize,
        frame: selectedFrame,
        quantity: 1
      };
      addToCart(cartItem);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading artwork...</div>
      </div>
    );
  }

  if (error || !artwork) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">{error || 'Artwork not found'}</div>
      </div>
    );
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full bg-slate-50/80 backdrop-blur-lg">
        <div className="layout-container mx-auto flex items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 px-10 py-3">
          <div className="flex items-center gap-4 text-slate-900">
            <Link to="/" className="flex items-center gap-3">
              <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
              <h2 className="text-slate-900 text-2xl font-bold leading-tight tracking-tight">Tribe Canvas</h2>
            </Link>
          </div>
          <nav className="flex flex-1 justify-end gap-8">
            <div className="hidden items-center gap-9 md:flex">
              <Link to="/gallery" className="text-slate-900 text-base font-medium leading-normal hover:text-[var(--primary-color)]">Shop</Link>
              <Link to="/artists" className="text-slate-900 text-base font-medium leading-normal hover:text-[var(--primary-color)]">Artists</Link>
              <Link to="/collections" className="text-slate-900 text-base font-medium leading-normal hover:text-[var(--primary-color)]">Collections</Link>
              <Link to="/blog" className="text-slate-900 text-base font-medium leading-normal hover:text-[var(--primary-color)]">Blog</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/cart" className="flex h-10 max-w-[480px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-slate-200 px-4 text-slate-900 text-sm font-bold leading-normal tracking-wide transition-colors hover:bg-slate-300">
                <span className="truncate">Cart</span>
                <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary-color)] text-xs text-white">3</span>
              </Link>
              <button className="flex h-10 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-slate-200 px-2.5 text-slate-900 text-sm font-bold leading-normal tracking-wide transition-colors hover:bg-slate-300">
                <div className="text-slate-900" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                  <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-10">
            {/* Artwork Image */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-300 hover:scale-110" 
                  style={{backgroundImage: `url("${artwork.imageUrl || artwork.image_url}")`}}
                ></div>
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:col-span-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{artwork.title}</h1>
              <p className="mt-2 text-lg text-gray-600">
                By <Link to={`/artists/${artwork.artistId || artwork.artist_id}`} className="font-medium text-[var(--primary-color)] hover:underline">
                  {artwork.artistName || artwork.artist_name}
                </Link>
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                {artwork.description || 'A beautiful piece of art that captures the essence of Nigerian culture and creativity.'}
              </p>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-slate-900">₦{artwork.price?.toFixed(2) || '25,000.00'}</h2>
                <p className="mt-1 text-sm text-gray-500">Starting price</p>
              </div>

              {/* Purchase Form */}
              <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); handleAddToCart(); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="size">Size</label>
                  <select 
                    className="mt-1 block w-full rounded-lg border-gray-300 py-3 pl-3 pr-10 text-base focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm" 
                    id="size" 
                    name="size"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option>12" x 16"</option>
                    <option>18" x 24"</option>
                    <option>24" x 36"</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="frame">Frame Style</label>
                  <select 
                    className="mt-1 block w-full rounded-lg border-gray-300 py-3 pl-3 pr-10 text-base focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm" 
                    id="frame" 
                    name="frame"
                    value={selectedFrame}
                    onChange={(e) => setSelectedFrame(e.target.value)}
                  >
                    <option>No Frame</option>
                    <option>Black Wood</option>
                    <option>White Wood</option>
                    <option>Natural Oak</option>
                  </select>
                </div>
                
                <button 
                  className="flex w-full items-center justify-center rounded-lg border border-transparent bg-[var(--primary-color)] px-8 py-3 text-base font-medium text-white shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2" 
                  type="submit"
                >
                  Add to Cart
                </button>
                
                <button 
                  className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2" 
                  type="button"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9.5V14.5C3 15.6046 3.89543 16.5 5 16.5H6.5M16 11.5L21 9V15L16 12.5V11.5ZM3 9.5L8 7V17L3 14.5V9.5ZM8 7L13 4.5V19.5L8 17V7Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M16 11.5L8 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  View on Your Wall
                </button>
              </form>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                <button 
                  className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                    activeTab === 'details' 
                      ? 'border-[var(--primary-color)] text-[var(--primary-color)]' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('details')}
                >
                  Details
                </button>
                <button 
                  className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                    activeTab === 'artist' 
                      ? 'border-[var(--primary-color)] text-[var(--primary-color)]' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('artist')}
                >
                  About the Artist
                </button>
                <button 
                  className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                    activeTab === 'shipping' 
                      ? 'border-[var(--primary-color)] text-[var(--primary-color)]' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('shipping')}
                >
                  Shipping & Returns
                </button>
              </nav>
            </div>
            
            <div className="py-10">
              {activeTab === 'details' && (
                <p className="text-base text-gray-700">
                  This vibrant abstract print captures the essence of Lagos' bustling energy, blending bold colors and dynamic shapes to evoke the city's vibrant spirit. Printed on
                  high-quality archival paper with pigment-based inks, this piece adds a touch of modern sophistication and lasting color to any space.
                </p>
              )}
              {activeTab === 'artist' && (
                <p className="text-base text-gray-700">
                  {artwork.artistName || artwork.artist_name} is a talented Nigerian artist whose work explores the intersection of urban life and artistic expression, capturing the dynamic energy of Lagos through bold colors and abstract forms.
                </p>
              )}
              {activeTab === 'shipping' && (
                <p className="text-base text-gray-700">
                  Free shipping within Nigeria. International shipping available. Returns accepted within 30 days of purchase. All artwork is carefully packaged to ensure safe delivery.
                </p>
              )}
            </div>
          </div>

          {/* Related Artworks */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">You Might Also Like</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {/* This would be populated with related artworks from the API */}
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div className="h-full w-full bg-cover bg-center object-cover object-center group-hover:opacity-75" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyuwDF-hpFxbZFbEBgdcltMZMbvju8WU0aFRWI-a9qkyhIdTpGMARaZGJkut2FSMitCpn3MEYSGJwKXPHt_uHYDln1J-8JaIZy9a0piTvJIL8QB6JeCtY0sifMpx0YO1jD2sJcLsCVj-QFpfENDo_94-WssPATt3SRgWsvxZcNxZjOOmpGhzYrVvXhfRawMhOZQqOSS9LBAgGBx9Qwq5l5Sgx_3CpzuiSGKhx20ZuBeziQNMlsPiWDYpDOXcS9OR4Gyp40H0N5LCQ")'}}></div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Eko Motion</h3>
                <p className="mt-1 text-sm text-gray-600">By Jide Adebayo</p>
                <p className="mt-1 text-base font-medium text-gray-800">₦22,000.00</p>
              </div>
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div className="h-full w-full bg-cover bg-center object-cover object-center group-hover:opacity-75" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkAS7aiAeyV9UezuBzL1pg3ATKOqbsysxaim1B6_u5Up0-gGYTf4-EENM2lPh6xBITdtuMWh8zFUfCGEYhzgAQBmu91Ec2j07voMRZGYO9tBX185YkUrqUQZrHkvsI2YlfQ2TMtUPMuyr-_0BrkhspyRkx9jgMnabLGmTb6-sUoLo_fBHS8Nc4EeVSb5kEk5sXbzYKg4jFF3NxPRt-p69qwRzJEJaRcHTMIAVaKclyDK6PHKyktunbpkB8M65T_jas51BVSD1QdUM")'}}></div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Coastal Breeze</h3>
                <p className="mt-1 text-sm text-gray-600">By Sade Bello</p>
                <p className="mt-1 text-base font-medium text-gray-800">₦28,000.00</p>
              </div>
              <div className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <div className="h-full w-full bg-cover bg-center object-cover object-center group-hover:opacity-75" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0mxjj0ZFy1pQHNzQ5-FDkdX_eOBJV0q_UNWjhCEamcVDHWE3OS5jqxHRKtvoHh_srOifHLoKs8p-KC673ZP0xT79qdMbaqeuZyMUadnshoh-28YJhCZAYkYjxw9hkemFOZ1IAj4id5AaTrz1XyWCm3Llry_gQ0jFmGVlaSO4yXTEbEjMvh3o3EvehVFYnjEvyGCd3H-_I7YNbD09YA4PNb9RjIubhmwnmW1I10LM1Nb6K-HifGTdu0QgXii2EYON4rgqL4WbXCug")'}}></div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Oasis Bloom</h3>
                <p className="mt-1 text-sm text-gray-600">By Femi Adekunle</p>
                <p className="mt-1 text-base font-medium text-gray-800">₦31,000.00</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
