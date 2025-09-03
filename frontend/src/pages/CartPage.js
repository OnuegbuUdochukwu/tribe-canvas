import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity > 0) {
            updateQuantity(itemId, newQuantity);
        }
    };

    return (
        <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--secondary-color)] px-10 py-4">
                    <Link to="/" className="flex items-center gap-3 text-[var(--text-primary)]">
                        <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                            <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                        <h1 className="font-newsreader text-2xl font-bold leading-tight tracking-tight">Tribe Canvas</h1>
                    </Link>
                    <nav className="hidden items-center gap-8 lg:flex">
                        <Link to="/gallery" className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Shop</Link>
                        <Link to="/artists" className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Artists</Link>
                        <Link to="/collections" className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Collections</Link>
                        <Link to="/about" className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">About</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="relative flex items-center justify-center rounded-lg h-10 px-4 bg-[var(--secondary-color)] text-[var(--text-primary)] text-sm font-bold leading-normal tracking-wide hover:bg-gray-200 transition-colors">
                            <span className="material-icons mr-2 text-xl">shopping_cart</span>
                            <span className="truncate">Cart</span>
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary-color)] text-xs text-white">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>
                        <button className="size-10 overflow-hidden rounded-full">
                            <img 
                                alt="User profile picture" 
                                className="h-full w-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCor59ShPkAOChqDFE444oCE_4rhqRVBDPz8D18upbFPgq_52TI4DM4gAB2zs5bLSvmbSJTmRj-nfngRLeYSAPxfDnPA-q1F1wLJWE1oBCjsw39xzXGo9CtSrtjoyrTshkHwzuFe_4hvWjbTlbTARYWaLIuKcaz25CFKEcvV4ELWJdggjmadQNWC07i8k4hwi3rZNLpu_igxLCHQUG8NDghOK7IxZHHoxz8RFMvG9TKw1x5-xbeh0oHozVvISB1IDRj6e0NUBTrdb0"
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 bg-white">
                <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="font-newsreader text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-8">Your Cart</h2>
                        
                        {cartItems.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-lg text-gray-500 mb-4">Your cart is empty</p>
                                <Link to="/gallery" className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold tracking-wide shadow-md hover:bg-blue-600 transition-colors">
                                    Start Shopping
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-6">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                                            <div className="flex items-start gap-4">
                                                <div 
                                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0" 
                                                    style={{backgroundImage: `url("${item.imageUrl}")`}}
                                                ></div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            <p className="font-newsreader text-xl font-medium text-[var(--text-primary)]">{item.title}</p>
                                                            <p className="text-sm text-[var(--text-secondary)] mt-1">
                                                                Size: {item.size || 'Standard'}, Frame: {item.frame || 'None'}
                                                            </p>
                                                        </div>
                                                        <p className="text-lg font-medium text-[var(--text-primary)]">${item.price.toFixed(2)}</p>
                                                    </div>
                                                    <div className="mt-4 flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <button 
                                                                className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
                                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                            >
                                                                <span className="material-icons">remove</span>
                                                            </button>
                                                            <span className="w-10 text-center font-medium">{item.quantity}</span>
                                                            <button 
                                                                className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
                                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                            >
                                                                <span className="material-icons">add</span>
                                                            </button>
                                                        </div>
                                                        <button 
                                                            className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                                                            onClick={() => removeFromCart(item.id)}
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Cart Summary */}
                                <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-base font-medium text-[var(--text-primary)]">
                                            <p>Subtotal</p>
                                            <p>${subtotal.toFixed(2)}</p>
                                        </div>
                                        <div className="flex justify-between text-sm text-[var(--text-secondary)]">
                                            <p>Shipping</p>
                                            <p>Calculated at checkout</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 border-t border-gray-200 pt-4">
                                        <div className="flex justify-between text-lg font-bold text-[var(--text-primary)]">
                                            <p>Total</p>
                                            <p>${subtotal.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <Link to="/checkout" className="w-full flex items-center justify-center rounded-lg h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold tracking-wide shadow-md hover:bg-blue-600 transition-colors">
                                            Proceed to Checkout
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CartPage;
