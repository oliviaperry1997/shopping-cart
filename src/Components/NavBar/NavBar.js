import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
        </div>
    );
};

export default NavBar;
