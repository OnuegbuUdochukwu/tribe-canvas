// BuyerRegisterPage for Tribe Canvas
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BuyerRegisterPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 px-10 py-4 shadow-sm">
        <Link to="/" className="flex items-center gap-4 text-gray-800">
          <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
            <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
          <h1 className="text-xl font-bold tracking-tight">Tribe Canvas</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/gallery" className="text-sm font-medium text-gray-600 hover:text-[var(--primary-color)] transition-colors">Shop</Link>
          <Link to="/artists" className="text-sm font-medium text-gray-600 hover:text-[var(--primary-color)] transition-colors">Artists</Link>
          <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-[var(--primary-color)] transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-[var(--primary-color)] transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-transparent text-gray-800 text-sm font-bold leading-normal tracking-wide border border-gray-300 hover:bg-gray-100 transition-colors">
            <span className="truncate">Login</span>
          </button>
          <button className="hidden md:flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 bg-transparent text-gray-600 gap-2 text-sm font-bold leading-normal tracking-wide min-w-0 px-2.5 hover:bg-gray-100 transition-colors">
            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </button>
          <button className="hidden md:flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 bg-transparent text-gray-600 gap-2 text-sm font-bold leading-normal tracking-wide min-w-0 px-2.5 hover:bg-gray-100 transition-colors">
            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-lg shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to Tribe Canvas</h2>
            <p className="mt-2 text-center text-sm text-gray-600">Access your account or create a new one</p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button 
              className={`w-1/2 py-4 px-1 text-center text-sm font-medium transition-colors ${
                isLoginMode 
                  ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setIsLoginMode(true)}
            >
              Login
            </button>
            <button 
              className={`w-1/2 py-4 px-1 text-center text-sm font-medium transition-colors ${
                !isLoginMode 
                  ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setIsLoginMode(false)}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          {isLoginMode && (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label className="sr-only" htmlFor="login-email">Email address</label>
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="form-input appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="login-password">Password</label>
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="form-input appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <a className="text-sm text-[var(--primary-color)] hover:underline" href="#">Forgot your password?</a>
              </div>
              <div>
                <button 
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-[var(--primary-color)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)] transition-colors"
                >
                  Sign in
                </button>
              </div>
            </form>
          )}

          {/* Register Form */}
          {!isLoginMode && (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label className="sr-only" htmlFor="register-email">Email address</label>
                  <input
                    id="register-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="form-input appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="register-password">Password</label>
                  <input
                    id="register-password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="form-input appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="confirm-password">Confirm Password</label>
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="form-input appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <button 
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-[var(--primary-color)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)] transition-colors"
                >
                  Create Account
                </button>
              </div>
            </form>
          )}

          {/* Social Login Section */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <a className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
                <span className="sr-only">Sign in with SearchEngineCo</span>
                <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M21.545,11.236 C21.545,10.518 21.482,9.827 21.364,9.164 L12,9.164 L12,13.109 L17.609,13.109 C17.382,14.418 16.636,15.545 15.4,16.318 L15.4,19.091 L19.236,19.091 C20.764,17.709 21.545,15.745 21.545,13.336 C21.545,12.591 21.545,11.891 21.545,11.236 Z" fillRule="evenodd"></path>
                  <path clipRule="evenodd" d="M12,22 C14.955,22 17.455,21.036 19.236,19.091 L15.4,16.318 C14.418,17.018 13.218,17.436 12,17.436 C9.464,17.436 7.345,15.782 6.564,13.564 L2.618,13.564 L2.618,16.436 C4.391,19.855 7.9,22 12,22 Z" fillRule="evenodd"></path>
                  <path clipRule="evenodd" d="M6.564,13.564 C6.345,12.873 6.218,12.145 6.218,11.382 C6.218,10.618 6.345,9.891 6.564,9.2 L2.618,6.327 C1.745,8.018 1.255,10.055 1.255,12.018 C1.255,14 1.745,15.982 2.618,17.673 L6.564,14.782 L6.564,13.564 Z" fillRule="evenodd"></path>
                  <path clipRule="evenodd" d="M12,5.327 C13.327,5.327 14.545,5.8 15.4,6.618 L19.309,2.709 C17.455,1.018 14.955,0 12,0 C7.9,0 4.391,2.145 2.618,5.564 L6.564,8.436 C7.345,6.218 9.464,4.564 12,4.564 L12,5.327 Z" fillRule="evenodd"></path>
                </svg>
                SearchEngineCo
              </a>
            </div>
            <div>
              <a className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
                <span className="sr-only">Sign in with SocialMediaCo</span>
                <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22,12 C22,6.477 17.523,2 12,2 C6.477,2 2,6.477 2,12 C2,16.99 5.657,21.128 10.438,21.826 L10.438,14.86 L7.896,14.86 L7.896,12 L10.438,12 L10.438,9.792 C10.438,7.29 11.93,5.908 14.215,5.908 C15.308,5.908 16.462,6.1 16.462,6.1 L16.462,8.56 L15.012,8.56 C13.75,8.56 13.562,9.333 13.562,10.124 L13.562,12 L16.338,12 L15.896,14.86 L13.562,14.86 L13.562,21.826 C18.343,21.128 22,16.99 22,12 Z" fillRule="evenodd"></path>
                </svg>
                SocialMediaCo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuyerRegisterPage;
