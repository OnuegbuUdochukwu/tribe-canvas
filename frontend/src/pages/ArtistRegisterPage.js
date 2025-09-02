// ArtistRegisterPage for Tribe Canvas
import React, { useState } from "react";

export default function ArtistRegisterPage() {
    const [tab, setTab] = useState("login");
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-800">
            <header className="flex items-center justify-between border-b border-b-[#e7eff3] px-10 py-4">
                <div className="flex items-center gap-3 text-2xl font-bold text-gray-900">
                    {/* Logo SVG */}
                    <svg
                        className="h-8 w-8 text-blue-500"
                        fill="none"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                            fill="currentColor"
                        ></path>
                        <path
                            clipRule="evenodd"
                            d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                            fill="currentColor"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                    <span className="tracking-tight">Tribe Canvas</span>
                </div>
                <nav className="flex items-center gap-8 text-sm font-medium">
                    <a
                        className="text-gray-900 hover:text-blue-500 transition-colors"
                        href="/gallery"
                    >
                        Explore
                    </a>
                    <a
                        className="text-gray-900 hover:text-blue-500 transition-colors"
                        href="/about"
                    >
                        About
                    </a>
                    <a
                        className="text-gray-900 hover:text-blue-500 transition-colors"
                        href="/contact"
                    >
                        Contact
                    </a>
                    <button className="rounded-lg bg-blue-100 px-5 py-2.5 font-bold text-gray-900 hover:bg-gray-200 transition-colors">
                        Log In
                    </button>
                </nav>
            </header>
            <main className="flex flex-1 items-center justify-center py-16">
                <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-lg">
                    <div className="flex justify-center space-x-4">
                        <button
                            className={`px-6 py-2 text-lg font-semibold border-b-2 ${
                                tab === "login"
                                    ? "border-blue-500 text-blue-500"
                                    : "border-transparent text-gray-500 hover:border-gray-300"
                            }`}
                            onClick={() => setTab("login")}
                        >
                            Log In
                        </button>
                        <button
                            className={`px-6 py-2 text-lg font-semibold border-b-2 ${
                                tab === "register"
                                    ? "border-blue-500 text-blue-500"
                                    : "border-transparent text-gray-500 hover:border-gray-300"
                            }`}
                            onClick={() => setTab("register")}
                        >
                            Sign Up
                        </button>
                    </div>
                    {tab === "login" ? (
                        <div id="login-form">
                            <h2 className="text-center text-3xl font-bold text-gray-900">
                                Artist Login
                            </h2>
                            <form className="mt-8 space-y-6">
                                <div className="space-y-4 rounded-md">
                                    <div>
                                        <input
                                            className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                            name="email"
                                            placeholder="Email address"
                                            required
                                            type="email"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            type="password"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <a
                                        className="font-medium text-blue-500 hover:text-blue-700 text-sm"
                                        href="#"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <div>
                                    <button
                                        className="group relative flex w-full justify-center rounded-lg border border-transparent bg-blue-500 py-3 px-4 text-sm font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                                        type="submit"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div id="signup-form">
                            <h2 className="text-center text-3xl font-bold text-gray-900">
                                Create Artist Account
                            </h2>
                            <form className="mt-8 space-y-6">
                                <div className="space-y-4 rounded-md">
                                    <div>
                                        <input
                                            className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                            name="email"
                                            placeholder="Email address"
                                            required
                                            type="email"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            type="password"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                            name="confirm-password"
                                            placeholder="Confirm Password"
                                            required
                                            type="password"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="group relative flex w-full justify-center rounded-lg border border-transparent bg-blue-500 py-3 px-4 text-sm font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                                        type="submit"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
