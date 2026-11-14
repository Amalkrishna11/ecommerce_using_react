
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {

    const featuredProducts = products.slice(0, 4);

    return (
        <div className="home">

            {/* Hero Section */}

            <section className="hero">
                <h1>Welcome to Fashion Street</h1>

                <p>
                    Discover the latest fashion collections
                    at the best prices.
                </p>

                <Link to="/products">
                    <button>Shop Now</button>
                </Link>
            </section>


            {/* Featured Products */}

            <section className="featured">

                <h2>Featured Products</h2>

                <div className="product-container">

                    {featuredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}

                </div>

            </section>

        </div>
    );
}

export default Home;
