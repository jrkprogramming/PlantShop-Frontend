import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import CartPage from './Pages/CartPage'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>

        <Routes>
          <Route path='/products' element={<HomePage/>}></Route>
          <Route path='/products/:id' element={<ProductDetailsPage />}></Route>
          <Route path="/cart">
            <Route index element={<CartPage />} />
            <Route path=":id" element={<CartPage />} />
          </Route>
        </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
