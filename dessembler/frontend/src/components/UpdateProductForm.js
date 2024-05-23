// components/UpdateProductForm.js

import React, { useState } from 'react';
import axios from 'axios';

const UpdateProductForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        newPrice: ''
    });

    const { id, newPrice } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.put(`/api/products/${id}`, { price: newPrice });
            setFormData({ id: '', newPrice: '' });
            alert('Product price updated successfully');
        } catch (err) {
            console.error(err);
            alert('Error updating product price');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" placeholder="Product ID" name="id" value={id} onChange={onChange} />
                <input type="text" placeholder="New Price" name="newPrice" value={newPrice} onChange={onChange} />
            </div>
            <button type="submit">Update Price</button>
        </form>
    );
};

export default UpdateProductForm;
