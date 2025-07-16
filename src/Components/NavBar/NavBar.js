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
            <div className={styles.navLinks}>
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
            </div>

            {location.pathname === "/shop" && (
                <div className={styles.cart}>
                    🛒 <span>{totalCount}</span>
                    <button className={styles.checkoutBtn}>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default NavBar;
