// components/ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('/api/products');
                setProducts(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProducts();
    }, []);

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
            alert('Product deleted successfully');
        } catch (err) {
            console.error(err);
            alert('Error deleting product');
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <div key={product._id} className="product-card">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                    <button onClick={() => deleteProduct(product._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
