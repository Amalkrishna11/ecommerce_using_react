
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
    return (
        <nav className="navbar">

            <h2>Fashion Street</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>

                <Link to="/cart">
                    Cart ({cartCount})
                </Link>

                <Link to="/login">Login</Link>
            </div>

        </nav>
    );
}

export default Navbar;
