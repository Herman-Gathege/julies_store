import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Using Routes instead of Switch
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Filter from './components/Filter'; // Import the Filter component
import './styles.css'; // Import your CSS file

const App = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Sporty Shirt', description: 'A comfortable sporty shirt', price: 10, image: 'path/to/image1', type: 'sports wear' },
        { id: 2, name: 'Casual Pants', description: 'Stylish casual pants', price: 20, image: 'path/to/image2', type: 'casual wear' },
        { id: 3, name: 'Office Blazer', description: 'Professional office blazer', price: 30, image: 'path/to/image3', type: 'office wear' },
        { id: 4, name: 'Ceremony Dress', description: 'Elegant dress for ceremonies', price: 40, image: 'path/to/image4', type: 'ceremony wear' },
        // Add more products with types here
    ]);

    const [cart, setCart] = useState([]);
    const [selectedType, setSelectedType] = useState('');

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Get unique product types for filtering
    const types = [...new Set(products.map(product => product.type))];

    // Filter products based on selected type
    const filteredProducts = selectedType ? products.filter(product => product.type === selectedType) : products;

    return (
        <Router>
            <div>
                <Header cartCount={cart.length} />
                <Filter types={types} selectedType={selectedType} setSelectedType={setSelectedType} />
                <Routes>
                    <Route path="/" element={<ProductList products={filteredProducts} addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cart} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
