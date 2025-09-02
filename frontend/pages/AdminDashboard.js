import React from "react";

const recentOrders = [
    {
        id: "#12345",
        customer: "Aisha Bello",
        date: "2023-11-15",
        status: "Shipped",
        statusColor: "green",
        total: 150.0,
    },
    {
        id: "#12346",
        customer: "Chukwudi Okoro",
        date: "2023-11-14",
        status: "Processing",
        statusColor: "yellow",
        total: 200.0,
    },
    {
        id: "#12347",
        customer: "Fatima Hassan",
        date: "2023-11-13",
        status: "Delivered",
        statusColor: "blue",
        total: 100.0,
    },
    {
        id: "#12348",
        customer: "Emeka Nwosu",
        date: "2023-11-12",
        status: "Shipped",
        statusColor: "green",
        total: 180.0,
    },
    {
        id: "#12349",
        customer: "Ngozi Adebayo",
        date: "2023-11-11",
        status: "Processing",
        statusColor: "yellow",
        total: 120.0,
    },
];

function AdminDashboard() {
    return (
        <div className="flex min-h-screen font-inter bg-gray-50">
            <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
                <div className="p-6">
                    <h1 className="text-xl font-bold text-gray-900">
                        Tribe Canvas
                    </h1>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li>
                            <button className="flex w-full items-center gap-3 px-6 py-3 text-[#1193d4] bg-blue-50 border-l-4 border-[#1193d4] text-left">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <span className="text-sm font-semibold">
                                    Dashboard
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="flex w-full items-center gap-3 px-6 py-3 text-gray-500 hover:bg-gray-50 text-left">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span className="text-sm font-medium">
                                    Artists
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="flex w-full items-center gap-3 px-6 py-3 text-gray-500 hover:bg-gray-50 text-left">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <rect
                                        height="18"
                                        rx="2"
                                        ry="2"
                                        width="18"
                                        x="3"
                                        y="3"
                                    ></rect>
                                    <circle cx="9" cy="9" r="2"></circle>
                                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                                </svg>
                                <span className="text-sm font-medium">
                                    Artworks
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="flex w-full items-center gap-3 px-6 py-3 text-gray-500 hover:bg-gray-50 text-left">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16v-2"></path>
                                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                                    <path d="M12 22V12"></path>
                                </svg>
                                <span className="text-sm font-medium">
                                    Orders
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="flex w-full items-center gap-3 px-6 py-3 text-gray-500 hover:bg-gray-50 text-left">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M10 22v-6.57"></path>
                                    <path d="M12 22a8 8 0 0 0 8-8V6.5"></path>
                                    <path d="M12 2a8 8 0 0 0-8 8v0"></path>
                                    <path d="M2 14.5a8 8 0 0 0 8 8h0"></path>
                                    <path d="M14 2v6.57"></path>
                                    <path d="M15.43 7.84a1.5 1.5 0 0 0-1.43-.84h-4a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1-1.43-.84"></path>
                                    <path d="M5.13 4.5a2.5 2.5 0 0 1 4.33 1.5V10"></path>
                                    <path d="m20 11-3 3 3 3"></path>
                                </svg>
                                <span className="text-sm font-medium">
                                    Fulfillment
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-8">
                <header>
                    <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                        Dashboard
                    </h2>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500">
                            Total Sales
                        </h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">
                            $25,000
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500">
                            Active Artists
                        </h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">
                            150
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500">
                            Pending Orders
                        </h3>
                        <p className="text-3xl font-bold text-gray-900 mt-2">
                            25
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Recent Orders
                    </h3>
                    <div className="mt-4 bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Order ID
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Customer
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {recentOrders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {order.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {order.customer}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {order.date}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${order.statusColor}-100 text-${order.statusColor}-800`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                                            ${order.total.toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdminDashboard;
