import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";
import CartContext from "../CartContext";

const NavBar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.length;

    return (
        <nav>
            <div className="logo">
                <Link to="/">Tribe Canvas</Link>
            </div>
            <div className="links">
                <Link to="/gallery">Gallery</Link>
                <Link to="/cart">Cart ({totalItems})</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/orders">Order History</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
