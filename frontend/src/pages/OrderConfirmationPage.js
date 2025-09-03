import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const orderData = location.state?.orderData || {
    orderId: '123456789',
    orderDate: 'July 26, 2024',
    total: '₦120,000.00',
    items: [
      {
        id: 1,
        title: 'Abstract Art Print',
        price: '₦60,000.00',
        quantity: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyUkHx9j5K8R3o7P1-o08ulzO7KTlpmH_JaeiCWhgbfWBPuCUX2n_l8F8Li54hF57chV2zQ1DyiaUakanoBAJC9X0YafhvlUK5Sne-gvUde2kBb-LNdTCAW-CgbCZrtmaxVUel4CjtLJDLZMiuj4iD36BDutBh68_FSOt2nxwT3q1ag9Ow2g9FTSiPJYm5amMWAlQtfwT4eb9nB7nU72PlPz26wtIiQI-llisMVXh88eNbeGk0L0fa1IgJHUKrWXjppn2ssRCIuzc'
      },
      {
        id: 2,
        title: 'Portrait Art Print',
        price: '₦60,000.00',
        quantity: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDFo_B30bsDyblBgozdnyr4V2ksOcra8k9ZSZuw26u-r0aoDW7vCl4SJTUjHX9dWe9MSXIDe22tlA_8P477_WrcZCZSJIUDnF1T6sQERIzsMYBw_AaTF4rsVQeDhAkowjULNFCeHNx0kuqdGDQSiyHQHbHrDdd21L5NVwJSKnl_Aqw37l2fuMVEmoO_G2PiRbM3GwoQFvNPQhhDw8WnzdG37Sqf69s9dM09yb2hrcUqm79FiBFj4raJrTAh1h71P_q-ApRSfA62Io'
      }
    ],
    shippingAddress: {
      name: 'Aisha Adebayo',
      address: '123 Lagos Avenue',
      city: 'Lagos, Lagos 100001'
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 px-10 py-4">
        <div className="flex items-center gap-3 text-[#0d171b]">
          <Link to="/">
            <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </Link>
          <h1 className="text-xl font-bold tracking-tight">Tribe Canvas</h1>
        </div>
        <nav className="flex flex-1 justify-end gap-8">
          <div className="hidden items-center gap-8 md:flex">
            <Link className="text-sm font-medium hover:text-[var(--primary-color)]" to="/gallery">Shop</Link>
            <Link className="text-sm font-medium hover:text-[var(--primary-color)]" to="/artists">Discover</Link>
            <Link className="text-sm font-medium hover:text-[var(--primary-color)]" to="/about">About</Link>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800">
              <span className="material-icons text-xl">search</span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800">
              <span className="material-icons text-xl">person_outline</span>
            </button>
            <Link to="/cart" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800">
              <span className="material-icons text-xl">shopping_bag</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 justify-center py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-2xl space-y-8 px-4 sm:px-6">
          <div className="text-center">
            <span className="material-icons text-6xl text-green-500">check_circle_outline</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Thank you for your order!</h2>
            <p className="mt-2 text-slate-600">
              Your order #{orderData.orderId} has been placed and you will receive a confirmation email shortly.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
            {/* Order Summary */}
            <div className="p-6">
              <h3 className="text-lg font-semibold">Order Summary</h3>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between">
                  <p className="text-slate-600">Order Date</p>
                  <p className="font-medium">{orderData.orderDate}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-slate-600">Total</p>
                  <p className="font-medium">{orderData.total}</p>
                </div>
              </div>
            </div>

            {/* Items Purchased */}
            <div className="border-t border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Items Purchased</h3>
              <ul className="mt-4 space-y-4">
                {orderData.items.map((item) => (
                  <li key={item.id} className="flex items-center gap-4">
                    <div 
                      className="h-16 w-16 flex-shrink-0 rounded-md bg-cover bg-center" 
                      style={{backgroundImage: `url("${item.image}")`}}
                    ></div>
                    <div className="flex-grow">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.quantity} x {item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Information */}
            <div className="border-t border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              <div className="mt-4 space-y-2 text-slate-600">
                <p>{orderData.shippingAddress.name}</p>
                <p>{orderData.shippingAddress.address}</p>
                <p>{orderData.shippingAddress.city}</p>
              </div>
            </div>

            {/* Estimated Delivery */}
            <div className="border-t border-slate-200 p-6">
              <h3 className="text-lg font-semibold">Estimated Delivery</h3>
              <p className="mt-2 text-slate-600">Your order is expected to arrive within 5-7 business days.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link 
              className="flex w-full items-center justify-center rounded-md bg-[var(--primary-color)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 sm:w-auto" 
              to="/order-history"
            >
              Track Order
            </Link>
            <Link 
              className="flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 sm:w-auto" 
              to="/"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderConfirmationPage;
