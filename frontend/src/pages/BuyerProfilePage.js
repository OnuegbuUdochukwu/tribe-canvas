import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BuyerProfilePage = () => {
  const [profile, setProfile] = useState({
    fullName: 'Adeola Adebayo',
    email: 'adeola.adebayo@example.com',
    phone: '+234 801 234 5678',
    address: '123, Main Street, Lagos, Nigeria'
  });
  const [orders, setOrders] = useState([
    {
      id: '12345',
      date: '2024-01-15',
      status: 'Shipped',
      total: 150.00
    },
    {
      id: '67890',
      date: '2023-12-20',
      status: 'Delivered',
      total: 200.00
    },
    {
      id: '11223',
      date: '2023-11-05',
      status: 'Cancelled',
      total: 50.00
    }
  ]);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
    fetchOrders();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      // This would fetch from your API
      // const response = await axios.get('/api/user/profile');
      // setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      // This would fetch from your API
      // const response = await axios.get('/api/user/orders');
      // setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleProfileUpdate = async () => {
    try {
      setLoading(true);
      // This would update via your API
      // await axios.put('/api/user/profile', profile);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-4">
        <div className="flex items-center gap-4 text-gray-800">
          <Link to="/">
            <div className="size-8 text-primary-600">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
          </Link>
          <h2 className="text-gray-900 text-xl font-bold leading-tight tracking-tight">Tribe Canvas</h2>
        </div>
        <div className="flex flex-1 justify-end items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-gray-600 hover:text-primary-600 text-sm font-medium leading-normal" to="/gallery">Shop</Link>
            <Link className="text-gray-600 hover:text-primary-600 text-sm font-medium leading-normal" to="/artists">Discover</Link>
            <Link className="text-gray-600 hover:text-primary-600 text-sm font-medium leading-normal" to="/ar-preview">AR Preview</Link>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900">
              <div className="text-gray-700 hover:text-gray-900" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
            </button>
            <Link to="/cart" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900">
              <div className="text-gray-700 hover:text-gray-900" data-icon="ShoppingBag" data-size="20px" data-weight="regular">
                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
                </svg>
              </div>
            </Link>
          </div>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAJqTYAJ43seaParCqui3g1SjOdNmrcrDxWiipTRx0JHmq_GnFYE3_7Scn4CDxS9mxnsTX1oWa5KLSUGj0wwAen1BF0FWLMRC9_7YyTlzamidPOPtKIYXklX7mRggQWNkwm9DP5q_G-uEITuR1-D9TenLHrplHsmwndmiKvqKMfgyOKQulavpF0bYwE_I6uZpLe6Ob3My7zpSmJP5R7uwUn7WMp_M1Cegm1enT6GiAr-XU9fw7LwogSZJwyT_DTU17pp1MHlxCygk")'}}></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-10 lg:px-20 xl:px-40 py-10 flex-1">
        <div className="layout-content-container mx-auto flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-4 p-4">
            <h1 className="text-gray-900 text-4xl font-bold tracking-tight">My Account</h1>
          </div>
          
          {/* Navigation Tabs */}
          <div className="pb-3 border-b border-gray-200">
            <div className="flex px-4 gap-8">
              <button 
                className={`flex flex-col items-center justify-center border-b-2 pb-3 pt-4 ${
                  activeTab === 'overview' 
                    ? 'border-b-primary-600 text-gray-900' 
                    : 'border-b-transparent text-gray-500 hover:text-gray-800 hover:border-b-gray-300'
                }`}
                onClick={() => setActiveTab('overview')}
              >
                <p className="text-sm font-semibold leading-normal">Overview</p>
              </button>
              <button 
                className={`flex flex-col items-center justify-center border-b-2 pb-3 pt-4 ${
                  activeTab === 'orders' 
                    ? 'border-b-primary-600 text-gray-900' 
                    : 'border-b-transparent text-gray-500 hover:text-gray-800 hover:border-b-gray-300'
                }`}
                onClick={() => setActiveTab('orders')}
              >
                <p className="text-sm font-semibold leading-normal">Orders</p>
              </button>
              <button 
                className={`flex flex-col items-center justify-center border-b-2 pb-3 pt-4 ${
                  activeTab === 'wishlist' 
                    ? 'border-b-primary-600 text-gray-900' 
                    : 'border-b-transparent text-gray-500 hover:text-gray-800 hover:border-b-gray-300'
                }`}
                onClick={() => setActiveTab('wishlist')}
              >
                <p className="text-sm font-semibold leading-normal">Wishlist</p>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 py-8">
            {/* Account Details */}
            <div className="flex flex-col gap-6">
              <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tight px-4">Account Details</h2>
              <div className="flex flex-col gap-6 px-4">
                <label className="flex flex-col w-full">
                  <p className="text-gray-700 text-sm font-medium leading-normal pb-2">Full Name</p>
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 border border-gray-300 bg-white h-12 placeholder:text-gray-400 px-4 text-sm font-normal" 
                    value={profile.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-gray-700 text-sm font-medium leading-normal pb-2">Email</p>
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 border border-gray-300 bg-white h-12 placeholder:text-gray-400 px-4 text-sm font-normal" 
                    value={profile.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-gray-700 text-sm font-medium leading-normal pb-2">Phone Number</p>
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 border border-gray-300 bg-white h-12 placeholder:text-gray-400 px-4 text-sm font-normal" 
                    value={profile.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </label>
                <label className="flex flex-col w-full">
                  <p className="text-gray-700 text-sm font-medium leading-normal pb-2">Address</p>
                  <input 
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 border border-gray-300 bg-white h-12 placeholder:text-gray-400 px-4 text-sm font-normal" 
                    value={profile.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </label>
                <div className="flex pt-2">
                  <button 
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-11 px-6 bg-primary-600 text-white text-sm font-semibold leading-normal hover:bg-primary-700"
                    onClick={handleProfileUpdate}
                    disabled={loading}
                  >
                    <span className="truncate">{loading ? 'Updating...' : 'Update Profile'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="flex flex-col gap-6">
              <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tight px-4">Recent Orders</h2>
              <div className="px-4 @container">
                <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-gray-600 text-xs font-semibold uppercase tracking-wider">Order ID</th>
                        <th className="px-4 py-3 text-left text-gray-600 text-xs font-semibold uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-gray-600 text-xs font-semibold uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-gray-600 text-xs font-semibold uppercase tracking-wider">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-4 py-3 text-primary-600 font-medium text-sm">#{order.id}</td>
                          <td className="px-4 py-3 text-gray-500 text-sm">{order.date}</td>
                          <td className="px-4 py-3 text-sm">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm font-medium">₦{order.total.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <Link className="text-gray-600 hover:text-primary-600 text-sm font-medium" to="/about">About</Link>
              <Link className="text-gray-600 hover:text-primary-600 text-sm font-medium" to="/contact">Contact</Link>
              <Link className="text-gray-600 hover:text-primary-600 text-sm font-medium" to="/faq">FAQ</Link>
              <Link className="text-gray-600 hover:text-primary-600 text-sm font-medium" to="/terms">Terms of Service</Link>
            </div>
            <p className="text-gray-500 text-sm">© 2024 Tribe Canvas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BuyerProfilePage;
