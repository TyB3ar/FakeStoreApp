
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import './App.css'; 

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id/details" element={<ProductDetails />} />
        <Route path="/products/:id/delete" element={<DeleteProduct />} />
        <Route path="/new-product" element={<AddProduct />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
