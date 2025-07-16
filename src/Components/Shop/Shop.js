// Shop.js
import React, { useEffect, useState } from "react";
import { useCart } from "../CartContext";

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
        <div>
            <h1>Shop</h1>
            <ul>
                {products.map((product) => {
                    const quantity = quantities[product.id] || 1;
                    return (
                        <li key={product.id} style={{ marginBottom: "1rem" }}>
                            <h2>{product.title}</h2>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: "100px" }}
                            />
                            <p>${product.price}</p>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) =>
                                    handleQuantityChange(
                                        product.id,
                                        e.target.value
                                    )
                                }
                                style={{ width: "50px", marginRight: "0.5rem" }}
                            />
                            <button
                                onClick={() => addToCart(product, quantity)}
                            >
                                Add to Cart
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Shop;
