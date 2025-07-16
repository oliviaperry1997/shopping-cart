// Shop.js
import React, { useEffect, useState } from "react";
import { useCart } from "../CartContext";
import styles from "./Shop.module.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        // Fetch products when component mounts
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleQuantityChange = (productId, value) => {
        const qty = Math.max(1, parseInt(value) || 1);
        setQuantities((prev) => ({ ...prev, [productId]: qty }));
    };

    if (loading) {
        return <div>Loading products...</div>;
    }

    return (
        <div className={styles.shopContainer}>
            {products.map((product) => {
                const quantity = quantities[product.id] || 1;
                return (
                    <div key={product.id} className={styles.productCard}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) =>
                                handleQuantityChange(product.id, e.target.value)
                            }
                            className={styles.quantityInput}
                        />
                        <button
                            onClick={() => addToCart(product, quantity)}
                            className={styles.addToCartBtn}
                        >
                            Add to Cart
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Shop;
