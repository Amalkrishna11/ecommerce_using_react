
import { useState } from "react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    // Search and Filter

    const filteredProducts = products.filter((product) => {

        const searchMatch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const categoryMatch =
            category === "All" ||
            product.category === category;

        return searchMatch && categoryMatch;

    });

    return (
        <div className="products-page">

            <h1>Our Products</h1>

            {/* Search */}

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />


            {/* Category Filter */}

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="All">All Categories</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories</option>
            </select>


            {/* Product Display */}

            <div className="product-container">

                {filteredProducts.length > 0 ? (

                    filteredProducts.map((product) => (

                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />

                    ))

                ) : (

                    <h3>No Products Found!</h3>

                )}

            </div>

        </div>
    );
}

export default Products;
