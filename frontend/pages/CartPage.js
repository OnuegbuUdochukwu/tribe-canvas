import React from "react";

const cartItems = [
    {
        id: 1,
        title: "The Palm Tree",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf0Ib7u8i2PiE3XOmmu-r0HbznQ5uPw3ZyrVOfDQZAzE8B5siqGxEbB_QWhG7bSKbDARb45V8bA7qusI1rygyQnJ6XbLzvs_KbbY-i-HMzKh7AtOQnNd2b3CeauUktUrVFP_MLW0uC0IzaG64klocc7G2TwVpHyYnK7IXBSWiN6hukm-RbeFl2oCgHAA6meZ3eM2qDdSZNP2lh1dE3Id56HlTgsrXT8_GqCcF6U73iInOh6EJWk7j9ceAngGNg0g7vHtAtQ7RHx9w",
        size: "12x16 in",
        frame: "Black",
        price: 120.0,
        quantity: 1,
    },
    {
        id: 2,
        title: "The Market Scene",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASIGwkaOTt8BZwBzkXGKkZzF-vQ3PEXQbPWPj3Gv8AqnkiD7jWl9QDwQwbuvqMoUbOrUZJewy1WXuo-Iqa6QSU-aeM6OrUmA-2bJlzFC7EY86pwoxxPQCE6oYql5pV0HczDWJOPMPlP1Vu0QrXgrn2wG1qZW4Fj2zHIVQPaNPXkHO0z33zb9qzP1nJ3g58MD7HZ9lug2-mxvtjmyWw6Sw7_fsaosLm1Ay1cVF-yAEUrEXHHoZyJ0yVzT-Skk668IQTGOvGjBlUJCg",
        size: "16x20 in",
        frame: "White",
        price: 150.0,
        quantity: 1,
    },
];

function CartPage() {
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="bg-slate-50 min-h-screen font-['Noto Sans'] text-[#0d171b]">
            <main className="flex-1 bg-white">
                <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="font-newsreader text-4xl font-bold tracking-tight text-[#0d171b] mb-8">
                            Your Cart
                        </h2>
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0"
                                            style={{
                                                backgroundImage: `url(${item.image})`,
                                            }}
                                        ></div>
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="font-newsreader text-xl font-medium text-[#0d171b]">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-sm text-[#4c809a] mt-1">
                                                        Size: {item.size},
                                                        Frame: {item.frame}
                                                    </p>
                                                </div>
                                                <p className="text-lg font-medium text-[#0d171b]">
                                                    ${item.price.toFixed(2)}
                                                </p>
                                            </div>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100">
                                                        <span className="material-icons">
                                                            remove
                                                        </span>
                                                    </button>
                                                    <span className="w-10 text-center font-medium">
                                                        {item.quantity}
                                                    </span>
                                                    <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100">
                                                        <span className="material-icons">
                                                            add
                                                        </span>
                                                    </button>
                                                </div>
                                                <button className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
                                <div className="space-y-4">
                                    <div className="flex justify-between text-base font-medium text-[#0d171b]">
                                        <p>Subtotal</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between text-sm text-[#4c809a]">
                                        <p>Shipping</p>
                                        <p>Calculated at checkout</p>
                                    </div>
                                </div>
                                <div className="mt-6 border-t border-gray-200 pt-4">
                                    <div className="flex justify-between text-lg font-bold text-[#0d171b]">
                                        <p>Total</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-[#1193d4] text-white text-base font-bold tracking-wide shadow-md hover:bg-blue-600 transition-colors">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CartPage;
