
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {

    // Cart State
    const [cart, setCart] = useState([]);

    // Add Product to Cart
    const addToCart = (product) => {

        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {

            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                )
            );

        } else {

            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1
                }
            ]);

        }
    };

    // Calculate Total Items
    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Increase Quantity
    const increaseQuantity = (id) => {

        setCart(
            cart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    };

    // Decrease Quantity
    const decreaseQuantity = (id) => {

        setCart(
            cart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity - 1
                    }
                    : item
            ).filter((item) => item.quantity > 0)
        );
    };

    // Remove Product
    const removeFromCart = (id) => {

        setCart(
            cart.filter((item) => item.id !== id)
        );
    };

    return (
        <div>

            {/* Navbar */}
            <Navbar cartCount={cartCount} />

            {/* Page Routing */}
            <Routes>

                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <Home addToCart={addToCart} />
                    }
                />

                {/* Products Page */}
                <Route
                    path="/products"
                    element={
                        <Products addToCart={addToCart} />
                    }
                />

                {/* Cart Page */}
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            removeFromCart={removeFromCart}
                        />
                    }
                />

                {/* Product Details */}
                <Route
                    path="/product/:id"
                    element={
                        <h2>Product Details - Coming Next</h2>
                    }
                />

                {/* Login Page */}
                <Route
                    path="/login"
                    element={
                        <h2>Login Page - Coming Next</h2>
                    }
                />

                {/* 404 Page */}
                <Route
                    path="*"
                    element={
                        <h2>404 - Page Not Found</h2>
                    }
                />

            </Routes>

            {/* Footer */}
            <Footer />

        </div>
    );
}

export default App;
