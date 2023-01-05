import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/signin/SignIn';
import Navbar from './components/Navbar';
import ProductPage from './components/product/ProductPage';
import AddProduct from './components/product/AddProduct';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
      <Routes>
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
