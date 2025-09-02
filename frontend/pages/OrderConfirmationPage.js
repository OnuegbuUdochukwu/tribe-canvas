import React from "react";

function OrderConfirmationPage() {
    return (
        <div
            className="bg-slate-50 min-h-screen text-[#0d171b]"
            style={{ fontFamily: "Work Sans, Noto Sans, sans-serif" }}
        >
            <main className="flex flex-1 justify-center py-12 sm:py-16 md:py-20">
                <div className="w-full max-w-2xl space-y-8 px-4 sm:px-6">
                    <div className="text-center">
                        <span className="material-icons text-6xl text-green-500">
                            check_circle_outline
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Thank you for your order!
                        </h2>
                        <p className="mt-2 text-slate-600">
                            Your order #123456789 has been placed and you will
                            receive a confirmation email shortly.
                        </p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold">
                                Order Summary
                            </h3>
                            <div className="mt-4 space-y-4">
                                <div className="flex justify-between">
                                    <p className="text-slate-600">Order Date</p>
                                    <p className="font-medium">July 26, 2024</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-slate-600">Total</p>
                                    <p className="font-medium">$120.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-200 p-6">
                            <h3 className="text-lg font-semibold">
                                Items Purchased
                            </h3>
                            <ul className="mt-4 space-y-4">
                                <li className="flex items-center gap-4">
                                    <div
                                        className="h-16 w-16 flex-shrink-0 rounded-md bg-cover bg-center"
                                        style={{
                                            backgroundImage:
                                                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAyUkHx9j5K8R3o7P1-o08ulzO7KTlpmH_JaeiCWhgbfWBPuCUX2n_l8F8Li54hF57chV2zQ1DyiaUakanoBAJC9X0YafhvlUK5Sne-gvUde2kBb-LNdTCAW-CgbCZrtmaxVUel4CjtLJDLZMiuj4iD36BDutBh68_FSOt2nxwT3q1ag9Ow2g9FTSiPJYm5amMWAlQtfwT4eb9nB7nU72PlPz26wtIiQI-llisMVXh88eNbeGk0L0fa1IgJHUKrWXjppn2ssRCIuzc)",
                                        }}
                                    ></div>
                                    <div className="flex-grow">
                                        <p className="font-medium">
                                            Abstract Art Print
                                        </p>
                                        <p className="text-sm text-slate-600">
                                            1 x $60.00
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div
                                        className="h-16 w-16 flex-shrink-0 rounded-md bg-cover bg-center"
                                        style={{
                                            backgroundImage:
                                                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDDFo_B30bsDyblBgozdnyr4V2ksOcra8k9ZSZuw26u-r0aoDW7vCl4SJTUjHX9dWe9MSXIDe22tlA_8P477_WrcZCZSJIUDnF1T6sQERIzsMYBw_AaTF4rsVQeDhAkowjULNFCeHNx0kuqdGDQSiyHQHbHrDdd21L5NVwJSKnl_Aqw37l2fuMVEmoO_G2PiRbM3GwoQFvNPQhhDw8WnzdG37Sqf69s9dM09yb2hrcUqm79FiBFj4raJrTAh1h71P_q-ApRSfA62Io)",
                                        }}
                                    ></div>
                                    <div className="flex-grow">
                                        <p className="font-medium">
                                            Portrait Art Print
                                        </p>
                                        <p className="text-sm text-slate-600">
                                            1 x $60.00
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="border-t border-slate-200 p-6">
                            <h3 className="text-lg font-semibold">
                                Shipping Information
                            </h3>
                            <div className="mt-4 space-y-2 text-slate-600">
                                <p>Aisha Adebayo</p>
                                <p>123 Lagos Avenue</p>
                                <p>Lagos, Lagos 100001</p>
                            </div>
                        </div>
                        <div className="border-t border-slate-200 p-6">
                            <h3 className="text-lg font-semibold">
                                Estimated Delivery
                            </h3>
                            <p className="mt-2 text-slate-600">
                                Your order is expected to arrive within 5-7
                                business days.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <button className="flex w-full items-center justify-center rounded-md bg-[#1193d4] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 sm:w-auto">
                            Track Order
                        </button>
                        <button className="flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 sm:w-auto">
                            Back to Homepage
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default OrderConfirmationPage;
