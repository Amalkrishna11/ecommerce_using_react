
function Cart({
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
}) {

    // Calculate Total Amount
    const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // Calculate Total Items
    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <div className="cart-page">

            <h1>Shopping Cart</h1>

            <h3>Total Items: {totalItems}</h3>

            {cart.length === 0 ? (

                <h2>Your Cart is Empty!</h2>

            ) : (

                <div>

                    {cart.map((item) => (

                        <div className="cart-item" key={item.id}>

                            <img
                                src={item.image}
                                alt={item.name}
                            />

                            <div>
                                <h3>{item.name}</h3>

                                <p>Price: ₹{item.price}</p>

                                <p>
                                    Subtotal: ₹{item.price * item.quantity}
                                </p>

                                <div className="quantity">

                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                    >
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                    >
                                        +
                                    </button>

                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    ))}

                    <h2>Total Amount: ₹{totalAmount}</h2>

                </div>

            )}

        </div>
    );
}

export default Cart;
