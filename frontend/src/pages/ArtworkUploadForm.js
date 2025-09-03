import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArtworkUploadForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    files: [],
    pricing: [
      { size: 'Medium (18" x 24")', price: '' }
    ]
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      files: files
    }));
  };

  const handlePricingChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      pricing: prev.pricing.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addPricingOption = () => {
    setFormData(prev => ({
      ...prev,
      pricing: [...prev.pricing, { size: 'Small (12" x 18")', price: '' }]
    }));
  };

  const removePricingOption = (index) => {
    setFormData(prev => ({
      ...prev,
      pricing: prev.pricing.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('tags', formData.tags);
      
      formData.files.forEach((file, index) => {
        formDataToSend.append(`files`, file);
      });

      formData.pricing.forEach((item, index) => {
        formDataToSend.append(`pricing[${index}][size]`, item.size);
        formDataToSend.append(`pricing[${index}][price]`, item.price);
      });

      await axios.post('http://localhost:8080/api/artworks', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate('/artist-dashboard');
    } catch (err) {
      setError('Failed to upload artwork. Please try again.');
      console.error('Error uploading artwork:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = () => {
    // Save form data to localStorage for draft
    localStorage.setItem('artworkDraft', JSON.stringify(formData));
    navigate('/artist-dashboard');
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--secondary-color)] px-10 py-4 shadow-sm">
        <div className="flex items-center gap-4 text-[var(--primary-color)]">
          <div className="flex items-center gap-3">
            <svg className="text-[var(--primary-color)] size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <h1 className="text-[var(--primary-color)] text-xl font-bold leading-tight tracking-[-0.015em]">Tribe Canvas</h1>
          </div>
        </div>
        <nav className="flex flex-1 justify-center gap-8">
          <a className="text-[var(--text-primary)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors" href="#">Shop</a>
          <a className="text-[var(--text-primary)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors" href="#">Artists</a>
          <a className="text-[var(--text-primary)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors" href="#">About</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-[var(--secondary-color)] text-[var(--text-primary)] hover:bg-gray-200 transition-colors text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Cart (0)</span>
            </button>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 bg-[var(--secondary-color)] text-[var(--text-primary)] hover:bg-gray-200 transition-colors gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </button>
          </div>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1MCLXks4eWkal-sLm9xb4exI5Ld4Aw_0DfcQZg7uZpmy95E8MeRwf_p6ZI0wIzY6iHzF1oKzEmad4N5fCjwLeMihOYHDKSY2rxPymEuNyOvmSyzqfvO4-JYsToV-2JfRtyzU_VfWS29FsT29lVqUqC28z1UcFF0NQVJO3sBmsgZdMB_Yn815umY25ABCMred57iUZMHoGIRbA2yC9gI-m8mOtzpcS5cluRLk4_OKsmI4op4O9D22HYj2LAchcr-3_dbVfpqwwKa0")'}}></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl space-y-8">
          <div>
            <h2 className="text-center text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">Upload Your Artwork</h2>
            <p className="mt-2 text-center text-lg text-[var(--text-secondary)]">
              Share your creativity with the world. Fill out the details below to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6 rounded-md bg-white p-8 shadow-lg">
            {/* File Upload */}
            <div className="col-span-full">
              <label className="block text-base font-medium leading-normal text-[var(--text-primary)]" htmlFor="artwork-upload">Artwork Files</label>
              <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 hover:border-[var(--primary-color)] transition-colors">
                <div className="space-y-1 text-center">
                  <svg aria-hidden="true" className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer rounded-md bg-white font-medium text-[var(--primary-color)] hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[var(--primary-color)]" htmlFor="file-upload">
                      <span>Upload a file</span>
                      <input 
                        className="sr-only" 
                        id="file-upload" 
                        multiple 
                        name="file-upload" 
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  {formData.files.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm text-[var(--primary-color)]">{formData.files.length} file(s) selected</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Artwork Details */}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-base font-medium leading-normal text-[var(--text-primary)]" htmlFor="artwork-title">Artwork Title</label>
                <div className="mt-1">
                  <input 
                    className="form-input block w-full rounded-md border-gray-300 shadow-sm sm:text-sm h-12 px-4" 
                    id="artwork-title" 
                    name="title" 
                    placeholder="e.g., 'Sunset over Lagos'" 
                    type="text"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label className="block text-base font-medium leading-normal text-[var(--text-primary)]" htmlFor="description">Description</label>
                <div className="mt-1">
                  <textarea 
                    className="form-input block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-4" 
                    id="description" 
                    name="description" 
                    placeholder="Describe your artwork, the inspiration behind it, and any other details you'd like to share." 
                    rows="4"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label className="block text-base font-medium leading-normal text-[var(--text-primary)]" htmlFor="tags">Tags</label>
                <div className="mt-1">
                  <input 
                    className="form-input block w-full rounded-md border-gray-300 shadow-sm sm:text-sm h-12 px-4" 
                    id="tags" 
                    name="tags" 
                    placeholder="Add tags to help people discover your work (e.g., abstract, landscape, portrait)" 
                    type="text"
                    value={formData.tags}
                    onChange={handleInputChange}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">Separate tags with commas.</p>
              </div>
            </div>

            {/* Pricing Section */}
            <div>
              <h3 className="text-lg font-medium leading-6 text-[var(--text-primary)]">Pricing</h3>
              <p className="mt-1 text-sm text-gray-500">Set prices for different print sizes.</p>
            </div>
            
            <div className="space-y-4">
              {formData.pricing.map((item, index) => (
                <div key={index} className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-5 items-end">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor={`size-${index}`}>Size</label>
                    <select 
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm rounded-md h-12" 
                      id={`size-${index}`} 
                      name={`size-${index}`}
                      value={item.size}
                      onChange={(e) => handlePricingChange(index, 'size', e.target.value)}
                    >
                      <option>Small (12" x 18")</option>
                      <option>Medium (18" x 24")</option>
                      <option>Large (24" x 36")</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor={`price-${index}`}>Price (₦)</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">₦</span>
                      </div>
                      <input 
                        className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm h-12" 
                        id={`price-${index}`} 
                        name={`price-${index}`} 
                        placeholder="0.00" 
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.price}
                        onChange={(e) => handlePricingChange(index, 'price', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-1">
                    {formData.pricing.length > 1 && (
                      <button 
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-full justify-center h-12" 
                        type="button"
                        onClick={() => removePricingOption(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              
              <button 
                className="w-full flex justify-center items-center px-4 py-2 border border-dashed border-gray-300 text-sm font-medium rounded-md text-[var(--primary-color)] bg-white hover:border-[var(--primary-color)] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]" 
                type="button"
                onClick={addPricingOption}
              >
                + Add another size
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            {/* Submit Buttons */}
            <div className="pt-5">
              <div className="flex justify-end">
                <button 
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]" 
                  type="button"
                  onClick={handleSaveDraft}
                >
                  Save as Draft
                </button>
                <button 
                  className="ml-3 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[var(--primary-color)] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]" 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Uploading...' : 'Submit Artwork'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ArtworkUploadForm;
