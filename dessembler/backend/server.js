const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
const productsRoutes = require('./routes/Products');
app.use('/api/products', productsRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
