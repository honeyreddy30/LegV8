import React from 'react';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import UpdateProductForm from './components/UpdateProductForm';
import DeleteProductForm from './components/DeleteProductForm';
import StudentInformationView from './components/StudentInformationView';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>MERN Application</h1>
      <AddProductForm />
      <ProductList />
      <UpdateProductForm />
      <DeleteProductForm />
      <StudentInformationView />
    </div>
  );
};

export default App;
