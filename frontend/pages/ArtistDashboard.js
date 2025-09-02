import React from "react";

const stats = [
    { label: "Total Sales", value: 125 },
    { label: "Total Earnings", value: "$5,250" },
    { label: "Active Artworks", value: 35 },
];

const orders = [
    {
        id: "#12345",
        artwork: "Abstract Landscape",
        date: "2024-07-26",
        status: "Shipped",
        statusColor: "blue",
    },
    {
        id: "#12346",
        artwork: "Portrait of a Woman",
        date: "2024-07-25",
        status: "Processing",
        statusColor: "yellow",
    },
    {
        id: "#12347",
        artwork: "Cityscape at Night",
        date: "2024-07-24",
        status: "Delivered",
        statusColor: "green",
    },
    {
        id: "#12348",
        artwork: "Still Life with Fruits",
        date: "2024-07-23",
        status: "Shipped",
        statusColor: "blue",
    },
    {
        id: "#12349",
        artwork: "Modern Architecture",
        date: "2024-07-22",
        status: "Processing",
        statusColor: "yellow",
    },
];

function ArtistDashboard() {
    return (
        <div className="flex min-h-screen font-manrope bg-slate-50">
            <aside className="w-64 bg-white border-r border-slate-200 flex-col fixed h-full">
                <div className="p-6">
                    <div className="flex items-center gap-3">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                            style={{
                                backgroundImage:
                                    "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBe1xW1NAB_dIZZNhFlbav7-AcUZRVLYlELjL5lUImdO9VUN4sm96qI7WtKhMf0kwOBm6AAR5Ll9wpzO5qtF5RNDsBHLyOSnompO8fCg0gU_pBETPIRtEDUtU34s1l-FovYa_396YaGMujt4iVc1FCXaRNYCKzsCGh75Wj2o4AGFeQBZRP4P_lbLjOUAalqUhn59E3Ydow2Hr7bNOe5w6cJe8PamquQE_yL2bcfumUWA5jpuWJpAnrVEtNvcN6eiS4E5EdywX0joDk)",
                            }}
                        ></div>
                        <div>
                            <h1 className="text-slate-800 text-base font-semibold">
                                Sophia Eze
                            </h1>
                            <p className="text-slate-500 text-sm">Artist</p>
                        </div>
                    </div>
                </div>
                <nav className="mt-8 px-3">
                    <ul className="space-y-2">
                        <li>
                            <button className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-50 text-primary-600 font-bold w-full">
                                {/* Dashboard icon */}
                                <span>Dashboard</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 w-full">
                                <span>Artworks</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 w-full">
                                <span>Orders</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 w-full">
                                <span>Payouts</span>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 w-full">
                                <span>Settings</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="ml-64 flex-1 bg-slate-50 p-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Dashboard
                    </h1>
                </header>
                <section className="mb-10">
                    <h2 className="text-xl font-semibold text-slate-700 mb-4">
                        Quick Stats
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
                            >
                                <p className="text-slate-500 text-sm font-medium mb-2">
                                    {stat.label}
                                </p>
                                <p className="text-slate-800 text-3xl font-bold">
                                    {stat.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-xl font-semibold text-slate-700 mb-4">
                        Recent Orders
                    </h2>
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="p-4 text-sm font-semibold text-slate-600">
                                        Order ID
                                    </th>
                                    <th className="p-4 text-sm font-semibold text-slate-600">
                                        Artwork
                                    </th>
                                    <th className="p-4 text-sm font-semibold text-slate-600">
                                        Date
                                    </th>
                                    <th className="p-4 text-sm font-semibold text-slate-600">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {orders.map((order, idx) => (
                                    <tr key={order.id}>
                                        <td className="p-4 text-sm font-medium text-slate-800">
                                            {order.id}
                                        </td>
                                        <td className="p-4 text-sm text-slate-500">
                                            {order.artwork}
                                        </td>
                                        <td className="p-4 text-sm text-slate-500">
                                            {order.date}
                                        </td>
                                        <td className="p-4">
                                            <span
                                                className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-${order.statusColor}-100 text-${order.statusColor}-800`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ArtistDashboard;
