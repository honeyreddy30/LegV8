// components/DeleteProductForm.js

import React, { useState } from 'react';
import axios from 'axios';

const DeleteProductForm = () => {
    const [productId, setProductId] = useState('');

    const onChange = e => setProductId(e.target.value);

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.delete(`/api/products/${productId}`);
            setProductId('');
            alert('Product deleted successfully');
        } catch (err) {
            console.error(err);
            alert('Error deleting product');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Product ID" value={productId} onChange={onChange} />
            <button type="submit">Delete Product</button>
        </form>
    );
};

export default DeleteProductForm;
