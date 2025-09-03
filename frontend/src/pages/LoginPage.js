import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });
      login(response.data); 
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eff3] px-10 py-4">
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-[var(--text-primary)]" style={{fontFamily: 'Newsreader, serif'}}>
            <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <h1 className="tracking-tight">Tribe Canvas</h1>
          </Link>
          <nav className="flex items-center gap-8 text-sm font-medium">
            <Link to="/gallery" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Explore</Link>
            <Link to="/about" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">About</Link>
            <Link to="/contact" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Contact</Link>
            <button className="rounded-lg bg-[var(--secondary-color)] px-5 py-2.5 font-bold text-[var(--text-primary)] hover:bg-gray-200 transition-colors">Log In</button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 items-center justify-center py-16">
          <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-lg">
            {/* Tab Navigation */}
            <div className="flex justify-center space-x-4">
              <button 
                className={`px-6 py-2 text-lg font-semibold border-b-2 transition-colors ${
                  isLoginMode 
                    ? 'border-[var(--primary-color)] text-[var(--primary-color)]' 
                    : 'text-gray-500 border-transparent hover:border-gray-300'
                }`}
                onClick={() => setIsLoginMode(true)}
              >
                Log In
              </button>
              <button 
                className={`px-6 py-2 text-lg font-semibold border-b-2 transition-colors ${
                  !isLoginMode 
                    ? 'border-[var(--primary-color)] text-[var(--primary-color)]' 
                    : 'text-gray-500 border-transparent hover:border-gray-300'
                }`}
                onClick={() => setIsLoginMode(false)}
              >
                Sign Up
              </button>
            </div>

            {/* Login Form */}
            {isLoginMode && (
              <div>
                <h2 className="text-center text-3xl font-bold text-gray-900" style={{fontFamily: 'Newsreader, serif'}}>Artist Login</h2>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {error && <p className="text-red-600 text-center">{error}</p>}
                  <div className="space-y-4 rounded-md">
                    <div>
                      <label className="sr-only" htmlFor="email-address">Email address</label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="password">Password</label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a className="font-medium text-[var(--primary-color)] hover:text-blue-500" href="#">Forgot your password?</a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-lg border border-transparent bg-[var(--primary-color)] py-3 px-4 text-sm font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Log in
                    </button>
                  </div>
                </form>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div>
                      <a className="inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50" href="#">
                        <span className="sr-only">Sign in with Google</span>
                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                    <div>
                      <a className="inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50" href="#">
                        <span className="sr-only">Sign in with Facebook</span>
                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" fillRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sign Up Form */}
            {!isLoginMode && (
              <div>
                <h2 className="text-center text-3xl font-bold text-gray-900" style={{fontFamily: 'Newsreader, serif'}}>Create Artist Account</h2>
                <form className="mt-8 space-y-6">
                  <div className="space-y-4 rounded-md">
                    <div>
                      <label className="sr-only" htmlFor="signup-email">Email address</label>
                      <input
                        id="signup-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                        placeholder="Email address"
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="signup-password">Password</label>
                      <input
                        id="signup-password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="confirm-password">Confirm Password</label>
                      <input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[var(--primary-color)] focus:outline-none focus:ring-[var(--primary-color)] sm:text-sm"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-lg border border-transparent bg-[var(--primary-color)] py-3 px-4 text-sm font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">Or sign up with</span>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div>
                      <a className="inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50" href="#">
                        <span className="sr-only">Sign in with Google</span>
                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                    <div>
                      <a className="inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50" href="#">
                        <span className="sr-only">Sign in with Facebook</span>
                        <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" fillRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;