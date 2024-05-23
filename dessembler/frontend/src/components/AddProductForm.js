// components/AddProductForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
        rating: { rate: '', count: '' }
    });

    const { id, title, price, description, category, image, rating } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/products', formData);
            // here, we can reset the form fields after successful submission
            setFormData({
                id: '',
                title: '',
                price: '',
                description: '',
                category: '',
                image: '',
                rating: { rate: '', count: '' }
            });
            alert('Product added successfully');
        } catch (err) {
            console.error(err.response.data);
            alert('Error adding product');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" placeholder="ID" name="id" value={id} onChange={onChange} />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
