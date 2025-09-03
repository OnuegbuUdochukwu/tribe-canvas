import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PayoutStatusPage = () => {
  const [payouts, setPayouts] = useState({
    pending: { amount: 250.00, estimatedDate: 'July 15, 2024' },
    completed: [
      { id: 1, date: 'June 15, 2024', amount: 150.00, status: 'Completed' },
      { id: 2, date: 'May 15, 2024', amount: 100.00, status: 'Completed' },
      { id: 3, date: 'April 15, 2024', amount: 50.00, status: 'Completed' }
    ]
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPayouts();
  }, []);

  const fetchPayouts = async () => {
    try {
      setLoading(true);
      // This would fetch from your API
      // const response = await axios.get('/api/artist/payouts');
      // setPayouts(response.data);
    } catch (error) {
      console.error('Error fetching payouts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRequestPayout = async () => {
    try {
      setLoading(true);
      // This would make an API call to request payout
      // await axios.post('/api/artist/payouts/request');
      alert('Payout request submitted successfully!');
    } catch (error) {
      console.error('Error requesting payout:', error);
      alert('Failed to request payout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white/80 px-4 sm:px-6 lg:px-10 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                  <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </Link>
              <h1 className="text-xl font-bold text-[var(--text-primary)]">Tribe Canvas</h1>
            </div>
            <nav className="hidden items-center gap-8 lg:flex">
              <Link className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)]" to="/">Home</Link>
              <Link className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)]" to="/gallery">Shop</Link>
              <Link className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)]" to="/artists">Artists</Link>
              <Link className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)]" to="/ar-preview">AR Preview</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="hidden h-10 w-10 items-center justify-center rounded-lg bg-[var(--secondary-color)] text-[var(--text-primary)] transition-colors hover:bg-gray-200 sm:flex">
                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </button>
              <button className="hidden h-10 w-10 items-center justify-center rounded-lg bg-[var(--secondary-color)] text-[var(--text-primary)] transition-colors hover:bg-gray-200 sm:flex">
                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
                </svg>
              </button>
              <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1DqN93Ebano9kk7WZnca0d7SuJi7Vq4ezVz3hogSzcg4yL16CFO_gzuBN58RPS0JKcu-yPLnh-BvyqgukPUIpWh8bK5rze3UMWYYK1ZM_UKDr2zJmyiMid5vaHTApZ0TLrIx6_wK9b46NL6dVBsnjLm4gmc1wD_21Fsk07DT26HpZhiIH5XF5Quu8MZKJ0cyBQ9Q2dwX2VVPDSeiZRUFZnat-5_DqNCP1O402BMpTkCjh7TBKTisW5UkCdWil1gvbwUuuqi1p5H8")'}}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)]">Payouts</h2>
              <p className="mt-1 text-[var(--text-secondary)]">Manage your earnings and payout history.</p>
            </div>
            <button 
              className="flex items-center justify-center gap-2 rounded-lg bg-[var(--primary-color)] px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
              onClick={handleRequestPayout}
              disabled={loading}
            >
              <span>{loading ? 'Processing...' : 'Request Payout'}</span>
              <svg fill="currentColor" height="16" viewBox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM216,72H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM40,184H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"></path>
              </svg>
            </button>
          </div>

          <div className="space-y-8">
            {/* Pending Payouts */}
            <section>
              <h3 className="mb-4 text-xl font-bold text-[var(--text-primary)]">Pending Payouts</h3>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--secondary-color)] text-[var(--primary-color)]">
                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[var(--text-primary)]">₦{payouts.pending.amount.toFixed(2)}</p>
                    <p className="text-sm text-[var(--text-secondary)]">Estimated payout date: {payouts.pending.estimatedDate}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Completed Payouts */}
            <section>
              <h3 className="mb-4 text-xl font-bold text-[var(--text-primary)]">Completed Payouts</h3>
              <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500" scope="col">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500" scope="col">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500" scope="col">Status</th>
                      <th className="relative px-6 py-3" scope="col">
                        <span className="sr-only">Details</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {payouts.completed.map((payout) => (
                      <tr key={payout.id}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{payout.date}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">₦{payout.amount.toFixed(2)}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{payout.status}</span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <Link className="text-[var(--primary-color)] hover:text-blue-700" to={`/payouts/${payout.id}`}>View</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PayoutStatusPage;
