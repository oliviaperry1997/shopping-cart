import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useCart } from "../CartContext";

const NavBar = () => {
    const location = useLocation();
    const { cartItems } = useCart();
    const totalCount = cartItems.reduce(
        (sum, item) => sum + Number(item.quantity || 0),
        0
    );

    return (
        <div className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>

            {location.pathname === "/shop" && (
                <div style={{ marginLeft: "auto" }}>
                    <span role="img" aria-label="cart">
                        🛒
                    </span>{" "}
                    {totalCount}
                    <button style={{ marginLeft: "1rem" }}>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default NavBar;
