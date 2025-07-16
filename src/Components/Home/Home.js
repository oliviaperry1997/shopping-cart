import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to ShopSmart!</h1>
      <p>Your one-stop shop for great deals on all your favorite products.</p>
      <div className={styles.featured}>
        <h2>Featured Categories</h2>
        <ul>
          <li>Electronics</li>
          <li>Clothing</li>
          <li>Accessories</li>
          <li>Home & Living</li>
        </ul>
      </div>
      <div className={styles.banner}>
        <p>🛒 Start shopping now and fill your cart with awesome stuff!</p>
      </div>
    </div>
  );
};

export default Home;
